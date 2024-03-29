import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const Mainlayout = () => {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <div
        style={{
          paddingTop: '90px',
        }}
      >
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Mainlayout
