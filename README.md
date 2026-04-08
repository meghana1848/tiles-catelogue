# JOHNSON TILES- Premium Tile Catalogue & Calculator

## 📌 Project Overview
EliteTiles is a modern front-end web application designed for tile retailers and customers. It serves as a digital catalogue to showcase tile varieties and includes a specialized calculator to help users determine the exact amount of material needed for their flooring projects.

## ✨ Features
- **Responsive Design:** Fully optimized for Desktop, Tablet, and Mobile using Tailwind CSS.
- **Dynamic Catalogue:** A clean, grid-based layout displaying tile types, categories, and pricing.
- **Smart Calculator:** 
    - Takes room dimensions (Length $\times$ Width).
    - Accounts for different tile sizes.
    - Calculates total square footage.
    - Adds a **10% wastage buffer** (industry standard).
    - Outputs the exact number of boxes required.
- **Modern UI/UX:** Uses a clean professional color palette, Google Fonts (Inter), and smooth hover animations.

## 🛠️ Tech Stack
- **HTML5:** Semantic structure.
- **Tailwind CSS:** Utility-first CSS framework for rapid, modern styling.
- **JavaScript (ES6):** For dynamic rendering and calculation logic.
- **FontAwesome:** For professional iconography.

## 🚀 How to Run
1. Download the project folder.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge).
3. No installation or server is required as it uses CDN for styles.

## 📐 Calculation Formula
The calculator uses the following logic:
$\text{Total Area} = \text{Length} \times \text{Width}$
$\text{Tile Area (sq ft)} = \frac{\text{Tile Size (inches)}^2}{144}$
$\text{Total Boxes} = \lceil \frac{(\text{Total Area} / \text{Tile Area}) \times 1.10}{\text{Tiles Per Box}} \rceil$
