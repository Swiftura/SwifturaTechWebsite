#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const docsDir = path.join(__dirname, 'docs');
const distDir = path.join(__dirname, 'dist');
const clientDir = path.join(__dirname, 'client');
const tempSrcDir = path.join(__dirname, 'temp-src-backup');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

console.log(`${colors.blue}🚀 Starting static build for GitHub Pages${colors.reset}`);

// Create docs directory if it doesn't exist
if (!fs.existsSync(docsDir)) {
  console.log(`${colors.yellow}Creating docs directory...${colors.reset}`);
  fs.mkdirSync(docsDir, { recursive: true });
}

try {
  // Build client application
  console.log(`${colors.yellow}Building client application...${colors.reset}`);
  
  // Copy config files to client directory to ensure they're found during build
  console.log(`${colors.yellow}Preparing build environment...${colors.reset}`);
  fs.copyFileSync(path.join(__dirname, 'tailwind.config.ts'), path.join(clientDir, 'tailwind.config.ts'));
  fs.copyFileSync(path.join(__dirname, 'postcss.config.js'), path.join(clientDir, 'postcss.config.js'));
  
  // Fix path aliases in all source files
  console.log(`${colors.yellow}Fixing import path aliases...${colors.reset}`);
  const fixAliases = require('./fix-aliases.cjs');
  // Copy the src directory recursively to a backup location
  execSync(`cp -r ${path.join(clientDir, 'src')} ${tempSrcDir}`, { stdio: 'ignore' });
  // Run the alias fixing function on the src directory
  fixAliases.processDirectory(path.join(clientDir, 'src'));
  
  // Change to client directory for build
  const originalDir = process.cwd();
  process.chdir(clientDir);
  
  try {
    // Add --emptyOutDir to clean the output directory and ensure proper build
    execSync('npx vite build --base=./ --outDir=../docs --emptyOutDir', { stdio: 'inherit' });
  } finally {
    // Change back to original directory
    process.chdir(originalDir);
    
    // Restore original source files from backup
    if (fs.existsSync(tempSrcDir)) {
      console.log(`${colors.yellow}Restoring original source files...${colors.reset}`);
      execSync(`rm -rf ${path.join(clientDir, 'src')}`, { stdio: 'ignore' });
      execSync(`mv ${tempSrcDir} ${path.join(clientDir, 'src')}`, { stdio: 'ignore' });
    }
  }
  
  // Copy index.html to 404.html (for GitHub Pages SPA routing)
  console.log(`${colors.yellow}Creating 404.html for SPA routing...${colors.reset}`);
  fs.copyFileSync(path.join(docsDir, 'index.html'), path.join(docsDir, '404.html'));
  
  // Create .nojekyll file (prevents GitHub Pages from using Jekyll)
  console.log(`${colors.yellow}Creating .nojekyll file...${colors.reset}`);
  fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
  
  console.log(`${colors.green}✅ Static build completed successfully!${colors.reset}`);
  console.log(`${colors.blue}Your site is ready in the 'docs' directory.${colors.reset}`);
  console.log(`${colors.blue}To deploy:${colors.reset}`);
  console.log(`${colors.yellow}1. Push this repository to GitHub${colors.reset}`);
  console.log(`${colors.yellow}2. Go to Settings > Pages${colors.reset}`);
  console.log(`${colors.yellow}3. Select "main" branch and "/docs" folder${colors.reset}`);
  
} catch (error) {
  console.error(`${colors.red}❌ Build failed:${colors.reset}`, error);
  
  // Clean up backup directory if it exists
  if (fs.existsSync(tempSrcDir)) {
    console.log(`${colors.yellow}Cleaning up after failure...${colors.reset}`);
    // Restore original source files
    execSync(`rm -rf ${path.join(clientDir, 'src')}`, { stdio: 'ignore' });
    execSync(`mv ${tempSrcDir} ${path.join(clientDir, 'src')}`, { stdio: 'ignore' });
  }
  
  process.exit(1);
}