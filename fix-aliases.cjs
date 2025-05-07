#!/usr/bin/env node

/**
 * This script recursively finds and replaces all import paths that use the @/ alias
 * with relative paths. It's used during the static build process to make the code
 * compatible with GitHub Pages deployment.
 */

const fs = require('fs');
const path = require('path');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

// Configuration
const srcDir = path.join(__dirname, 'client/src');
const componentDir = path.join(srcDir, 'components');
const hooksDir = path.join(srcDir, 'hooks');
const libDir = path.join(srcDir, 'lib');
const assetsDir = path.join(srcDir, 'assets');

console.log(`${colors.blue}🔍 Finding and fixing path aliases in the codebase...${colors.reset}`);

// Files to process (TypeScript and React files)
const fileExtensions = ['.ts', '.tsx', '.js', '.jsx'];

// Keep track of modified files
let modifiedCount = 0;

/**
 * Convert an absolute path to a relative import path
 */
function getRelativePath(fromFilePath, toModulePath) {
  // Get directory of the source file
  const fromDir = path.dirname(fromFilePath);
  
  // Calculate relative path from source file to target module
  let relativePath = path.relative(fromDir, toModulePath);
  
  // Ensure the path starts with ./ or ../
  if (!relativePath.startsWith('.')) {
    relativePath = `./${relativePath}`;
  }
  
  // Replace backslashes with forward slashes for import statements
  relativePath = relativePath.replace(/\\/g, '/');
  
  return relativePath;
}

/**
 * Process a file to replace import paths
 */
function processFile(filePath) {
  try {
    // Read file content
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace @/components/... imports
    content = content.replace(
      /from\s+["']@\/components\/(.*?)["']/g, 
      (match, componentPath) => {
        const relativePath = getRelativePath(
          filePath, 
          path.join(componentDir, componentPath)
        );
        return `from "${relativePath}"`;
      }
    );
    
    // Replace @/hooks/... imports
    content = content.replace(
      /from\s+["']@\/hooks\/(.*?)["']/g, 
      (match, hookPath) => {
        const relativePath = getRelativePath(
          filePath, 
          path.join(hooksDir, hookPath)
        );
        return `from "${relativePath}"`;
      }
    );
    
    // Replace @/lib/... imports
    content = content.replace(
      /from\s+["']@\/lib\/(.*?)["']/g, 
      (match, libPath) => {
        const relativePath = getRelativePath(
          filePath, 
          path.join(libDir, libPath)
        );
        return `from "${relativePath}"`;
      }
    );
    
    // Replace import statements at start of line
    content = content.replace(
      /^import\s+.*?\s+from\s+["']@\/components\/(.*?)["']/gm, 
      (match, componentPath) => {
        const relativePath = getRelativePath(
          filePath, 
          path.join(componentDir, componentPath)
        );
        return match.replace(/["']@\/components\/.*?["']/, `"${relativePath}"`);
      }
    );
    
    content = content.replace(
      /^import\s+.*?\s+from\s+["']@\/hooks\/(.*?)["']/gm, 
      (match, hookPath) => {
        const relativePath = getRelativePath(
          filePath, 
          path.join(hooksDir, hookPath)
        );
        return match.replace(/["']@\/hooks\/.*?["']/, `"${relativePath}"`);
      }
    );
    
    content = content.replace(
      /^import\s+.*?\s+from\s+["']@\/lib\/(.*?)["']/gm, 
      (match, libPath) => {
        const relativePath = getRelativePath(
          filePath, 
          path.join(libDir, libPath)
        );
        return match.replace(/["']@\/lib\/.*?["']/, `"${relativePath}"`);
      }
    );
    
    // Handle asset imports
    content = content.replace(
      /^import\s+.*?\s+from\s+["']@\/assets\/(.*?)["']/gm, 
      (match, assetPath) => {
        const relativePath = getRelativePath(
          filePath, 
          path.join(assetsDir, assetPath)
        );
        return match.replace(/["']@\/assets\/.*?["']/, `"${relativePath}"`);
      }
    );
    
    // Handle inline asset imports as well
    content = content.replace(
      /from\s+["']@\/assets\/(.*?)["']/g, 
      (match, assetPath) => {
        const relativePath = getRelativePath(
          filePath, 
          path.join(assetsDir, assetPath)
        );
        return `from "${relativePath}"`;
      }
    );
    
    // Check if content was modified
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modifiedCount++;
      console.log(`${colors.green}✓ Fixed:${colors.reset} ${filePath.replace(__dirname, '')}`);
    }
  } catch (error) {
    console.error(`${colors.red}Error processing file ${filePath}:${colors.reset}`, error);
  }
}

/**
 * Recursively process all files in a directory
 */
function processDirectory(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      // Recursively process sub-directories
      processDirectory(filePath);
    } else if (fileExtensions.includes(path.extname(filePath))) {
      // Process TypeScript/JavaScript files
      processFile(filePath);
    }
  }
}

// Start processing from the src directory
processDirectory(srcDir);

console.log(`${colors.blue}✅ Path alias fixing complete! ${colors.green}${modifiedCount}${colors.blue} files were modified.${colors.reset}`);

module.exports = { processDirectory };