PHOTOGRAPHY PORTFOLIO WEBSITE
==============================

A mini photography portfolio website built with pure HTML, CSS, and
JavaScript (no frameworks).

FOLDER STRUCTURE
-----------------
Photography-Portfolio/
├── css/
│   ├── style.css        -> Global layout, colors, header, hero, footer
│   ├── responsive.css   -> Media queries for tablet/mobile
│   └── gallery.css      -> Gallery grid, filters, lightbox styles
│
├── images/
│   ├── hero/            -> Homepage hero slider images
│   ├── gallery/         -> Nature / Portrait / Wildlife gallery photos
│   ├── services/        -> Wedding & portrait service images
│   └── logo.png
│
├── js/
│   ├── script.js        -> Shared: mobile nav, hero slider, footer year
│   ├── gallery.js       -> Gallery filtering + lightbox viewer
│   └── validation.js    -> Contact form validation
│
├── index.html           -> Home page
├── about.html           -> About page
├── gallery.html          -> Gallery with filters + lightbox
├── services.html         -> Services / pricing page
├── contact.html           -> Contact form page
└── README.txt

HOW TO RUN
-----------
1. Open the "Photography-Portfolio" folder in VS Code.
2. Install the "Live Server" extension (if not already installed).
3. Right-click index.html -> "Open with Live Server".
   (Or simply double-click index.html to open it in a browser,
   though Live Server gives you auto-refresh on save.)

FEATURES
---------
- Responsive design (desktop, tablet, mobile) with hamburger menu
- Auto-rotating hero image slider on the homepage
- Filterable gallery (All / Nature / Portrait / Wildlife)
- Lightbox image viewer with next/prev/keyboard navigation
- Contact form with real-time JavaScript validation (name, email,
  phone, message)
- Clean, reusable CSS variables (colors, fonts) in style.css

CUSTOMIZING
------------
- Replace images in /images with your own — just keep the same
  file names, or update the paths in the HTML files.
- Change colors/fonts by editing the :root variables at the top
  of css/style.css.
- Add more gallery photos by copying a .gallery-item block in
  gallery.html and giving it a data-category (nature/portrait/wildlife).
