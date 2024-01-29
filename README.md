# 3DPortfolio React + Vite

Welcome to this custom portfolio built with Javascript, Three.js, React, and Tailwindcss.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the project repository:**

``` 
$ gh clone project


Install the project dependencies:
> $ npm install

Start the development server:

> $ npm run dev 


Create project with Vite, React, JavaScript

> $ npm create vite@latest 



To install and configure Tailwind CSS using vite for your project, follow these steps:

[DOC](https://tailwindcss.com/)
 

> $ npm install -D tailwindcss
> $ npx tailwindcss init


NEXT STEP:  Configure your template paths
Add the Tailwind directives to your CSS

 Install Tailwind CSS

> $ npm install -D tailwindcss postcss autoprefixer
> $ npx tailwindcss init -p

configure your template path on `tailwind.config.js` file : 
 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


> configure tailwind js to include custom colors and theme 




Installing Router DOM v6
To install and integrate React Router DOM v6 into your project, follow these steps:

Install React Router DOM as a dependency:

[Docs](https://reactrouter.com/en/main) 

[NPM](https://www.npmjs.com/package/react-router-dom)  


> $ NPM install react-router-dom 



install react-three-fiber :

https://docs.pmnd.rs/react-three-fiber/getting-started/introduction

> $ npm install three @react-three/fiber


once we install three fiber we also have to install drei for this project; 
it is useful helpers and fully functional, ready-made abstractions for @react-three/fiber. 

https://www.npmjs.com/package/@react-three/drei


> $ npm install @react-three/drei

Note: because our Canva component can only load 3D objects 

use SketchFab to download 3D Models 

https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907

we download our 3D models in .gib format then convert them to JSX / JSON usting this website 

https://gltf.pmnd.rs/

> Copy to clipboard and then past it in our model component 'island.jsx' in this case


we make it animated using react-spring/three 

https://www.npmjs.com/package/@react-spring/three

> npm install @react-spring/three