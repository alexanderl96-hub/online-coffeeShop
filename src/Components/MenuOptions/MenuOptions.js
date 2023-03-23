import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
// import {coffeeType} from '../Menu/Menu'

 const MenuOptions = () => {
    const location = useLocation()
    const { coffeeType} = location?.state

    const blackCoffee = [[`Black coffee is simply a mixture of water and coffee without any cream. It 
                         should be served without any additional flavors like honey, cream, or milk. The 
                         addition of these ingredients may change the coffee's aroma and color, turning it 
                         lighter-brown or white. In the major parts of the world coffee can be seen as 
                         a drink which makes us active, which can also help aid us in performing daily 
                         activities. It is the kick of caffeine, which usually sharpens our mind and make 
                         them active. `], 
                         [`Expresso`, `originated from Italy, and it is more of a concentrated coffee shot, prepared 
                         by pressuring hot water through grounded coffee beans using an espresso machine. It does not 
                         require a specific type of coffee bean to make an Espresso. The coffee bean can be roasted according 
                         to one’s preference: light, medium, or dark.
                         A well-prepared Espresso creates a layer of dark golden cream. It is usually consumed in 2-3 gulps 
                         but as a common practice, one should first breathe in the aroma of the coffee before gulping it.`],
                         [ `Ristretto`, `is known to be a very strong type of coffee. It is prepared from a shot of 
                           espresso also known as short black. In it, the caffeine is extracted in minimal ratio and 
                           maintain water with minimum contact to the grid.`],
                         [ `Long Black`, ` is produced by combining two shots of Espresso or Ristretto with hot water.
                         Long Black coffee is a water-based coffee comparable to Americano.Long Black Coffee has a 
                         stronger flavor, a higher concentration of espresso and a layer of cream on top. In most 
                         cases, it is served in a tall cup or mug. Popular in New Zealand and Australia.`],
                         [ `Drip`, ` is as simple as the name suggest wherein boiling water drips through ground coffee. 
                         It is a filter process which settles in a pot. It is a time-consuming process no doubt, but the 
                         result will be a much more concentrated and stronger coffee.`], 
                         [`Iced Black`,`is one of the simplest ways of consuming black coffee. Pour cool brewed 
                         coffee into a tumbler of ice cubes. To make the taste more amazing we can also add certain 
                         syrups also.  `],
                         [ `Frappe`, `is very popular in places where the weather is hot. It originated in Cyprus, 
                         Greece, and is quite popular among young people and visitors.
                         Preparation involves 1-2 teaspoon of coffee, ice cubes, sugar and little amount of cold 
                         water is added to create a blend thus forming a foam. It is served in tall glass with straw.
                          For health concerned people, you can prepare the coffee without evaporated milk or sugar.`], 
                         [`Flavored`,` may sound new to us, but it actually originated some 100 years ago in Middle East. 
                         Although nowadays flavored coffee is known to be prepared with chemical flavoring, but that is 
                         not the case in Middle East countries where it is prepared by roasting coffee blended with spices
                          and nuts.`],
                         [ `Americano`,`is an espresso mixed with extra hot water, cold water or adding ice cubes. The addition 
                         of water creates lighter version of Espresso and less bitter in taste. It is not bound to a particular
                          type of coffee bean. The process is to pour hot water on Espresso.
                         It is known to have originated during World War 2 by American soldiers in the battlefields 
                         of Europe.`], 
                         [`Irish`, `is a popular Irish coffee recipe known all around the world. Its addition of Irish 
                         whiskey, cream, shot of Espresso and sugar makes it an instant favorite among people. It came 
                         into existence when experimenting the drink during 1950’s.`]]
    const latteCoffee = [``]
    const cappuccinoCoffee = [``]
    const americanoCoffee = [``]
    const espressoblackCoffee = [``]
    const doppioCoffee = [``]
    const cortadoCoffee = [``]
    const galaoCoffee = [``]
    // const lungoCoffee = []
    // const macchiatoCoffee = []
    // const mochaCoffee = []



    //'?coffeeType=black'
  
   
//   console.log( window.history.replaceState(null, 'React App', `/menuOptions?coffeType=${coffeeType}`))
    // console.log(query)
    // useEffect(()=>{
    //     if (window.history.replaceState) {
    //             //prevents browser from storing history with each change:
    //             // window.history.replaceState(null, 'React App', `/menu/menuOptions?coffeeType=${coffee.join('')}`);
    //             window.history.pushState({}, null,  `/menu/menuOptions?coffeeType=${coffee.join('')}`);
    //         }
    // },[coffee])

  return (
    <div style={{color: 'black'}}>

        coffee {coffeeType}
    </div>
  )
}

export default MenuOptions