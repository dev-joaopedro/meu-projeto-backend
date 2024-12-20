import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bolo from '.Route/Bolo.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const route = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "bolo",
        element: <Bolo />
      },

    ]
  }
]);