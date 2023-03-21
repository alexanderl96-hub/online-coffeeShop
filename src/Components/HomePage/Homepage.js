import React from 'react'
import { FaStar, FaHeart, FaDollarSign } from 'react-icons/fa';

const Homepage = () => {
    const memberImg2 = 'https://cdn3.iconfinder.com/data/icons/modern-future-technology/128/mobile-phone-x-512.png'
    const coffeImage = 'https://seelindsay.com/wp-content/uploads/2021/10/Coffee-SVG.jpg'
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
        <div style={{width: '330px', height: '400px', backgroundImage: `url(${coffeImage})`, backgroundSize:'100% 90%', 
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginTop: '46px', 
        borderTopLeftRadius: '60px',  borderTopRightRadius: '60px', }}>
            <div 
            style={{backgroundImage: `url(${memberImg2})`,  backgroundPosition: 'center',
            backgroundSize: '200% 100%',
            backgroundRepeat: 'no-repeat', height: '170%',
           
           }}>
                <div style={{padding: '30px',  height: '170px' , position: 'relative', top: '370px',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center',alignItems: 'center', height: '35px',  color:'black'}} >WELCOME BACK, MARGOT!</div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start',alignItems: 'center', height: '30px', gap: '10px',
                             color:'black'}} >
                        <div style={{ display:'flex', justifyContent:' center',alignItems: 'center',marginLeft: '10px', 
                        fontSize: '16px', width: '24px', height: '24px', borderRadius: '50%', background: '#ffb703'}}> <FaStar style={{fill: 'white'}}/></div>
                        <div style={{fontSize: '13px', fontWeight: 500}}> CREDIT & REWARDS </div> 
                    </div>
                    <hr/>
                    <div style={{ display: 'flex', justifyContent: 'flex-start',alignItems: 'center', height: '30px',
                     gap: '10px',  color:'black'}}>
                        <div style={{display:'flex', justifyContent:' center',alignItems: 'center',marginLeft: '10px', 
                        fontSize: '16px', width: '24px', height: '24px', borderRadius: '50%', background: '#ffb703'}}> <FaHeart style={{fill: 'white'}} /></div>
                        <div style={{fontSize: '13px', fontWeight: 500}} > ORDER & FAVORITES </div> 
                    </div>
                    <hr/>
                    <div style={{ display: 'flex', justifyContent: 'flex-start',alignItems: 'center', height: '30px',
                               gap: '10px',  color:'black'}}>
                        <div style={{display:'flex', justifyContent:' center',alignItems: 'center',marginLeft: '10px', 
                        fontSize: '16px', width: '24px', height: '24px', borderRadius: '50%', background: '#ffb703'}}> <FaDollarSign style={{fill: 'white'}} /></div>
                        <div style={{fontSize: '13px', fontWeight: 500}}> SCAN TO PAY </div> 
                    </div>
                    <hr/>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center',alignItems: 'center',
                          height: '70px', backgroundColor: '#29c5f6', marginTop: '-90px',
                          width: '288.5px',marginLeft: '20.5px', borderBottomLeftRadius: '30px',
                           borderBottomRightRadius: '30px', cursor: 'pointer', fontSize: '13px',fontWeight: 600 }}>ORDER NOW</div>
        </div>
       
    </div>
  )
}

export default Homepage