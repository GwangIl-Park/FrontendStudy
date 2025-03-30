import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppCourse from './AppCourse.jsx'
import AppCounter from './AppCounter.jsx'
import App from './AppMovingDot.jsx'
import AppTodo from './AppTodo.jsx'
import AppTheme from './AppTheme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTheme/>
  </StrictMode>,
)
