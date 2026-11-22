# Shrutin K - Personal Portfolio Website

A modern, responsive, mobile-first personal portfolio built with **React + Vite (JSX)**.
Faithfully adapted from the clean, high-contrast, rounded-pill aesthetic of the reference site, with dedicated touch UX enhancements for mobile viewers and comprehensive representation of your full resume.

---

## 🌟 Key Features

- **Exact Design Aesthetic**: Replicates the clean Poppins typography, rounded border cards (`details-container`), checkmark skill badges, social icons, and profile section from the reference website.
- **Mobile-First Optimizations**:
  - **Quick Action Dock**: Sticky bottom thumb bar with 1-tap Call (`tel:`), instant WhatsApp chat, Email (`mailto:`), Resume Viewer, and Jump-to-Top.
  - **Animated Hamburger Menu**: Touch-friendly drawer with backdrop blur and auto-close on selection.
  - **1-Tap Clipboard**: Copy email address with instant toast confirmation.
  - **Responsive Layout**: Zero horizontal scroll, touch-friendly tap targets, and smooth reflow across iPhone, Android, tablet, and desktop screens.
- **Interactive Resume Modal**:
  - Full-featured formatted resume viewer with one-click **"Print / Save as PDF"** functionality.
- **Complete Resume Integration**:
  - **Hero & Profile**: Your professional portrait, title, bio, and live status badge.
  - **About Me**: Academic standing at Karpagam College of Engineering, specialization, and career goals.
  - **Education**: Detailed timeline from B.Tech IT (CGPA: 7.73) to Senior Secondary and High School.
  - **Technical Skills**: Grouped into Languages & Frontend, Backend & AI/ML, and Databases & Tools with level badges.
  - **Projects & Research**:
    - **ALERT-GOVERNMENT**: AI-Powered Government Emergency Alert Management System (Java, Spring Boot, MySQL, Google Maps).
    - **CLAF-Net**: Zero-Shot Multilingual Disaster Response Classification Framework (PyTorch, XLM-RoBERTa, Context Fusion).
  - **Certifications**: LeetCode 150+ DSA, Meta Full Stack, Cisco CCNA, NPTEL, and LinkedIn Learning.
  - **Contact**: Fast communication cards (Call, WhatsApp, Email, LinkedIn, GitHub).

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser (or scan/open from your mobile device on the same local network).

### 3. Build for Production
```bash
npm run build
```
The optimized production files will be in the `dist/` directory, ready to deploy to Netlify, Vercel, or GitHub Pages.

### 4. Deploy to Netlify
1. Drag and drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop), or
2. Push this repo to GitHub and connect it to Netlify with build command `npm run build` and publish directory `dist`.
