# Swiftura - AI Automation Solutions

A modern, professional website for Swiftura, showcasing AI automation expertise and client success stories.

## 🚀 Project Overview

This repository contains the source code for the Swiftura company website. The site features a dark navy blue background with blue accent colors, highlighting Swiftura's AI automation solutions through case studies and demonstrating the results achieved for clients.

## 🖥️ Features

- **Modern Design**: Clean, professional interface with dark mode aesthetics
- **Responsive Layout**: Fully responsive design that works on mobile, tablet, and desktop
- **Case Studies**: Detailed project showcases with metrics and results
- **Smooth Animations**: Subtle scroll animations for enhanced user experience
- **Contact Form**: Simple lead capture form for potential clients

## 🛠️ Technologies

- **Frontend**: React.js, TypeScript, Tailwind CSS, Shadcn UI components
- **Build System**: Vite
- **Deployment**: GitHub Pages

## 💻 Development

This project uses a modern React.js stack with TypeScript and Vite.

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Folder Structure

- `client/` - Frontend React application
  - `src/` - Source code
    - `components/` - UI components
    - `assets/` - Images and static assets
    - `hooks/` - Custom React hooks
    - `lib/` - Utility functions and libraries
- `.github/workflows/` - GitHub Actions workflows for deployment

## 📚 Deployment to GitHub Pages

### Automatic Deployment

This project is set up to automatically deploy to GitHub Pages when changes are pushed to the main branch using GitHub Actions.

The workflow is defined in `.github/workflows/deploy.yml`.

### Manual Deployment

To manually build the site for GitHub Pages deployment:

1. Run the build script:
   ```bash
   ./build-static.sh
   ```
2. This will create a `docs/` directory with the static site
3. Push the changes to GitHub
4. In GitHub repository settings, configure GitHub Pages to use the `main` branch and `/docs` folder as the source

## 🧩 Customization

To customize the site for your needs:

- Update content in the component files
- Modify the color scheme in `client/src/index.css`
- Replace images in the `client/src/assets/` directory
- Adjust the contact form submission endpoint in `client/src/components/ContactForm.tsx`

## 📄 License

© 2025 Swiftura. All rights reserved.