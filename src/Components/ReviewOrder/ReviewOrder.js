import React from 'react'
import { AiOutlineUp, AiOutlinePlusCircle} from 'react-icons/ai'
import {Link, useLocation } from 'react-router-dom'


const ReviewOrder = () => {
    const location = useLocation()
     const {coffeeImage} = location?.state
     const {coffeeType} = location?.state
     const {coffeeSelection} = location?.state
     const {coffeeDescription} = location?.state
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
              float: 'left', left: '35px', top: '-400px'}}>
             
             <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                    <Link to={`/menu`} ><AiOutlinePlusCircle  style={{fill: '#ffb703', fontSize: '30px',
                    marginLeft: '-50px',
                      cursor: 'pointer'}} /> </Link> 
                    <div  style={{ fontSize: '30px',   marginTop: '50px',
                      }} >Review Order</div>
              </div>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', 
                                  flexDirection: 'column',  height: '470px', marginTop: '10px',
                                  marginLeft: '-15px', }}>
                      <div style={{borderRadius: 'none',  overflowY: 'scroll',
                                   display: 'flex', flexDirection: 'column', gap: '10px', 
                                   paddingTop: '4px', maxHeight: '520px', cursor: 'pointer'}} >
                        {coffeeData.map((a,ind)=>{
                          return(
                            <div key={ind}>
                              <Link to={`/menu/menuOptions?${'typeOfCoffee='+a[0].split(' ').join('')}`} 
                                  style={{textDecoration: 'none', color:'black'}} 
                                  state={{ coffeeType: a[0], coffeeImage: a[1]}} >
                                  <div style={{ fontSize: '15px', fontWeight: 600, position : 'relative',
                                       zIndex: 1,  top: '100px',  display: 'flex', justifyContent: 'center', 
                                       alignItems: 'center'
                                       }}>{a[0]}</div>
                                  <img src={a[1]} alt='' 
                                       style={{width: '260px', height: '180px',
                                          opacity: .6,  borderRadius: '1px'}} />
                              </Link>
                            </div>
                          )
                        })}
                        
                    </div>
               </div>
               <div style={{  height: '70px', backgroundColor: '#29c5f6', 
                           borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', 
                            fontSize: '12px', fontWeight: 'bold', color: '#FFFF', 
                            marginLeft: '-15px', width: '289px', }}>
                                 <Link to={`/menu/PrepOrder`} 
                                    state={{coffeeType: coffeeType, coffeeImage: coffeeImage, coffeeSelection: coffeeSelection, 
                                        coffeeDescription: coffeeDescription}}
                                    //    onClick={(()=> ceckOrder === 'false' ? setCheckOrder('true') : setCheckOrder('false'))}
                                       style={{cursor: 'pointer', textDecoration: 'none', 
                                       color:'white', height: '70px', marginTop: '50px' }}> 
                                  {`${'Review Order'.toUpperCase()}`}</Link>
                          </div>
             
         </div>
           
    </div>
</div>
  )
}


export default ReviewOrder