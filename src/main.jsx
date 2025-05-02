/**
 * Entry point of the React application.
 * 
 * This file sets up the React application by rendering the root component (`App`)
 * into the DOM element with the ID `root`. It uses React's `StrictMode` to help
 * identify potential problems in the application.
 * 
 * Imports:
 * - `StrictMode` from React to enable additional checks and warnings in development.
 * - `createRoot` from `react-dom/client` to create a root for rendering the application.
 * - `./index.css` for global styles.
 * - `App` component from `./App.jsx` as the main application component.
 * 
 * Usage:
 * The `createRoot` function is used to render the `App` component wrapped in `StrictMode`
 * into the DOM element with the ID `root`.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
