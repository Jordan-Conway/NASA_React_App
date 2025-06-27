import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './components/MainPage'

const container = document.querySelector<HTMLDivElement>('#app')

if (container) {
  const root = ReactDOM.createRoot(container)
  root.render(
    <React.StrictMode>
      <MainPage />
    </React.StrictMode>
  )
}
