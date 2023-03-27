import React from 'react'
import { AiOutlineCloseCircle,AiOutlineDown, AiOutlineUp} from 'react-icons/ai'
 import {Link, useLocation } from 'react-router-dom'

const SelectionOrder = () => {
    const memberImg2 = 'https://cdn3.iconfinder.com/data/icons/modern-future-technology/128/mobile-phone-x-512.png'
     const location = useLocation()
     const {coffeeImage} = location?.state
     const {coffeeType} = location?.state
    console.log('SelectionOrder Hola this is your selection order')
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', }}>
            <div  style={{width: '330px', height: '680px',  backgroundSize:'100% 50%', 
                   backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginTop: '46px', 
                   borderRadius: '60px', }}>
                     <div style={{
                      backgroundRepeat: 'no-repeat', backgroundPosition: 'center', position: 'absolute',
                        }}>
                         <img src={coffeeImage} alt=''
                          style={{ borderTopLeftRadius: '60px', borderTopRightRadius: '60px',
                          width: '320px', height: '320px' }} />
                        
                    </div>
                    <div   style={{backgroundImage: `url(${memberImg2})`,  backgroundPosition: 'center',
                                backgroundSize: '200% 100%',
                                backgroundRepeat: 'no-repeat', height: '100%',
                                position: 'relative',
                                }} />

                  
                   
                   
                     <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
                            height: '125px', fontSize: '30px', position: 'relative',
                              float: 'left', left: '102%', top: '-100%'}}><Link to={`/menu`} ><AiOutlineCloseCircle  
                              style={{fill: '#ffb703', fontSize: '30px', marginLeft: '-70px',
                               cursor: 'pointer'}} /> </Link> </div>
                     <div style={{marginTop: '-110%', cursor: 'pointer',}}>
                              <div style={{ height: '90px',display: 'flex', 
                                    justifyContent: 'center', flexDirection: 'column',gap: '10px', 
                                    lineHeight: '5px', }}>
                                  <div style={{display: 'flex', 
                                    justifyContent: 'center', fontWeight: 600, 
                                    fontSize: '13px', marginTop: '-25px'}}>{'Luis Duran Washed'.toUpperCase()}</div>
                                  <div style={{display: 'flex', 
                                    justifyContent: 'center', fontWeight: 400, fontSize: '12px'}}>{'Tolima, Colombia'.toUpperCase()}</div>
                                  <div style={{display: 'flex', 
                                    justifyContent: 'center', fontWeight: 300, fontSize: '10px'}}>Cherry cola, peacn pie, red delicious apple</div>
                               </div>

                          <div style={{height: '50px',display: 'flex', marginTop: '-30px',
                                    justifyContent: 'space-between', alignItems: 'center', 
                                     marginLeft: '10%', marginRight: '12%'}}>
                               <div style={{fontSize: '11px'}}>{'Size'.toUpperCase()}</div>
                               <div style={{color: '#29c5f6', fontSize: '14px', }}>
                                       <AiOutlineDown style={{fontWeight: 'bold', fontSize: '14px',}} /></div>
                                </div>
                                <div style={{display: 'flex', 
                                            justifyContent: 'center',}}>
    
                                    <div style={{width: '80%', height: '1.2px', backgroundColor: '#dee1dd'}}>
                                        
                                </div>
                          </div>
                          <div style={{height: '50px',display: 'flex', 
                                    justifyContent: 'space-between', alignItems: 'center', 
                                     marginLeft: '10%', marginRight: '12%'}}>
                               <div style={{fontSize: '11px'}}>{'Milk'.toUpperCase()}</div>
                               <div style={{color: '#29c5f6', fontSize: '14px', }}>
                                       <AiOutlineDown style={{fontWeight: 'bold', fontSize: '14px',}} /></div>
                                </div>
                                <div style={{display: 'flex', 
                                            justifyContent: 'center',}}>
                                    <div style={{width: '80%', height: '1.2px', backgroundColor: '#dee1dd'}}>
                                </div>
                          </div>
                          <div style={{height: '50px',display: 'flex',
                                    justifyContent: 'space-between', alignItems: 'center', 
                                     marginLeft: '10%', marginRight: '12%'}}>
                               <div style={{fontSize: '11px'}}>{'Sugar'.toUpperCase()}</div>
                               <div style={{color: '#29c5f6', fontSize: '14px', }}>
                                       <AiOutlineDown style={{fontWeight: 'bold', fontSize: '14px',}} /></div>
                                </div>
                                <div style={{display: 'flex', 
                                            justifyContent: 'center',}}>
                                    <div style={{width: '80%', height: '1.1px', backgroundColor: '#dee1dd'}}>
                                </div>
                          </div>
                          <div style={{height: '50px',display: 'flex', cursor: 'pointer',
                                    justifyContent: 'space-between', alignItems: 'center', 
                                    marginLeft: '10%', marginRight: '12%'}}>
                               <div style={{fontSize: '11px'}}>{'Quantity'.toUpperCase()}</div>
                               <div style={{color: '#29c5f6', fontSize: '14px', }}>
                                       <AiOutlineDown style={{fontWeight: 'bold', fontSize: '14px', cursor: 'pointer',}} /></div>
                                </div>
                                <div style={{display: 'flex', 
                                            justifyContent: 'center',}}>
                                    <div style={{width: '80%', height: '1.1px', backgroundColor: '#dee1dd'}}>
                                </div>
                          </div>
                          <div style={{height: '80px', backgroundColor: '#29c5f6', 
                           borderBottomLeftRadius: '60px', borderBottomRightRadius: '60px',marginTop: '5px',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', 
                            fontSize: '12px', fontWeight: 'bold', color: '#FFFF', }}>
                                {'add to order'.toUpperCase() + '$(' + 4.87 + ')'}
                          </div>
                     </div>
            </div>  
   </div> 
  )
}

export default SelectionOrder