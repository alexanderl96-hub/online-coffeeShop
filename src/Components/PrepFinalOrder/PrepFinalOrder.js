import React from 'react'
import {Link, useLocation } from 'react-router-dom'

const PrepFinalOrder = () => {
    const location = useLocation()
    const {coffeeImage} = location?.state
    const {coffeeType} = location?.state
    const {coffeeSelection} = location?.state
    const {coffeeDescription} = location?.state
    console.log(coffeeType)
  return (
    <div style={{margin: '0 auto'}}>
    <div style={{color: '#000000'}}>
        <p>Hola Mrs. or Ms  </p>
        <p>Order: {coffeeType} </p>
        <p>Specific: {coffeeSelection}</p> 
        <p>Description: {coffeeDescription}</p> 
        <p>Quantity: Total Order 1</p> </div>
        </div>
       
  )
}

export default PrepFinalOrder