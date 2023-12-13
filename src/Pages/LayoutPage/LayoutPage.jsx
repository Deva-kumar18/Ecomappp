import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import ContentPage from '../Content/ContentPage'
import { Outlet } from 'react-router-dom'
import { useLocation,useNavigate } from 'react-router-dom'

const LayoutPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (location.pathname === '/') {
          navigate('/content');
        }
      }, [location.pathname]);
  return (
    <div className='layout'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='content'>
            <ContentPage/>
        </div>
    </div>
  )
}

export default LayoutPage