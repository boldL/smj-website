import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
