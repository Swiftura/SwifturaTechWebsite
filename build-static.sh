#!/bin/bash

# Build static site for GitHub Pages deployment
# This script creates a static version of the site in the docs/ directory

# Colors for terminal output
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting static build for GitHub Pages${NC}"

# Create docs directory if it doesn't exist
if [ ! -d "docs" ]; then
  echo -e "${YELLOW}Creating docs directory...${NC}"
  mkdir -p docs
fi

# Move to client directory
cd client

echo -e "${YELLOW}Building client application...${NC}"

# Build the app with base path for GitHub Pages
echo -e "${YELLOW}Running Vite build...${NC}"
NODE_ENV=production npx vite build --base=./ --outDir=../docs --emptyOutDir

# Check if build was successful
if [ $? -eq 0 ]; then
  # Create 404.html for GitHub Pages SPA routing
  echo -e "${YELLOW}Creating 404.html for SPA routing...${NC}"
  cd ../docs
  cp index.html 404.html
  
  # Create .nojekyll file (prevents GitHub Pages from using Jekyll)
  echo -e "${YELLOW}Creating .nojekyll file...${NC}"
  touch .nojekyll
  
  echo -e "${GREEN}✅ Static build completed successfully!${NC}"
  echo -e "${BLUE}Your site is ready in the 'docs' directory.${NC}"
  echo -e "${BLUE}To deploy:${NC}"
  echo -e "${YELLOW}1. Push this repository to GitHub${NC}"
  echo -e "${YELLOW}2. Go to Settings > Pages${NC}"
  echo -e "${YELLOW}3. Select 'main' branch and '/docs' folder${NC}"
else
  echo -e "${RED}❌ Build failed${NC}"
  exit 1
fi