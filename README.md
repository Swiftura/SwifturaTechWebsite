# Swiftura - AI Business Automation Solutions

A modern, professional website for Swiftura, showcasing AI automation projects with dynamic, responsive design and dark-mode aesthetic.

## Features

- Responsive design for all devices
- Dark theme with blue accent colors
- Smooth scroll animations
- Project showcase with results metrics
- Testimonials carousel
- Contact form

## Getting Started

### Prerequisites

- Node.js v14 or higher
- npm or yarn

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/swiftura-website.git
   cd swiftura-website
   ```

2. Install dependencies
   ```sh
   npm install
   ```

3. Start the development server
   ```sh
   npm run dev
   ```

## Deployment to GitHub Pages

This website is fully compatible with GitHub Pages hosting. To deploy:

### Option 1: Automatic Build

1. Push your code to GitHub
2. The GitHub Action workflow will automatically build and deploy the site
3. Go to Settings > Pages and ensure it's set to deploy from the `gh-pages` branch

### Option 2: Manual Build

1. Run the static build script:
   ```sh
   node static-build.js
   ```

2. This will create a `docs` folder with a GitHub Pages-ready static site
3. Push changes to GitHub
4. In repository settings, configure GitHub Pages to use the `main` branch and `/docs` folder

## Folder Structure

```
swiftura-website/
├── .github/            # GitHub Actions workflows
├── client/             # Frontend code
│   ├── src/            # Source code
│   │   ├── assets/     # Images and static assets
│   │   ├── components/ # React components
│   │   ├── hooks/      # Custom React hooks
│   │   ├── lib/        # Utility functions
│   │   ├── pages/      # Page components
│   │   ├── App.tsx     # Main app component
│   │   ├── index.css   # Global styles
│   │   ├── main.tsx    # Entry point
│   │   └── types.ts    # TypeScript types
│   └── index.html      # HTML template
├── docs/               # Generated static site (for GitHub Pages)
├── static-build.js     # Script to build static site
└── README.md           # This file
```

## Technology Stack

- React.js 
- TypeScript
- TailwindCSS
- Framer Motion (animations)
- React Hook Form (form handling)
- GitHub Pages (hosting)