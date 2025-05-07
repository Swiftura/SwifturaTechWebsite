#!/bin/bash
set -e

# Create a docs directory for GitHub Pages
mkdir -p docs

# Build the client application
echo "Building client application..."
cd client
npm run build

# Copy client build to docs
echo "Copying client build to docs directory..."
cp -r dist/* ../docs/

# Create a static version without server dependencies
echo "Creating static site version..."
cd ../docs
cp ../index.html .
cp ../404.html .

echo "Static build completed! The site is now ready for GitHub Pages."
echo "Your site is in the 'docs' directory."