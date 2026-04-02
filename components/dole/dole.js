import {informacie} from '../../ulozenie/hlavneulozenie'
import {weatherList} from '../../data/pocasielen.js'
import {mpsToKmh} from '../../components/rychlost/ryhchlost.js'
import {KelvinToCelsius} from '../../components/prepocetnakm/prepocetnakm.js'

import Swiper from 'swiper';
import { Mousewheel, FreeMode } from 'swiper/modules';
import 'swiper/css';


import {novedatnaswiper,SetRender} from '../../ulozenie/render.js'
import {Zobrazovanie} from '../../components/zobrazovanievoswiperi/zobrazovanievoswiperi.js'
import {datumcas} from '../../components/datumcas/datumcas.js'

import {Ziskaniekrajiny} from '../../components/ziskaniekrajiny/ziskaniekrajiny.js'
import {Setinformacie} from '../../ulozenie/hlavneulozenie.js'



import {rozdelDatum} from '../../components/zizkamdatum/zizkamdatum.js'

// import {Dole} from '../../components/dole/dole.js'
import {Hore} from '../../components/hore/hore.js'
import {Stred} from '../../components/stred/stred.js'



import {Blikam} from '../../components/bikam/blikam.js'





import {AppRender} from '../../components/render/render.js'

import {Ostatnekrajiny} from '../../components/ostatnedni/ostatnedni.js'

