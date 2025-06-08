import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "@/context";
import App from './App.tsx'
import '../public/css/tailwind.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
      <ThemeProvider>
  <MaterialTailwindControllerProvider>
          <App />
        </MaterialTailwindControllerProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
