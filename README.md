# Portfolio Website# 🚀 Portfolio Website



> Modern, responsive portfolio website built with React showcasing professional experience, projects, and skills.> A modern, interactive portfolio website built with React, showcasing professional experience, projects, skills, and achievements.



![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)

![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.22-purple?style=flat-square)![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.22-purple?style=flat-square)

![React Router](https://img.shields.io/badge/React_Router-7.9.3-red?style=flat-square)

---![License](https://img.shields.io/badge/License-Private-lightgrey?style=flat-square)



## ✨ Features---



- **Responsive Design** - Optimized for all devices## 📋 Table of Contents

- **Interactive Animations** - Smooth transitions with Framer Motion

- **Project Showcase** - Portfolio with live demos and source code- [About the Project](#about-the-project)

- **Contact Form** - Direct communication with visitors- [Features](#features)

- **Resume Integration** - Built-in PDF viewer and download- [Technology Stack](#technology-stack)

- **DSA Problem Tracker** - Interactive coding problems display- [Prerequisites](#prerequisites)

- [Installation & Setup](#installation--setup)

---- [Running the Application](#running-the-application)

- [Building for Production](#building-for-production)

## 🛠️ Tech Stack- [Deployment](#deployment)

- [Project Structure](#project-structure)

- **React 18.2.0** - UI framework- [Customization](#customization)

- **React Router 7.9.3** - Navigation- [Troubleshooting](#troubleshooting)

- **Framer Motion 12.23.22** - Animations- [Contributing](#contributing)

- **React PDF 10.1.0** - PDF rendering- [Contact](#contact)

- **Canvas Confetti 1.9.3** - Interactive effects

---

---

## 🎯 About the Project

## 🚀 Quick Start

This portfolio website serves as a comprehensive showcase of **Mohan Ram Shanmugam's** professional journey as a **Full Stack Developer** and **ML & AI Specialist**. With over 5 years of experience in software development, this platform highlights:

```bash

# Clone the repository- **Professional Experience**: Detailed work history and accomplishments

git clone https://github.com/topgunprogrammer/portfolio.git- **Technical Projects**: Portfolio of real-world applications and solutions

- **Skills & Expertise**: Comprehensive overview of technical capabilities

# Navigate to project- **Certifications & Awards**: Recognition and professional development

cd portfolio- **Contact Information**: Easy ways to connect and collaborate



# Install dependenciesThe website is designed with a focus on:

npm install

- 🎨 **Modern UI/UX**: Clean, professional design with smooth animations

# Start development server- 📱 **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)

npm start- ⚡ **Performance**: Fast load times and optimized bundle size

```- 🎭 **Interactive Elements**: Engaging animations powered by Framer Motion

- 🔍 **SEO Friendly**: Structured for search engine optimization

Visit `http://localhost:3000` to view the site.

---

---

## ✨ Features

## 📦 Build & Deploy

### 🏠 **Home Page**

```bash

# Create production build- Eye-catching hero section with animated introduction

npm run build- Quick navigation to all major sections

- Dynamic greeting and call-to-action buttons

# Deploy to GitHub Pages

npm run deploy### 👤 **About Section**

```

- Professional bio and background

---- Core competencies and expertise areas

- Career highlights and achievements

## 📁 Project Structure

### 💼 **Experience Page**

```

src/- Chronological work history

├── components/          # Reusable UI components- Detailed job responsibilities and accomplishments

│   ├── Header/         # Navigation- Technologies and tools used in each role

│   ├── Hero/           # Landing section

│   ├── About/          # About section### 🚀 **Projects Showcase**

│   ├── Experience/     # Work history

│   ├── Projects/       # Project showcase- Portfolio of completed projects

│   ├── Contact/        # Contact form- Project cards with descriptions, technologies, and links

│   ├── Resume/         # Resume viewer- Live demos and source code access

│   ├── DSA/            # DSA problems- Filterable by technology/category

│   ├── Footer/         # Page footer

│   ├── ScrollToTop/    # Scroll utility### 📄 **Resume Viewer**

│   └── NotFound/       # 404 page with dino game

├── pages/              # Page components- Integrated PDF resume viewer

├── router/             # Route configuration- Download option for offline viewing

└── data/               # JSON data files- Responsive and accessible

    ├── personalInfo.json

    ├── about.json### 📧 **Contact Page**

    ├── experience.json

    ├── projects.json- Contact form for direct communication

    ├── awards.json- Social media links (GitHub, LinkedIn, Twitter)

    ├── dsa.json- Professional contact information

    └── iconMapping.js

```### 🎉 **Interactive Elements**



---- Smooth page transitions

- Confetti animations for engagement

## 🎨 Customization- Hover effects and micro-interactions

- Loading states and animations

### Update Personal Information

---

Edit JSON files in `/src/data/`:

## 🛠️ Technology Stack

**personalInfo.json**

```json### **Frontend Framework**

{

  "name": "Your Name",- **React 18.2.0**: Core UI library

  "title": "Your Title",- **React Router DOM 7.9.3**: Client-side routing and navigation

  "email": "your.email@example.com",- **Framer Motion 12.23.22**: Advanced animations and transitions

  "location": "Your Location",

  "social": {### **UI Components & Styling**

    "github": "https://github.com/username",

    "linkedin": "https://linkedin.com/in/username"- **CSS3**: Custom styling with modern features

  }- **React Icons 5.5.0**: Comprehensive icon library

}- **Canvas Confetti 1.9.3**: Celebration effects

```

### **Document Handling**

**projects.json**

```json- **React PDF 10.1.0**: PDF rendering and viewing

{- **PDF.js 5.4.149**: PDF parsing engine

  "projects": [

    {### **Development Tools**

      "title": "Project Name",

      "description": "Project description",- **React Scripts 5.0.1**: Build tooling and configuration

      "technologies": ["React", "Node.js"],- **Create React App**: Project bootstrapping

      "liveUrl": "https://demo.com",- **ESLint**: Code linting and quality

      "githubUrl": "https://github.com/user/repo"

    }### **Deployment**

  ]

}- **GitHub Pages 6.3.0**: Static site hosting

```- **GitHub Actions**: CI/CD pipeline (optional)



### Update Styling---



- Global styles: `/src/App.css`## 📦 Prerequisites

- Component styles: Individual `.css` files

- CSS variables in `:root` for colorsBefore you begin, ensure you have the following installed on your system:



### Add Environment Variables### **Required Software**



Create `.env` file for configuration:1. **Node.js** (v14.0.0 or higher recommended)

```env

REACT_APP_FORMSPREE_URL=your_formspree_endpoint   - Download from: [https://nodejs.org/](https://nodejs.org/)

```   - Verify installation:

     ```bash

---     node --version

     ```

## 🌐 Live Demo   - Expected output: `v14.x.x` or higher



**Website**: [https://topgunprogrammer.github.io/portfolio](https://topgunprogrammer.github.io/portfolio)2. **npm** (v6.0.0 or higher) or **yarn** (v1.22.0 or higher)



---   - npm comes bundled with Node.js

   - Verify installation:

## 📞 Contact     ```bash

     npm --version

**Mohan Ram Shanmugam**     ```

- Email: mohanram.management@gmail.com   - Expected output: `6.x.x` or higher

- GitHub: [@topgunprogrammer](https://github.com/topgunprogrammer)

- LinkedIn: [topgunprogrammer](https://linkedin.com/in/topgunprogrammer)3. **Git** (for version control and deployment)

   - Download from: [https://git-scm.com/](https://git-scm.com/)

---   - Verify installation:

     ```bash

**Built with ❤️ using React**     git --version
     ```

### **Optional Tools**

- **VS Code**: Recommended code editor with React extensions
- **React Developer Tools**: Browser extension for debugging
- **GitHub Account**: Required for GitHub Pages deployment

---

## 🔧 Installation & Setup

Follow these detailed steps to set up the project on your local machine:

### **Step 1: Clone the Repository**

```bash
# Navigate to your desired directory
cd ~/Documents

# Clone the repository
git clone https://github.com/topgunprogrammer/portfolio.git

# Navigate into the project directory
cd portfolio
```

### **Step 2: Install Dependencies**

This project uses npm for package management. Install all required dependencies:

```bash
# Install all packages listed in package.json
npm install
```

**What this does:**

- Downloads all dependencies from npm registry
- Creates a `node_modules` folder with all packages
- Generates `package-lock.json` for dependency locking
- Typically takes 2-5 minutes depending on internet speed

**Common installation issues and fixes:**

- **Permission errors**: Try `sudo npm install` (macOS/Linux)
- **Network errors**: Check your internet connection or try a different network
- **Version conflicts**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

### **Step 3: Verify Installation**

Check that all dependencies are installed correctly:

```bash
# List installed packages
npm list --depth=0

# Check for vulnerabilities
npm audit
```

### **Step 4: Configure Environment (Optional)**

If you need to customize settings, create a `.env` file in the root directory:

```bash
# Create .env file
touch .env
```

Add environment variables (example):

```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_CONTACT_EMAIL=mohanram.management@gmail.com
```

**Note**: Environment variables must start with `REACT_APP_` to be accessible in React.

---

## 🚀 Running the Application

### **Development Mode**

Start the development server with hot-reloading:

```bash
npm start
```

**What happens:**

1. Webpack compiles the React application
2. Development server starts on port 3000
3. Browser automatically opens to `http://localhost:3000`
4. Changes to source files trigger automatic reloads

**Expected output:**

```
Compiled successfully!

You can now view portfolio-website in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.x:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

**Development Features:**

- ✅ Hot Module Replacement (HMR)
- ✅ Source maps for debugging
- ✅ Error overlay in browser
- ✅ Fast refresh for instant updates

### **Stopping the Server**

Press `Ctrl + C` in the terminal to stop the development server.

### **Accessing from Other Devices**

To test on mobile devices or other computers on your network:

```bash
# Find your local IP address
# On macOS/Linux:
ifconfig | grep "inet "

# On Windows:
ipconfig

# Access from other devices using:
http://YOUR_IP_ADDRESS:3000
```

---

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

**What this does:**

1. Creates a `build` directory
2. Bundles React in production mode
3. Optimizes and minifies code
4. Generates static files for deployment
5. Includes hashed filenames for cache busting

**Build output:**

```
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  XX.XX KB  build/static/js/main.[hash].js
  X.XX KB   build/static/css/main.[hash].css

The build folder is ready to be deployed.
```

**Build artifacts** (in `/build` folder):

- `index.html`: Entry point
- `static/js/`: JavaScript bundles
- `static/css/`: Stylesheets
- `static/media/`: Images and fonts
- `asset-manifest.json`: Asset mapping

### **Testing the Production Build Locally**

```bash
# Install serve globally (one-time)
npm install -g serve

# Serve the build folder
serve -s build

# Access at http://localhost:3000
```

---

## 🌐 Deployment

### **Deploying to GitHub Pages**

This project is configured for easy deployment to GitHub Pages.

#### **Prerequisites for Deployment:**

1. **GitHub Repository**: Code must be in a GitHub repository
2. **GitHub Pages Enabled**: Enable in repository settings
3. **Correct Homepage**: Set in `package.json` (already configured)

#### **Deployment Steps:**

```bash
# Deploy to GitHub Pages
npm run deploy
```

**What this does:**

1. Runs `npm run build` (predeploy script)
2. Creates production build in `/build` folder
3. Pushes build to `gh-pages` branch
4. GitHub Pages automatically serves from this branch

**Expected output:**

```
> portfolio-website@0.1.0 predeploy
> npm run build

Creating an optimized production build...
Compiled successfully.

> portfolio-website@0.1.0 deploy
> gh-pages -d build

Published
```

#### **Accessing Your Deployed Site:**

Your site will be live at:

```
https://topgunprogrammer.github.io/portfolio
```

**Deployment time**: Usually 2-5 minutes for changes to appear

#### **Updating the Deployment:**

Simply run `npm run deploy` again after making changes:

```bash
# Make your changes
# Test locally with npm start
# Deploy updates
npm run deploy
```

### **Alternative Deployment Options**

#### **Netlify**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=build
```

#### **Vercel**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### **AWS S3 + CloudFront**

```bash
# Build the project
npm run build

# Upload to S3 (requires AWS CLI)
aws s3 sync build/ s3://your-bucket-name

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

## 📁 Project Structure

```
portfolio-website/
├── 📄 package.json              # Project metadata and dependencies
├── 📄 README.md                 # This file
├── 📄 .gitignore               # Git ignore rules
│
├── 📁 public/                   # Static assets (not processed by webpack)
│   ├── index.html              # HTML template
│   ├── 📁 images/              # Public images
│   │   └── profile.png         # Profile photo
│   ├── 📁 resume/              # Resume files
│   │   └── Resume.pdf          # Downloadable resume
│   └── 📁 certifications/      # Certification documents
│
├── 📁 src/                      # Source code
│   ├── 📄 index.js             # Application entry point
│   ├── 📄 App.css              # Global styles and design system
│   ├── 📄 App.js               # Root component
│   ├── 📄 App.css              # App-level styles
│   │
│   ├── 📁 components/          # Reusable UI components
│   │   ├── 📁 Header/          # Navigation header
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   ├── 📁 Footer/          # Page footer
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── 📁 Hero/            # Hero section
│   │   │   ├── Hero.js
│   │   │   └── Hero.css
│   │   ├── 📁 About/           # About section
│   │   ├── 📁 Experience/      # Experience timeline
│   │   ├── 📁 Projects/        # Project showcase
│   │   │   ├── Projects.js
│   │   │   ├── ProjectCard.js
│   │   │   ├── Projects.css
│   │   │   └── ProjectCard.css
│   │   ├── 📁 Resume/          # Resume viewer
│   │   └── 📁 Contact/         # Contact form
│   │
│   ├── 📁 pages/               # Page components (routes)
│   │   ├── HomePage.js         # Landing page
│   │   ├── AboutPage.js        # About page
│   │   ├── ExperiencePage.js   # Experience page
│   │   ├── ProjectsPage.js     # Projects page
│   │   ├── ResumePage.js       # Resume page
│   │   └── ContactPage.js      # Contact page
│   │
│   ├── 📁 router/              # Routing configuration
│   │   ├── index.js            # Router exports
│   │   ├── routes.js           # Route definitions
│   │   └── AppRoutes.js        # Route component
│   │
│   ├── 📁 data/                # JSON data files
│   │   └── 📁 sections/        # Section-specific data
│   │       ├── personalInfo.json    # Personal details
│   │       ├── about.json           # About content
│   │       ├── experience.json      # Work history
│   │       ├── projects.json        # Project data
│   │       ├── awards.json          # Certifications
│   │       ├── dsa.json             # DSA problems data
│   │       └── iconMapping.js       # Icon configuration
│   │
│       └── iconMapping.js        # Icon configuration
│
└── 📁 build/                    # Production build (generated)
    └── (optimized static files)
```

### **Key Directories Explained:**

- **`/public`**: Files here are served as-is, not processed by webpack
- **`/src`**: All source code that gets compiled and bundled
- **`/src/components`**: Reusable UI components (building blocks)
- **`/src/pages`**: Full page components mapped to routes
- **`/src/data`**: JSON files for easy content updates
- **`/build`**: Generated production files (git-ignored)

---

## 🎨 Customization

### **Updating Personal Information**

Edit JSON files in `/src/data/`:

#### **personalInfo.json**

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "email": "your.email@example.com",
  "phone": "+1234567890",
  "location": "Your City, Country",
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://www.linkedin.com/in/yourusername/"
  }
}
```

#### **projects.json**

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Project description",
      "technologies": ["React", "Node.js", "MongoDB"],
      "liveUrl": "https://project-url.com",
      "githubUrl": "https://github.com/yourusername/project"
    }
  ]
}
```

### **Updating Styles**

- **Global styles**: Edit `/src/App.css`
- **App-level styles**: Edit `/src/App.css`
- **Component styles**: Edit individual `.css` files in component folders

### **Changing Colors**

Update CSS variables in `/src/App.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --text-color: #your-color;
  --background-color: #your-color;
}
```

### **Adding New Pages**

1. Create page component in `/src/pages/`
2. Add route in `/src/router/AppRoutes.js`
3. Update navigation in `/src/components/Header/Header.js`

### **Updating Resume**

Replace `/public/resume/Resume.pdf` with your resume file.

---

## 🐛 Troubleshooting

### **Common Issues and Solutions**

#### **Issue: Port 3000 is already in use**

```bash
# Solution 1: Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Solution 2: Use a different port
PORT=3001 npm start
```

#### **Issue: Module not found errors**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### **Issue: Build fails or errors in production**

```bash
# Clear cache and rebuild
npm run build -- --reset-cache

# Or clear cache first
rm -rf node_modules/.cache
npm run build
```

#### **Issue: Changes not reflecting after deployment**

```bash
# Clear GitHub Pages cache
# Wait 5-10 minutes or force refresh browser (Cmd+Shift+R)

# Check gh-pages branch
git checkout gh-pages
git log
git checkout main
```

#### **Issue: PDF not loading**

```bash
# Ensure PDF is in public folder
# Check browser console for errors
# Verify PDF path in Resume component
```

#### **Issue: Animations not smooth**

```bash
# Check if hardware acceleration is enabled in browser
# Reduce animation complexity in Framer Motion settings
```

### **Getting Help**

If you encounter issues not covered here:

1. **Check browser console**: Press F12 → Console tab
2. **Review error messages**: Read the full error stack trace
3. **Search issues**: Check GitHub repository issues
4. **Ask for help**: Open a new issue with:
   - Error message
   - Steps to reproduce
   - Browser and OS information
   - Screenshots if applicable

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this portfolio:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit changes**: `git commit -m 'Add some AmazingFeature'`
4. **Push to branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

### **Contribution Guidelines**

- Follow existing code style and conventions
- Write clear commit messages
- Test thoroughly before submitting
- Update documentation if needed
- Add comments for complex logic

---

## 📞 Contact

**Mohan Ram Shanmugam**

- 📧 Email: [mohanram.management@gmail.com](mailto:mohanram.management@gmail.com)
- 🐙 GitHub: [@topgunprogrammer](https://github.com/topgunprogrammer)
- 💼 LinkedIn: [topgunprogrammer](https://www.linkedin.com/in/topgunprogrammer/)
- 📱 Phone: +91 8610408599
- 📍 Location: Chennai, Tamil Nadu, India

**Project Repository**: [https://github.com/topgunprogrammer/portfolio](https://github.com/topgunprogrammer/portfolio)

**Live Website**: [https://topgunprogrammer.github.io/portfolio](https://topgunprogrammer.github.io/portfolio)

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

## 🙏 Acknowledgments

- **Create React App** - Project bootstrapping
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **GitHub Pages** - Free hosting
- **React Community** - Inspiration and support

---

## 📈 Project Stats

- **Lines of Code**: ~5,000+
- **Components**: 15+ reusable components
- **Pages**: 6 main pages
- **Dependencies**: 15 production packages
- **Build Time**: ~30-60 seconds
- **Bundle Size**: Optimized and minified

---

## 🚀 Future Enhancements

Planned features and improvements:

- [ ] Blog section for technical articles
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Contact form backend
- [ ] Project filtering and search
- [ ] Performance optimizations
- [ ] Accessibility improvements (WCAG 2.1)
- [ ] Progressive Web App (PWA) features
- [ ] Testimonials section

---

<div align="center">

**Built with ❤️ by Mohan Ram Shanmugam**

⭐ Star this repo if you find it helpful!

</div>
