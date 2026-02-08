import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import Home from '../pages/Home'
import Mining from '../pages/Mining'
import GeneralSupply from '../pages/GeneralSupply'
import Travel from '../pages/Travel'
import EquipmentHire from '../pages/EquipmentHire'
import About from '../pages/About'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="mining-supply" element={<Mining />} />
          <Route path="general-supply" element={<GeneralSupply />} />
          <Route path="travel-logistics" element={<Travel />} />
          <Route path="equipment-hire" element={<EquipmentHire />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
