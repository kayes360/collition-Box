# Animated Collision Box Container

## Overview
This project is a **React, Vite, and TypeScript**-based **animated container** with moving boxes, rendered using a **Canvas element**. The animation creates an engaging visual experience where:

- A **container expands and shrinks continuously**.
- **Seven boxes** of different colors **move horizontally inside the container**, bouncing off the edges.
- **Each box starts moving after a set delay**, creating a cascading effect.
- **A collision sound plays** whenever a box hits the left or right boundary of the container.

## Features
- **Canvas-based animation**: Everything is drawn dynamically on a `<canvas>` element.
- **Responsive Container**: The container continuously **shrinks and expands**.
- **Smooth Box Movement**: The **seven colored boxes** move horizontally **and bounce off the edges**.
- **Sound Effects**: Each time a box collides with a boundary, a **sound effect is triggered**.
- **Sequential Animation**: Boxes start moving **one after another** with a slight delay, creating a unique sound effect.
- **Built with React, Vite, and TypeScript** for **optimized performance**.

## Installation & Setup
To run this project locally, follow these steps:

### **1. Clone the repository**
```sh
 git clone https://github.com/kayes360/Collition-Box.git
 cd Collition-Box
```

### **2. Install dependencies**
```sh
 npm install
```

### **3. Run the development server**
```sh
 npm run dev
```

### **4. Open the project in the browser**
By default, Vite runs on port **5173**. Open **[http://localhost:5173](http://localhost:5173)** in your browser.

## Project Structure
```
📦 project-root
 ┣ 📂 public
 ┃ ┣ 📄 sound.mp3  # Sound file for collision effect
 ┃ ┗ 📄 index.html  # Entry point
 ┣ 📂 src
 ┃ ┣ 📄 components
 ┃ ┃ ┗ 📄 CollisionContainer.tsx  # Main animated container component
 ┃ ┣ 📄 App.tsx  # Root component
 ┃ ┗ 📄 main.tsx  # Entry point for React
 ┣ 📄 package.json  # Dependencies & scripts
 ┣ 📄 tsconfig.json  # TypeScript config
 ┗ 📄 vite.config.ts  # Vite config file
```

## How It Works
- The **container expands and shrinks** continuously, modifying its width dynamically.
- **Seven boxes** of different colors **move inside the container**, bouncing left and right.
- **Each box starts moving at a different time**, creating a **wave-like effect**.
- When a box **hits the container edges**, it **changes direction** and **plays a collision sound**.

## Technologies Used
- **React** (Component-based UI rendering)
- **Vite** (Fast build tool for React)
- **TypeScript** (Static typing for better maintainability)
- **HTML5 Canvas** (For smooth and efficient animation)

## Future Improvements
- Add a settings panel to **adjust animation speed**.
- Implement **randomized box colors** on each reload.
- Allow **user interaction** (e.g., click to change container behavior).

## Author
[Your Name]

## License
This project is licensed under the MIT License.

# Animated Collision Box Container

## Overview
This project is a **React, Vite, and TypeScript**-based **animated container** with moving boxes, rendered using a **Canvas element**. The animation creates an engaging visual experience where:

- A **container expands and shrinks continuously**.
- **Seven boxes** of different colors **move horizontally inside the container**, bouncing off the edges.
- **Each box starts moving after a set delay**, creating a cascading effect.
- **A collision sound plays** whenever a box hits the left or right boundary of the container.

## Features
- **Canvas-based animation**: Everything is drawn dynamically on a `<canvas>` element.
- **Responsive Container**: The container continuously **shrinks and expands**.
- **Smooth Box Movement**: The **seven colored boxes** move horizontally **and bounce off the edges**.
- **Sound Effects**: Each time a box collides with a boundary, a **sound effect is triggered**.
- **Sequential Animation**: Boxes start moving **one after another** with a slight delay, creating a unique sound effect.
- **Built with React, Vite, and TypeScript** for **optimized performance**.

## Installation & Setup
To run this project locally, follow these steps:

### **1. Clone the repository**
```sh
 git clone <your-repo-url>
 cd <your-repo-folder>
```

### **2. Install dependencies**
```sh
 npm install
```

### **3. Run the development server**
```sh
 npm run dev
```

### **4. Open the project in the browser**
By default, Vite runs on port **5173**. Open **[http://localhost:5173](http://localhost:5173)** in your browser.

## Project Structure
```
📦 project-root
 ┣ 📂 public
 ┃ ┣ 📄 sound.mp3  # Sound file for collision effect
 ┃ ┗ 📄 index.html  # Entry point
 ┣ 📂 src
 ┃ ┣ 📄 components
 ┃ ┃ ┗ 📄 CollisionContainer.tsx  # Main animated container component
 ┃ ┣ 📄 App.tsx  # Root component
 ┃ ┗ 📄 main.tsx  # Entry point for React
 ┣ 📄 package.json  # Dependencies & scripts
 ┣ 📄 tsconfig.json  # TypeScript config
 ┗ 📄 vite.config.ts  # Vite config file
```

## How It Works
- The **container expands and shrinks** continuously, modifying its width dynamically.
- **Seven boxes** of different colors **move inside the container**, moving left and right.
- **Each box starts moving at a different time**.
- When a box **hits the container edges**, it **changes direction** and **plays a collision sound**.

## Technologies Used
- **React** (Component-based UI rendering)
- **Vite** (Fast build tool for React)
- **TypeScript** (Static typing for better maintainability)
- **HTML5 Canvas** (For smooth and efficient animation)

 
 

