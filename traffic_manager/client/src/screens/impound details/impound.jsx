import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../global.css'
const Impound = () => {
    const {name}= useParams()
    const [impound, setImpound]= useState('test')
    useEffect(()=>{
        //API call
    })
  return (
    <div className="impound--main">

      <div className='impound--cnt'>
        <h1 >IMPOUND DETAILS</h1>
      <span>Name: {impound}</span> <br></br>
      <span>SHO: {impound}</span> <br></br>
      <span>Capacity: {impound}</span>
      <table className='impound--table'>
      <tr>
      <td>key</td>
      <td>key</td>
      
      </tr>
      <tr>
      <td>value</td>
      <td>value</td>
     
      </tr>

      </table>
      </div>
     
      
    </div>
  )
}

export default Impound