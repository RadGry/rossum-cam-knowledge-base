import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Overview from './pages/Overview.tsx'
import CustomerHealth from './pages/CustomerHealth.tsx'
import Sources from './pages/Sources.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Overview />} />
          <Route path="customer-health" element={<CustomerHealth />} />
          <Route path="sources" element={<Sources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
