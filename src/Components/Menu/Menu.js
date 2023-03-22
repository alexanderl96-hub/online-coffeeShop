import React from 'react'
import '../../App.css'

const Menu = () => {
    const memberImg2 = 'https://cdn3.iconfinder.com/data/icons/modern-future-technology/128/mobile-phone-x-512.png'
    const coffeImage = 'https://seelindsay.com/wp-content/uploads/2021/10/Coffee-SVG.jpg'
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', }}>
        <div  style={{width: '330px', height: '700px',  backgroundSize:'100% 130%', backgroundColor: 'gray',
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
                 
                 <div>Menu</div>
                 <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', 
                                flexDirection: 'column',  height: '555px' }}>
                    <div style={{ }} className='overflow-Container'>
                        <img src={coffeImage} alt='' style={{width: '260px', height: '180px',opacity: '.8',}}  />
                        <img src={coffeImage} alt='' style={{width: '260px', height: '180px', opacity: '.8' }} />
                        <img src={coffeImage} alt='' style={{width: '260px', height: '180px', opacity: '.8' }} />
                        <img src={coffeImage} alt='' style={{width: '260px', height: '180px', opacity: '.8' }} />
                    </div>
                </div>
                 
                 </div>
               
        </div>
    </div>
  )
}

export default Menu