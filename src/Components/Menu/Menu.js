import React, { useState } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import { AiOutlineLeftCircle} from 'react-icons/ai'
import { hotCoffeeData } from '../CoffeeData.js' 

// const Text = props =>{
//   const {name} = props;
//   return(<p>{name}</p>)
// }

const Menu = () => {
    // const [options, setOptions] = useState('')
    const [coffeeType, setCoffeeType] = useState('')
    const memberImg2 = 'https://cdn3.iconfinder.com/data/icons/modern-future-technology/128/mobile-phone-x-512.png'
    const coffeeData = [['Black Coffee','https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBjb2ZmZWV8ZW58MHx8MHx8&w=1000&q=80'], 
                        ['Latte Coffee', 'https://thumbs.dreamstime.com/b/black-coffee-cup-art-latte-froth-tulip-shaped-isolated-white-background-clipping-path-225258642.jpg'],
                        ['Cappuccino Coffee', 'https://www.shutterstock.com/image-photo/cup-art-latte-on-cappuccino-260nw-1323112487.jpg'],
                        ['Americano Coffee', 'https://www.shutterstock.com/image-photo/coffee-drink-after-roasting-beans-260nw-1948127311.jpg'],
                        ['Espresso Coffee', 'https://media.istockphoto.com/id/1148733827/photo/mug-with-espresso-coffee-isolated.jpg?s=612x612&w=0&k=20&c=ZMUn9VOR5UShUu8qhTIH2nvuPymbesiueNLmxs-n2n8=' ],
                        ['Doppio Coffee', 'https://www.shutterstock.com/image-photo/espresso-doppio-cup-black-strong-260nw-1472724122.jpg' ],
                        ['Cortado Coffee', 'https://www.acouplecooks.com/wp-content/uploads/2021/08/Cortado-004.jpg'],
                        ['Red Eye Coffee',  'https://coffeeaffection.com/wp-content/uploads/2020/12/Black-Coffee.jpg' ],
                        ['Galao Coffee',  'https://www.nestleprofessional.in/sites/default/files/2021-08/Galao.jpg']]

    console.log(coffeeType, 'choose coffee type')  
    console.log(Object.keys(hotCoffeeData))                   
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
                            {Object.keys(hotCoffeeData).map((a,ind)=>{
                              return(
                                <div key={ind}>
                                  <Link to={`/menu/menuOptions?${'typeOfCoffee='+a}`} style={{textDecoration: 'none', color:'black'}} 
                                      state={{ coffeeType: a, coffeeImage: a[1]}} >
                                      <div>{a.slice(0,-6) + ' ' + a.slice(-6)}</div>
                                      <img src={a[1]} alt=''  />
                                  </Link>
                                </div>
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