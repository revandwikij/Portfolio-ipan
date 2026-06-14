# Ivan — Personal UI/UX Designer Portfolio

Welcome to my personal portfolio repository! This project is a modern, responsive, and performance-optimized website designed and developed entirely by me (**Ivan**) from scratch to showcase my journey, skills, and selected works in UI/UX Design, Website Building, and Generative AI workflows.

Every interaction, layout choice, and line of code represents my obsession with micro-interactions, smooth rhythms, and clean, invisible design systems.

---

## 🛠️ Tech Stack & Features

### Core Technologies
* **Frontend:** Semantic HTML5, Modern CSS3 (CSS Variables, Flexbox, Grid), Vanilla JavaScript (ES6+).
* **Typography:** Space Grotesk & Plus Jakarta Sans via Google Fonts.

### Key Interactive Features
* **Interactive Tile Grid Hero:** A custom JavaScript-driven text grid that displays my personal branding phrase `heloipan`. It responds dynamically to mouse movements and clicks with glitch and glow effects.
* **Scroll-Scale Card Animation:** A smooth 3D perspective scroll effect (`rotateX` and `scale`) on the About section for desktop users, crafted using vanilla JS to track scroll progress.
* **Dynamic Portfolio Filtering:** Instant, layout-shift-free filtering for project categories (All, Graphic Design, Websites, AI Design) using HTML `data-*` attributes and smooth JavaScript transitions.
* **Anti-Conflict Smooth Scroll:** Custom absolute coordinate calculation script to ensure anchor links bypass sticky headers and active scroll animations flawlessly.
* **Scroll-Triggered Reveals:** Uses the `IntersectionObserver` API for lightweight, elegant fade-and-scale animations as elements enter the viewport.

---

## 📁 Project Structure

```text
├── index.html               # Main portfolio landing page (Developed by Ivan)
├── lumen-branding.html      # Detailed case study page for Lumen Branding
└── assets/
    ├── css/
    │   ├── styleIndex.css   # Main page stylesheet
    │   └── styleDetail.css  # Case study page stylesheet
    ├── js/
    │   ├── scriptIndex.js   # Interactive scripts for home page
    │   └── scriptDetail.js  # Interactive scripts for details page
    └── images/
        └── test.png         # Profile portrait asset
