import {informacie} from '../../ulozenie/hlavneulozenie'
import {weatherList} from '../../data/pocasielen.js'
import {Zobrazenie} from '../../components/zobrazeniemale/zobrazeniemale.js'
import {mpsToKmh} from '../../components/rychlost/ryhchlost.js'
import {KelvinToCelsius} from '../../components/prepocetnakm/prepocetnakm.js'



export const Stred  = () => {






   const ziskane = mpsToKmh(informacie.vietor)
   const pocitova = KelvinToCelsius(informacie.pocit)
   const maximalna = KelvinToCelsius(informacie.max)
   const minimalna = KelvinToCelsius(informacie.min)

   console.log(informacie.min);
   
   console.log(minimalna);
   console.log(informacie.hodiny);
   console.log(informacie.mesiac);
   
 
   const finalnecislo = Math.round(ziskane *10) / 10
   const prepocitavam = KelvinToCelsius(informacie.stupe)
   



    const najdene = weatherList.find(item => item.main === informacie.popisakoje)
    console.log(najdene.img);
    // const najdene2 = najdene.descriptions.find(item => item.text === informacie.podlatohourcujes)
    // console.log(najdene2.img);
    
    const stred = document.createElement("div")
    stred.className = "stred"

    stred.innerHTML = `
    <span class = "texthoreeww"> 
    <span>    ${informacie.mesiac}</span> /
    <span>    ${informacie.datum}</span>/
    <span>    ${informacie.rok}</span>
    
    </span>
    <div class = "obrazok">
    <div class= "jbnvkjsbjks">
     <div class = "picturewrapper">
    

    
        <img  class = "obrzsekoko"src="${najdene.img}" />
    </div>
    
    
    </div>
   
    </div>

    
    <div class = "obrazok2">
   

  
    <span class = "stupnecelzie">${prepocitavam}${informacie.ikonastupen}</span>
    <span class = "textdiv">${najdene.mainSk}</span>

    
    <div class = "llplplpnjhkbhj">


    
  

   
      <span class = "texthoreeww2">Pocitova teplota je ${pocitova}${informacie.ikonastupen}</span>
</div>

   
    

    </div>
   

    <div class = "virotrkokotin"></div>
    `
    const virotrkokotin = stred.querySelector(".virotrkokotin")
    virotrkokotin.append(Zobrazenie({
        text:"Vietor",
        kolko:"km/h",
        druhytext:finalnecislo,
           najdene:"/Windy.webp",


    }))
    virotrkokotin.append(Zobrazenie({
              text:"Vlhkost",
                    kolko:"%",
            druhytext:informacie.vlhkost,
        najdene:"/dazd.webp"
    }))
    



    return stred

}


//  stupe:"24",
//   pocit:"5",
//   max:"15",
//   min:"1",
//   popisakoje:"sunny",


