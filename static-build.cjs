#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const docsDir = path.join(__dirname, 'docs');
const distDir = path.join(__dirname, 'dist');
const clientDir = path.join(__dirname, 'client');

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
  process.chdir(clientDir);
  // Add --emptyOutDir to clean the output directory and ensure proper build
  execSync('npx vite build --base=./ --outDir=../docs --emptyOutDir', { stdio: 'inherit' });
  
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
  process.exit(1);
}