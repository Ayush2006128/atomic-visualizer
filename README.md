# Atomic Visualizer

A beautiful 3D atomic structure visualizer built with Three.js and Tailwind CSS. Explore the periodic table interactively and visualize electron configurations and orbital structures.

## Features

- **Interactive 3D Visualization**: View atomic structures in an intuitive 3D environment
- **Periodic Table Integration**: Browse through 50+ elements with detailed information
- **Electron Configuration**: Display electron configurations in orbital notation
- **Element Information**: Access atomic number, atomic mass, phase, electronegativity, and descriptions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Elegant transitions and visual effects using Three.js

## Tech Stack

- **Three.js** (v0.182.0) - 3D graphics library
- **Tailwind CSS** (v4.1.18) - Utility-first CSS framework
- **Vite** (v7.2.7) - Lightning-fast build tool
- **JavaScript (ES6+)** - Core application logic

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd atomic-visualizer
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development
Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build
Create an optimized production build:
```bash
npm run build
```

### Preview
Preview the production build:
```bash
npm run preview
```

## Project Structure

```
atomic-visualizer/
├── index.html          # Main HTML entry point
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── src/
│   ├── main.js         # Application logic and Three.js setup
│   └── style.css       # Tailwind CSS and custom styles
└── README.md           # This file
```

## How It Works

1. **3D Canvas**: A Three.js scene renders the atomic structure in the background
2. **UI Overlay**: An interactive overlay provides element selection and information display
3. **Element Data**: Contains information about 50+ elements including atomic structure and properties
4. **Responsive Layout**: Adapts to different screen sizes with a flexible navbar and sidebar

## Supported Elements

The visualizer includes data for elements from:
- Hydrogen (H, #1) to Americium (Am, #95)
- Properties include: atomic number, symbol, name, mass, category, electron configuration, phase, electronegativity, and descriptions

## Element Categories

- Nonmetals
- Alkali Metals
- Alkaline Earth Metals
- Transition Metals
- Lanthanides
- Actinides
- Metalloids
- Halogens
- Noble Gases
- Semiconductors
- And more...

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Ayush Muley**

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## Keywords

- Chemistry
- Physical Chemistry
- 3D Visualization
- Three.js
- Periodic Table
- Electron Configuration
- Interactive Learning