export const Dole  = () => {

        const kontainerEl = document.querySelector(".kontainer")

const dokument = document.getElementById("druhacstr")

    const najdene = weatherList.find(item => item.main === informacie.popisakoje)


    const body = document.body
    //    const ziskane = mpsToKmh(informacie.vietor)
       const pocitova = KelvinToCelsius(informacie.pocit)
       const maximalna = KelvinToCelsius(informacie.max)
       const minimalna = KelvinToCelsius(informacie.min)


       
 const textvacstblikblikb = document.createElement("div")
    
       

    const dole = document.createElement("div")
    dole.className = "dole"

    const ikonka4 = document.createElement("i")
    ikonka4.className = "bx bx-up-arrow-alt"


    const texicekhore = document.createElement("div")
    texicekhore.className = "texicekhore"
    texicekhore.innerHTML = `

 
    <div class = "dnesobal">
    <span class = "dnestextoo">Dnes</span>
  <span class ="datumikcmknk">

       <span >${informacie.mesiac}</span> /
   <span >${informacie.hodiny.day}</span> /

   <span >${informacie.rok}</span>
  
  </span>

    </div>

    <div
      id = kareck
     class = "wraperkoko">
     <span 
   
     class = "dnestextoo">Dalsie   <span class ="lpvjkvbhjbvhj"> 4 dni</span> </span>
  
    <span class = "tujeinkaaa"></span>
    </div>
    `
    const dnesobal = texicekhore.querySelector('.dnesobal')
    console.log(dnesobal);

    
    dnesobal.addEventListener("click" , () => {body.innerHTML = "",AppRender(),window.scrollTo({
  top: 0,
  behavior: "smooth"
});
    })
    const kareck = texicekhore.querySelector("#kareck")
    console.log(kareck);

    const scrolldole = () => {
       document.body.scrollTo({
  top: 0,
  behavior: "smooth"
});
    
    }
    kareck.addEventListener("click" , scrolldole)
    
    

const tujeinkaaa = texicekhore.querySelector('.tujeinkaaa');
    console.log(tujeinkaaa);

    tujeinkaaa.appendChild(ikonka4)
    

    const uakzak = document.createElement("div")
    uakzak.className = "uakzak"

       const texthdole = document.createElement("div")
    texthdole.className = "texthdole"
       const swipercast = document.createElement("div")
   swipercast.className = "swipercast"

   texthdole.innerHTML = `

   <div class = "malyobrazoktamje">

  <img  class = "fotkazecoo" src="${najdene.img}" />

  
   

     <span class = "tellkokok">${najdene.mainSk}</span>

   </div>

   

   <div class = "textovacastniine">
  




  
   
   </div>


   <div class = "lokoko">
   <span class = "texoooll">Max: ${maximalna}${informacie.ikonastupen}</span>
  
   <span class = "texoooll">Min: ${minimalna}${informacie.ikonastupen}</span>

    
   </div>
   `

const malyobrazoktamje = texthdole .querySelector(".malyobrazoktamje")
console.log(malyobrazoktamje);

// const napsata = () => {
//   Setinformacie({
//             krajina:"njvbjabvjhv b",
//             mesiac:"",
//             datum:"",
//             rok:"",
//             popisakoje:"",
//             podlatohourcujes:"",
//             vlhkost:"",
//             vietor:"",
//             stupe:"",
//             pocit:"",
//             max:"",
//             min:"",
//             hodiny:"",

//             dodatok:""
//         }) 
  
//         kontainerEl.innerHTML =''
//    kontainerEl.append(Hore())
//     kontainerEl.append(Stred())
//     kontainerEl.append(Dole())
// }
// malyobrazoktamje.addEventListener("click" , napsata)


swipercast.innerHTML = `
  <div class="swiper">
    <div class="swiper-wrapper">

    </div>
  </div>
`;
const list = novedatnaswiper.novedatnaswiper;

  //  console.log(informacie.datum);

   
if (!Array.isArray(list)) return;

// const sliced = list.slice(0, 10);

const finalnepoel = []



let novy = new Date(); 
let timestamp = Math.floor(novy.getTime() / 1000); // aktuálny timestamp v sekundách

let timestampPlus24h = timestamp + 24*3600; // +24 hodín
// console.log(timestampPlus24h);



let kokotina = new Date(); 
let upravnynovy = Math.floor(kokotina.getTime() /1000 )
// console.log(upravnynovy);





const dne = list.filter(item => {

if (item.dt > upravnynovy && item.dt < timestampPlus24h) {


finalnepoel.push(item)
}})

const ukaldasslidi = swipercast.querySelector('.swiper-wrapper')

ukaldasslidi.innerHTML = finalnepoel.map(item => {


const {hour} = datumcas(item.dt)

// console.log(hour);

let cislo = `${hour}:00`



const ikony = weatherList.find(i => i.main === item.weather[0].main)


  return `
    <div class="swiper-slide ">
 

    <div class = "llllomom">
        <img  class = "oimmkmko" src="${ikony.img}" />
    </div>

    <span class = "llplplpmnnv"> ${cislo}</span>
   
    </div>
  `;
}).join('');







const klike = ukaldasslidi.querySelectorAll(".swiper-slide");

// klike[0].style.backgroundColor = "red"
console.log(klike);

for (let index = 0; index < klike.length; index++) {
  const element = klike[index];
  element.addEventListener("click", () => {
   const najdeny = finalnepoel[index];
    console.log(najdeny.dt);

    const cas = new Date(najdeny.dt * 1000).getHours()

    console.log(cas);
console.log("kokokokokoko");

window.scrollTo({
  top: 0,
  behavior: "smooth"
});
    
textvacstblikblikb.textContent = "lloom"
        // const krajinaInfo =  Ziskaniekrajiny(dokoncene.sys.country)


        const {rok ,mesiac,den} = rozdelDatum(najdeny.dt)


    Setinformacie({
            // krajina:krajinaInfo,
            mesiac:mesiac,
            datum:den,
            rok:rok,
            popisakoje:najdeny.weather[0].main,
            podlatohourcujes:najdeny.weather[0].description,
            vlhkost:najdeny.main.humidity,
            vietor:najdeny.wind.speed,
            stupe:najdeny.main.temp,
            pocit:najdeny.main.feels_like,
            max:najdeny.main.temp_max,
            min:najdeny.main.temp_min,
            // hodiny:hodiny
            dodatok:`${cas}:00`
        }) 

    console.log(informacie);
    


  body.innerHTML = ""

    body.append(Hore())
    body.append(Stred())
    body.append(Dole())
        body.append(Ostatnekrajiny())



  });
  
}




  const swiperEl = swipercast.querySelector('.swiper');
new Swiper(swiperEl, {
  modules: [Mousewheel, FreeMode],

  slidesPerView: 4,
  spaceBetween: 10,

  freeMode: true,
  freeModeMomentum: true,

  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
  },

  grabCursor: true,
});

;



uakzak.append(texthdole)
uakzak.append(swipercast)
    dole.append(texicekhore)
    dole.append(uakzak)
    return dole

}