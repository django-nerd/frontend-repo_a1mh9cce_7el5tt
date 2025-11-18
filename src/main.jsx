import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import DevsPage from './pages/DevsPage'
import VotePage from './pages/VotePage'
import StorePage from './pages/StorePage'
import ContactPage from './pages/ContactPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="devs" element={<DevsPage />} />
          <Route path="vote" element={<VotePage />} />
          <Route path="store" element={<StorePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
