# Atomic Visualizer

## Project Overview
Atomic Visualizer is an interactive 3D web application that renders atomic structures using **Three.js**. It allows users to explore the periodic table, view electron configurations in orbital notation, and visualize atoms in 3D. The project utilizes **Tailwind CSS** for the UI and **Vite** for the build tooling. It is a vanilla JavaScript application that directly manipulates the DOM and WebGL canvas without a frontend framework like React or Vue.

## Tech Stack
*   **Runtime/Build:** Node.js, Vite
*   **Language:** JavaScript (ES6+)
*   **3D Graphics:** Three.js
*   **Styling:** Tailwind CSS (v4)
*   **PWA:** vite-plugin-pwa (Progressive Web App support)

## Project Structure

*   **`src/main.js`**: The core application logic. It handles:
    *   **Data & State:** Processes `periodic-table.json` into a usable format.
    *   **UI Controller:** Manages the DOM overlays (navbar, properties panel, drawer) via a global `ui` object.
    *   **Three.js Scene:** Sets up the scene, camera, renderer, lighting, and orbit controls.
    *   **Atom Logic:** Generates electron orbitals based on quantum numbers (`s`, `p`, `d`, `f`) and renders them as point clouds.
    *   **Animation Loop:** Handles rotation and interactions (explode, spin).
*   **`periodic-table.json`**: (Implicitly referenced) Contains the raw data for the elements (atomic number, mass, configuration, etc.).
*   **`index.html`**: The main entry point containing the canvas container and the UI overlay markup.
*   **`style.css`**: Tailwind CSS imports and custom global styles.
*   **`vite.config.js`**: Configuration for Vite, including the PWA plugin and Tailwind integration.

## Building and Running

### Prerequisites
*   Node.js and npm installed.

### Commands
*   **Install Dependencies:**
    ```bash
    npm install
    ```
*   **Development Server:**
    ```bash
    npm run dev
    ```
    Starts the local dev server (default: `http://localhost:5173`).
*   **Production Build:**
    ```bash
    npm run build
    ```
    Builds the application to the `dist/` directory.
*   **Preview Build:**
    ```bash
    npm run preview
    ```
    Previews the production build locally.

## Architecture & Conventions

*   **Vanilla JS:** The app does not use a component framework. DOM elements are selected by ID and stored in a `ui` object in `src/main.js`. State updates manually trigger DOM updates (e.g., `selectElement(z)` updates all UI text and the 3D scene).
*   **Three.js Integration:** The 3D scene is initialized globally in `main.js`. The `atomGroup` holds the nucleus and electron clouds. `renderAtom(z)` clears this group and regenerates meshes based on the selected element.
*   **Styling:** Utility-first CSS using Tailwind. UI panels rely on toggling classes (e.g., `menu-visible`, `menu-hidden`) for visibility.
*   **Data Flow:**
    1.  User clicks an element in the drawer or uses search.
    2.  `selectElement(z)` is called.
    3.  DOM is updated with text data.
    4.  `renderAtom(z)` updates the 3D scene.
