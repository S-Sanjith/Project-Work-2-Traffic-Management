import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../../global.css'
const Details = () => {
    const {id}= useParams() 
    const [details, setDetails]= useState('')
    
    useEffect(()=>{
    //API call 
    },[])
  return (
   <div>vehicle details</div>
  )
}

export default Details