import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {} from '../../reducers/user'
import '../../global.css'

import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../action/user';
function Navbar() {
  const [tab,setTab]= useState(window.location.pathname)
  const dispatch= useDispatch()
  const handlelogout=()=>{
    if (window.confirm('are you sure you want to logout?')===true)
    dispatch(logoutUser())
    
  }
  return (
    <div className='navbar'> 
      <Link to={'/'} onClick={()=>{setTab('/')}} >
        {tab==='/'?<HomeIcon fontSize='large' style={{color: 'black'}} />: <HomeOutlinedIcon fontSize='large' />}
       
            </Link>

            <Link to={'/all'} onClick={()=>{setTab('/all')}} >
             <span className='nav-titles'>View offences </span>
       
            </Link>

            <Link to={'/add'} onClick={()=>{setTab('/add')}} >
        {tab==='/add'?<AddBoxIcon fontSize='large' style={{color: 'black'}} />: <AddBoxOutlinedIcon fontSize='large' />}
       
            </Link>
            <Button onClick={handlelogout} style={{color: 'black'}} >logout</Button>

    </div>
  )
}

export default Navbar