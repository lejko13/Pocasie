import {Hladam} from '../../data/data.js'

import {Setinformacie} from '../../ulozenie/hlavneulozenie.js'
import {novedatnaswiper,SetRender} from '../../ulozenie/render.js'


import {Dole} from '../../components/dole/dole.js'
import {Hore} from '../../components/hore/hore.js'
import {Stred} from '../../components/stred/stred.js'



import {Gridmapovanie} from '../../components/gridmapovanie/gridmapovanie.js'

import {Ostatnekrajiny} from '../../components/ostatnedni/ostatnedni.js'


import {datumcas} from '../../components/datumcas/datumcas.js'
import {Ziskaniekrajiny} from '../../components/ziskaniekrajiny/ziskaniekrajiny.js'

import {rozdelDatum} from '../../components/zizkamdatum/zizkamdatum.js'
import {grafdata,Setgraf} from '../../ulozenie/graf.js'
import {Gradinetfunkcia} from '../../components/gradinetfunkcia/gradinetfunkcia.js'
export const Owerlapinput  = () => {
// elemetny



const api = "1b7dcddb27a5652879e1c24b4c14ad52"



     const owerlapinput = document.createElement("div")
        owerlapinput.className = "owerlapinput"


   
owerlapinput.style.background = Gradinetfunkcia()



     const input = document.createElement("input")
        input.className = "input"
        
     const wraperko = document.createElement("wraperko")
        wraperko.className = "wraperko"
        wraperko.append(input)
        input.placeholder = "Vyhladaj mesto"; 


     const vysledky = document.createElement("div")
        vysledky.className = "vysledky"

        const klik = document.createElement("div")
        klik.className = "klik"
console.log(klik);


       const lenklikanec = document.createElement("div")
             lenklikanec.className = "lenklikanec"
       const ikona = document.createElement("i")
             ikona.className = "bx bx-x kokol"

lenklikanec.append(ikona)





const kontainer = document.querySelector(".kontainer")

const dokument = document.getElementById("druhacstr")


console.log(dokument);






  let finall = [];
        


// const kontrola  = (e) => {
//   if (input) {

//     console.log("kokokokokmlml");
    
//     return null
//   }
//         if (klik.contains(e.target)) {


//                 owerlapinput.remove()
//        input.value = "";
//        console.log("anoononobvfhbvkdfvbfkdj");
       
// vysledky.innerHTML = `<span></span>`;
//  input.style.borderRadius = "22px"
//   lenklikanec?.remove();
//       vysledky.style.opacity = 0
//       input.focus()
// console.log(input);


//                 console.log("ankokokoko");  
//                 return
//         }
     
        
//                 owerlapinput.remove()
//                  document.body.classList.remove('no-scroll');
//         document.removeEventListener("click",kontrola)
// } 


const inputlogika = (e) => {
  const text = e.target.value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "");

  if (text.length === 0) {
    finall = [];
    lenklikanec?.remove();
    vysledky.innerHTML = ``;
      vysledky.style.opacity = 0
   
           input.style.borderRadius = "22px"
 
    return;
  }




  
  const results = Hladam.filter(item =>
    item.name.toLowerCase().includes(text)
  );

  finall = results;

  wraperko.append(lenklikanec);

  if (results.length === 0) { 
    vysledky.innerHTML = `<span class = "lpnhjvbhvbhu">Hodnota sa nezhoduje</span>`;
    return;
  }

  const kkokoko = () => {
  input.value = ""; 
  results.length = 0
  console.log(results);
   vysledky.innerHTML = ""
   input.focus()
   lenklikanec.remove()

      vysledky.style.opacity = 0
};

  ikona.addEventListener("click" , kkokoko)
  
  vysledky.innerHTML = results
    .map(item => `<div class = "lpnhjvbhvbhu">
      <span class ="vvevev">${item.name}</span>
      <span class ="vve232vev">${item.country}</span>
      </div>`)
    .join("");
     vysledky.style.opacity = 1


     const najdenyinput = vysledky.querySelectorAll('.lpnhjvbhvbhu')





najdenyinput.forEach((e,i) => {

  const logujemmme  = () => {
    // console.log(results);

 
    // console.log(i);

  const haldam = results.find((item,index)=>  index === i)
  console.log(haldam);
  
  const halvnedata = async () => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${haldam.lat}&lon=${haldam.lon}&appid=${api}`)
    if (!data.ok) {
      throw new Error("API chyba")
    }
    const finall = await data.json()


return finall
       
  }

  const vedlajsiedata = async () => {

     const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${haldam.lat}&lon=${haldam.lon}&appid=${api}`)

      if (!data.ok) {
        throw new Error("API chyba")
    }
    const finall =  await data.json()


    owerlapinput.remove()

return finall

    }



const finakolko = async () => {



  try {
    kontainer.innerHTML = ""
    dokument.innerHTML = ""
      const dokoncene = await halvnedata()
      const dokoncenevsetko  = await vedlajsiedata()
  
  
      console.log(dokoncene.dt * 1000);
      const cast = new Date(dokoncene.dt * 1000).getHours()
      // console.log(dokoncenevsetko);
  
      const hodiny = datumcas(dokoncene.dt)
      
          const krajinaInfo =  Ziskaniekrajiny(dokoncene.sys.country)
          const {rok ,mesiac,den} = rozdelDatum(dokoncene.dt)
      // console.log(rok ,mesiac,den);
      
          Setinformacie({
              krajina:krajinaInfo,
              mesiac:mesiac,
              datum:den,
              rok:rok,
              popisakoje:dokoncene.weather[0].main,
              podlatohourcujes:dokoncene.weather[0].description,
              vlhkost:dokoncene.main.humidity,
              vietor:dokoncene.wind.speed,
              stupe:dokoncene.main.temp,
              pocit:dokoncene.main.feels_like,
              max:dokoncene.main.temp_max,
              min:dokoncene.main.temp_min,
              hodiny:hodiny,
              nazov:haldam.name,


             lat:dokoncene.coord.lat,
            lon:dokoncene.coord.lon,
  
              // dodatok:`${cast}:00`
          }) 
  
          
  
          SetRender({
              novedatnaswiper:dokoncenevsetko.list
          })
          // console.log();
          
          Setgraf({
              halavnedata:dokoncenevsetko.list
          })
          console.log(novedatnaswiper);
          
  Gradinetfunkcia()
      kontainer.append(Hore())
      kontainer.append(Stred())
      kontainer.append(Dole())
      dokument.append(Ostatnekrajiny())
      // dokument.append(Gridmapovanie())
      
      
  
      } catch (err) {
          console.error(err);
      }

  

} 

finakolko()

     document.body.classList.remove('no-scroll');
    
  
  }
  e.addEventListener("click" ,logujemmme)
  
});

};




// logika
        setTimeout(() => {input.focus()}, 0)

        klik.appendChild(wraperko)
        klik.appendChild(vysledky)

//  klik.appendChild(lenklikanec)
        owerlapinput.appendChild(klik)


const kontrloaaa = (e) => {
  if (e.target === e.currentTarget || e.target === klik) {
      owerlapinput.remove()
    document.body.classList.remove('no-scroll');


       
  }

 
}


        owerlapinput.addEventListener("click" , kontrloaaa)
        // document.addEventListener("click" , kontrola)
        input.addEventListener("input" , inputlogika)



        return owerlapinput
   
}