# The Path of Dharma: Lanka's Shadow 🕉

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Platform](https://img.shields.io/badge/platform-web-orange.svg)]()

### 🔗 **[Live Demo Website](https://manan02-para.github.io/the-pathway-of-dharma/)**

A premium, highly aesthetic pre-promotional landing page for the epic tactical board game **"The Path of Dharma: Lanka's Shadow"** by Epic Quest Games. 

Immerse yourself in the legendary journey of Ramji from Ayodhya to Lanka through scroll-triggered visuals, a fixed strategic map background, interactive map locations, and a dynamic 3D-like box display.

---

## 🗺 Table of Contents
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Interactive Mechanics](#-interactive-mechanics)
- [Visual Showcase](#-visual-showcase)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [File Structure](#-file-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📖 About the Project

**"The Path of Dharma: Lanka's Shadow"** is a premium strategic board game set in ancient Bharatvarsha, scheduled for release in late 2026. Players command divine forces, forge alliances with the Vanara kingdom, construct the legendary Ram Setu, and lay siege to Ravan's golden fortress in Lanka to restore cosmic balance (Dharma).

This repository contains the source code for the landing page designed to capture pre-registrations, showcase game aesthetics, highlight premium physical components (like hand-carved wooden chests and resin miniatures), and offer early-bird collector benefits.

---

## ✨ Key Features

- **Viewport-Fixed Map Backdrop:** A high-resolution layout map of Bharatvarsha stays fixed as the page scrolls, with opacity transitions allowing the story text to overlay the map beautifully.
- **Dynamic 3D-Like Box Showcase:** Interactive 3D board game box container in the Hero section that reacts to mouse hover and touch interactions.
- **Interactive Battleground Pinpoints:** Live glow-pins representing historical milestones (Ayodhya, Dandakaranya, Kishkindha, Ram Setu, Lanka) displaying information overlays on hover or click.
- **Component Slideshow:** High-fidelity interactive component slideshow showcasing the premium box cover, map cards, and board setup.
- **Priority Pre-Order Portal:** Dynamic validation form that logs user interest and transitions to a custom gold-glowing success screen upon submission.
- **Scroll-Triggered Reveals:** Smooth micro-animations that fade and slide content elements into view as the user scrolls.

---

## ⚙️ Interactive Mechanics

### 1. 3D Game Box
Hovering over the 3D-box container tilts and rotates the box model using perspective CSS transforms, giving visitors a tangible feel of the physical Collector's Edition packaging.

### 2. Map Pin Glows
Hovering over any glow-pin coordinates highlights the specific geographic milestone on the background map, triggering a tool-tip highlighting the strategic game objectives for that zone.

### 3. Component Slideshow
Fully responsive slide navigators with indicator dots allowing potential backers to toggle between high-quality renders of the game boards, custom cards, and miniatures.

---

## 🛠 Technology Stack

- **Structure:** Semantic HTML5
- **Styling:** Custom Modern Vanilla CSS (variables, glassmorphic filters, keyframe animations, 3D perspective transforms)
- **Logic:** Vanilla JavaScript (ES6+, scroll event listeners, interactive DOM state managers, carousel animation timers)
- **Assets:** High-resolution optimized graphics and art assets for game components and backgrounds.

---

## 🚀 Getting Started

To run the landing page locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Manan02-para/the-pathway-of-dharma.git
   ```

2. **Navigate to the directory:**
   ```bash
   cd the-pathway-of-dharma
   ```

3. **Open the file in a browser:**
   Double-click `index.html` or run a local development server (e.g., using VS Code Live Server or python's simple server):
   ```bash
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`.

---

## 📁 File Structure

```text
the-pathway-of-dharma/
│
├── assets/                  # High-quality visual assets
│   ├── board-setup.jpg      # Main physical game setup
│   ├── board-setup-alt.jpg  # Alternate board setup with components
│   ├── box-cover.jpg        # Front box artwork
│   ├── box-front-flat.png   # Transparent 3D flat texture
│   ├── map-close-up.jpg     # Detailed closeup of cards and tokens
│   ├── map-layout.jpg       # Main background map of Bharatvarsha
│   └── quadrants-board.jpg  # Core gameplay board layout
│
├── index.html               # Main structure and semantic components
├── style.css                # Premium styling system, gradients & glassmorphism
├── app.js                   # Interactivity, carousels, 3D box, form state
├── .gitignore               # Ignored system and local files
└── README.md                # Project documentation
```

---

## 🤝 Contributing

Contributions to improve the landing page responsiveness, animations, or styling are welcome.
1. Fork the repository.
2. Create a branch (`git checkout -b feature/improvement`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/improvement`).
5. Open a Pull Request.

---

## 📜 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---
*Developed with devotion and care in Bharat.* 🕉
