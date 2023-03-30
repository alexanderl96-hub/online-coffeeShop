import React, { useState, useEffect } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import { AiOutlineLeftCircle} from 'react-icons/ai'
import { hotCoffeeData } from '../CoffeeData.js' 

// const Text = props =>{
//   const {name} = props;
//   return(<p>{name}</p>)
// }

const Menu = () => {
    const [options, setOptions] = useState([])
    const [coffeeType, setCoffeeType] = useState('')
    const memberImg2 = 'https://cdn3.iconfinder.com/data/icons/modern-future-technology/128/mobile-phone-x-512.png'
   
useEffect(()=>{
  setOptions(Object.entries(hotCoffeeData).map((elemObj) => [elemObj[0],
              Object.entries(elemObj[1]).map((types)=> [types[0],
               Object.entries(types[1]).map((every)=> every[1] )].flat(Infinity))]))

},[hotCoffeeData])

    console.log(coffeeType, 'choose coffee type')  
    console.log(options.map((a)=> a[0]), 'allllllll')                   
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', }}>
        <div  style={{width: '330px', height: '680px',  backgroundSize:'100% 130%', 
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginTop: '46px', 
         borderRadius: '60px', }}>
             <div 
                style={{backgroundImage: `url(${memberImg2})`,  backgroundPosition: 'center',
                backgroundSize: '200% 100%',
                backgroundRepeat: 'no-repeat', height: '100%',
                }}>
              </div>
           <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
                 height: '125px', fontSize: '40px', position: 'relative',
                  float: 'left', left: '35px', top: '-390px'}}>
                 
                 <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                        <Link to={`/`} ><AiOutlineLeftCircle  style={{fill: '#ffb703', fontSize: '30px', marginLeft: '-80px',
                          cursor: 'pointer'}} /> </Link> 
                        <div  style={{ 
                          }} >Menu</div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', 
                                      flexDirection: 'column',  height: '550px', marginTop: '20px' }}>
                          <div style={{ }} className='overflow-Container'>
                            {options.map((a,ind)=>{
                              return(
                                <>
                                  {a[1].map((a, i)=>{
                                    return (
                                      <div key={i}>
                                      <Link to={`/menu/menuOptions?${'typeOfCoffee='+a[0]}`} 
                                      
                                      style={{textDecoration: 'none', color:'black'}} 
                                      state={{ coffeeChoise: a[0], coffeeImage: a[1], }} >
                                      <div>{a[0].slice(0,-6) + ' ' + a[0].slice(-6)}</div>
                                      <img src={a[1]} alt=''  />
                                  </Link>
                                      </div>
                                    )
                                  })}
                                </>
                              )
                            })}
                            
                        </div>
                   </div>
                 
             </div>
               
        </div>
    </div>
  )
}

export default  Menu 