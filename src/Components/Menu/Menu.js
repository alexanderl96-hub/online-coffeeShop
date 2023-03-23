import React from 'react'
import '../../App.css'
import {AiOutlineLeft, AiOutlineRight, AiOutlineRightCircle, AiOutlineLeftCircle} from 'react-icons/ai'

const Menu = () => {
    const memberImg2 = 'https://cdn3.iconfinder.com/data/icons/modern-future-technology/128/mobile-phone-x-512.png'
    const coffeImage = 'https://seelindsay.com/wp-content/uploads/2021/10/Coffee-SVG.jpg'
    const coffeeData = ['https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBjb2ZmZWV8ZW58MHx8MHx8&w=1000&q=80', 
                         'https://thumbs.dreamstime.com/b/black-coffee-cup-art-latte-froth-tulip-shaped-isolated-white-background-clipping-path-225258642.jpg',
                         'https://www.shutterstock.com/image-photo/cup-art-latte-on-cappuccino-260nw-1323112487.jpg',
                         'https://www.shutterstock.com/image-photo/coffee-drink-after-roasting-beans-260nw-1948127311.jpg',
                         'https://media.istockphoto.com/id/1148733827/photo/mug-with-espresso-coffee-isolated.jpg?s=612x612&w=0&k=20&c=ZMUn9VOR5UShUu8qhTIH2nvuPymbesiueNLmxs-n2n8=', 
                         'https://www.shutterstock.com/image-photo/espresso-doppio-cup-black-strong-260nw-1472724122.jpg', 
                         'https://www.acouplecooks.com/wp-content/uploads/2021/08/Cortado-004.jpg', 
                         'https://coffeeaffection.com/wp-content/uploads/2020/12/Black-Coffee.jpg', 
                         'https://www.nestleprofessional.in/sites/default/files/2021-08/Galao.jpg']
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', }}>
        <div  style={{width: '330px', height: '700px',  backgroundSize:'100% 130%', 
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginTop: '46px', 
         borderRadius: '60px', }}>
             <div 
                style={{backgroundImage: `url(${memberImg2})`,  backgroundPosition: 'center',
                backgroundSize: '200% 100%',
                backgroundRepeat: 'no-repeat', height: '100%',
            }}>
           </div>
           <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
                 height: '125px', fontSize: '40px', marginTop: '-400px'}}>
                 
                 <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                   <AiOutlineLeftCircle  style={{fill: '#ffb703', fontSize: '30px', marginLeft: '-80px',
                    cursor: 'pointer'}} /> 
                   <div  style={{ marginLeft: '40px',
                    }} >Menu</div></div>
                 <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', 
                                flexDirection: 'column',  height: '555px' }}>
                    <div style={{ }} className='overflow-Container'>
                      {coffeeData.map((a)=>{
                        return(
                          <img src={a} alt='' style={{width: '260px', height: '180px',opacity: '.8',}}  />
                        )
                      })}
                        {/* <img src={coffeImage} alt='' style={{width: '260px', height: '180px',opacity: '.8',}}  />
                        <img src={coffeImage} alt='' style={{width: '260px', height: '180px', opacity: '.8' }} />
                        <img src={coffeImage} alt='' style={{width: '260px', height: '180px', opacity: '.8' }} />
                        <img src={coffeImage} alt='' style={{width: '260px', height: '180px', opacity: '.8' }} /> */}
                    </div>
                </div>
                 
                 </div>
               
        </div>
    </div>
  )
}

export default Menu