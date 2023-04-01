import React, {useEffect, useState} from 'react'
import {Link, useLocation , useSearchParams} from 'react-router-dom'
import {AiOutlineLeftCircle} from 'react-icons/ai'
import { hotCoffeeData } from '../CoffeeData.js' 
// import {coffeeType} from '../Menu/Menu'
// const coffeeObj = [{
//   'Hot Coffee': {
//                   'BlackCoffee': {
//                                  'imag': 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBjb2ZmZWV8ZW58MHx8MHx8&w=1000&q=80'
//                                 },
//                   'LatteCoffee': {
//                                 'imag': 'https://thumbs.dreamstime.com/b/black-coffee-cup-art-latte-froth-tulip-shaped-isolated-white-background-clipping-path-225258642.jpg'
//                                 },
//                   'CappuccinoCoffee': {
//                                   'imag': 'https://www.shutterstock.com/image-photo/cup-art-latte-on-cappuccino-260nw-1323112487.jpg'
//                                  },
//                   'AmericanoCoffee': {
//                                  'imag': 'https://www.shutterstock.com/image-photo/coffee-drink-after-roasting-beans-260nw-1948127311.jpg'
//                                  }
//                   }}]
 const MenuOptions = () => {
  const [search, setSearch] = useSearchParams();
  const [open, setOpen] = useState('false')
  const [targetValue, setTargetValue] = useState('')
  const [readMore, setReadMore] = useState(false)
  const [options, setOptions] = useState([])
  // const [ goNextPage, setGoNextPage] = useState('false')
    const memberImg2 = 'https://cdn3.iconfinder.com/data/icons/modern-future-technology/128/mobile-phone-x-512.png'
    const location = useLocation()
    // let valuePath = 'http://localhost:3000/menu/menuOptions'
    // let windowPath = window.location.href
    const {coffeeChoise} = location?.state
    const coffeeType =  search.get('Type=')
    // let coffeeName =  Object.entries(hotCoffeeData).map((a)=> 
    //                                                 a.map((b)=> 
    //                                                 Object.entries(b).map((c)=> c[0] === coffeeChoise ? 
    //                                                 Object.entries(c[1]).map((elem)=> [elem[0], 
    //                                                 Object.entries(elem[1]).map((item)=> item[1])].flat()).map((res)=> res) : ''
    //                                                )))

              
    useEffect(()=>{
      let data = Object.entries(hotCoffeeData).map((a)=> 
                                              a.map((b)=> 
                                            Object.entries(b).find((c)=> c[0] === coffeeChoise ))).flat()[1]

      let dataFilter = data.map((a)=> a)[1]

      setOptions([dataFilter])

    },[coffeeChoise])

    let nextValue = coffeeChoise.split(', ')    || ''
  
   console.log(coffeeType, options, coffeeChoise)

    const blackCoffee = [[`Black coffee is simply a mixture of water and coffee without any cream. It 
                         should be served without any additional flavors like honey, cream, or milk. The 
                         addition of these ingredients may change the coffee's aroma and color, turning it 
                         lighter-brown or white.In the major parts of the world coffee can be seen as 
                         a drink which makes us active, which can also help aid us in performing daily 
                         activities. It is the kick of caffeine, which usually sharpens our mind and make 
                         them active.  `], 
                        ]
    // const latteCoffee = [``]
    // const cappuccinoCoffee = [``]
    // const americanoCoffee = [``]
    // const espressoblackCoffee = [``]
    // const doppioCoffee = [``]
    // const cortadoCoffee = [``]
    // const galaoCoffee = [``]
    // const lungoCoffee = []
    // const macchiatoCoffee = []
    // const mochaCoffee = []



    //'?coffeeType=black'
  
   
  // console.log( window.history.replaceState(null, 'React App', `/menuOptions?coffeType=${coffeeType}`))
    // console.log(query)
    // useEffect(()=>{
    //     if (valuePath === windowPath) {
    //             //prevents browser from storing history with each change:
    //             // window.history.replaceState(null, 'React App', `/menu/menuOptions?coffeeType=${coffee.join('')}`);
    //             // window.history.pushState({}, null,  `/menu/menuOptions/coffeeType=${nextValue}`);
    //             window.history.replaceState(null, "React App", `/menu/menuOptions${'?coffeeType=' + nextValue}`)
    //         }else{
    //           window.history.replaceState(null, "React App", windowPath)
    //         }
    // },[nextValue, valuePath, windowPath])
    // window.history.replaceState(null, "React App", `/menu/menuOptions${'?coffeeType=' + nextValue}`)
    // console.log(nextValue, 'checking next Value')


function handelInputCard (e) {
  console.log(Number(e.target.id), 'e.target,id') 
  if(open === 'false' ){
    setOpen('true')
    //  setGoNextPage('true')
  }else if(open === 'true' && targetValue === Number(e.target.id)){
    setOpen('false')
    // setGoNextPage('true')

  }else if(open === 'true' && targetValue !== Number(e.target.id)){
    setOpen('true')
    // setGoNextPage('false')
  }
  setReadMore(false)
  //  setGoNextPage('true')
}


    const aboutLength = (about) => {
      let pro = [];
      let i = 0
      let str = about.split(" ");
      while(i < str.length ){
         pro.push(str[i])
         i++
      }
      return pro.length <= 40 ?  pro.join(' ') : pro.slice(0,40).join(' ').concat(' ...')
    };


  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', }}>
          <div  style={{width: '330px', height: '680px',  backgroundSize:'100% 130%', 
          backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginTop: '46px', 
          borderRadius: '60px', }}>
             <div 
                style={{backgroundImage: `url(${memberImg2})`,  backgroundPosition: 'center',
                backgroundSize: '200% 100%',
                backgroundRepeat: 'no-repeat', height: '100%',
                 }} /> 
             
             <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
                            height: '125px', fontSize: '30px', position: 'relative',
                              float: 'left', left: '35px', top: '-390px'}}>

                        <div style={{display: 'flex',flexDirection:'column' ,justifyContent: 'center', alignItems: 'center',}}>
                           <div  style={{display: 'flex',justifyContent: 'center', alignItems: 'center',marginLeft: '10px',
                                         fontSize: '30px',marginBottom: '10px',}} >{nextValue}</div>
                           <Link to={`/menu`} ><AiOutlineLeftCircle  
                                               style={{fill: '#ffb703', fontSize: '30px', marginLeft: '-130px',
                                                cursor: 'pointer'}} /> </Link> 
                         </div>
                        
                         <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', 
                                      flexDirection: 'column',  height: '500px',}}>
                                    <div className={readMore === false ? 'checktransition' : 'checktransition2' }
                                    onClick={(()=> readMore === false ? setReadMore(true) : setReadMore(false))} 
                                         style={{}}>{readMore === false ? `${blackCoffee[0][0].slice(0,252)} ... ` : blackCoffee[0][0]}</div>

                                    <div style={{width: '260px',  textAlign:'justify',  }} className='overflow-Container-Options'>
                                             {options.map((a, ind)=>{return(
                                                   <div id={ind} key={ind} onClick={handelInputCard}
                                                         className= 'overflow-Container-Options_Cards'>
                                                     <div className={ open === 'true' && targetValue === ind ? 'checkCardOpen' :'checkCard'}
                                                            id={ind} onClick={((e)=> setTargetValue(ind))} 
                                                           >
                                                        <b>{a[0]}</b> { open === 'true' && targetValue === ind  ? a[2] : `${a[2]} ...` } 
                                                        {/* { open === 'true' && targetValue === ind && <Link to={`/menu/menuOptions/Select?${nextValue + '=' + a[0].split(' ').join('')}`}
                                                    style={{textDecoration :'none', color: 'black'}}
                                                           state={{ coffeeType: coffeeType, coffeeSelection: `${a[0]}`,
                                                            coffeeDescription: a[2].slice(0,80)}}
                                                    >   <div style={{width: '45px', height: '15px', fontSize: '11px', backgroundColor: 'red',
                                                              display: 'flex', justifyContent: 'center', alingItems: 'center', padding: '1px',
                                                              borderRadius: '50px', marginLeft: '70%', marginTop: '3px', color: 'white'}}
                                                            id={ind} onClick={((e)=> setTargetValue(ind))} 
                                                           > goNext
                                                       
                                                        </div> </Link> } */}
                                                        </div> 
                                                   
                                                        
                                                   </div>
                                             )})}
                       
                                    </div>    
                         </div>

                        

              </div>
                             


           

       
        </div>
    </div>
  )
}

export default MenuOptions