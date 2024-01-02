import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from '../components/Navbar/Navbar.component'

const Mainlayout = () => {
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', top: '70px' }}>
        <Outlet />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          padding: '10px',
          marginTop: '2em',
        }}
      >
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Mainlayout
