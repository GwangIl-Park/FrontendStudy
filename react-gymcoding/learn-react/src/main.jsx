import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './AppCourse.jsx'
import AppCounter from './AppCounter.jsx'
import App from './AppTodo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCounter/>
  </StrictMode>,
)
