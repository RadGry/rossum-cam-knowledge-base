import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Overview from './pages/Overview.tsx'
import CustomerHealth from './pages/CustomerHealth.tsx'
import Prioritisation from './pages/Prioritisation.tsx'
import Onboarding from './pages/Onboarding.tsx'
import ValueReviews from './pages/ValueReviews.tsx'
import Expansion from './pages/Expansion.tsx'
import Escalation from './pages/Escalation.tsx'
import Renewal from './pages/Renewal.tsx'
import Sources from './pages/Sources.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Overview />} />
          <Route path="customer-health" element={<CustomerHealth />} />
          <Route path="prioritisation" element={<Prioritisation />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="value-reviews" element={<ValueReviews />} />
          <Route path="expansion" element={<Expansion />} />
          <Route path="escalation" element={<Escalation />} />
          <Route path="renewal" element={<Renewal />} />
          <Route path="sources" element={<Sources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
