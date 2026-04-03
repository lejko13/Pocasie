
import {Dole} from './components/dole/dole.js'
import {Hore} from './components/hore/hore.js'
import {Stred} from './components/stred/stred.js'
import {Ziskaniekrajiny} from './components/ziskaniekrajiny/ziskaniekrajiny.js'
import {Setinformacie} from './ulozenie/hlavneulozenie.js'



import {rozdelDatum} from './components/zizkamdatum/zizkamdatum.js'
import {novedatnaswiper,SetRender} from './ulozenie/render.js'

import {Hladam} from './data/data.js'

import {Ostatnekrajiny} from './components/ostatnedni/ostatnedni.js'

import {datumcas} from './components/datumcas/datumcas.js'

import {Gridmapovanie} from './components/gridmapovanie/gridmapovanie.js'

import {grafdata,Setgraf} from './ulozenie/graf.js'

import {Gradinetfunkcia} from './components/gradinetfunkcia/gradinetfunkcia.js'

import {Textclpsed} from './components/kedsazavrievsetko/kedsazavrievsetko.js'

import {Textovacasticekok} from './components/textovacastikce/textovacstik.js'
const lenpagenabreak = document.querySelector(".lenpagenabreak")
console.log(lenpagenabreak);
//  lenpagenabreak.style.background = Gradinetfunkcia();

const mq = window.matchMedia("(min-width: 600px)");

const body = document.body;



// mq.addEventListener("change", (e) => {
//   if (e.matches) {
//     body.innerHTML = ""
//     body.append(Textovacasticekok())
//   } else {
//   body.append(Hore())
//     body.append(Stred())
//     body.append(Dole())
//     body.append(Ostatnekrajiny())
//   }
// });




 const openInstagram = () => {
  window.open("https://www.instagram.com/leofudaly/", "_blank");
};

const tubuudinkoy = document.querySelectorAll('.tubuudinkoy')
console.log(tubuudinkoy);

tubuudinkoy.forEach(element => {
    element.addEventListener("click", () => {
       openInstagram()
    });
});





console.log(body);


 body.style.background = Gradinetfunkcia()

setInterval(() => {

 body.style.background = Gradinetfunkcia();
//   app.style.background = Gradinetfunkcia();
}, 10000)


// app.style.background = Gradinetfunkcia()
const kontainer = document.createElement("div")
kontainer.className = "kontainer"

// app.appendChild(kontainer)

const api = "1b7dcddb27a5652879e1c24b4c14ad52"


const dokument = document.getElementById("druhacstr")
console.log(dokument);
// dokument.style.backgroundColor = "pink"

const dataDnes = async () => {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${Hladam[0].lat}&lon=${Hladam[0].lon}&appid=${api}`)

    if (!data.ok) {
               throw new Error("API chyba")
    }
     const dnesfinal = await data.json();
    return dnesfinal
} 


const dataVsetko = async () => {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${Hladam[0].lat}&lon=${Hladam[0].lon}&appid=${api}`)

    if (!data.ok) {
               throw new Error("API chyba")
    }
     const vsetkodata = await data.json();
    return vsetkodata
} 


const render = async () => {
try {
    const dokoncene = await dataDnes()
    const dokoncenevsetko  = await dataVsetko()


    console.log(dokoncene.dt * 1000);
    const cast = new Date(dokoncene.dt * 1000).getHours()
    console.log(dokoncene);

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
    body.append(Hore())
    body.append(Stred())
    body.append(Dole())
    body.append(Ostatnekrajiny())
    body.append(Textclpsed())
 
    
    

    } catch (err) {
        console.error(err);
    }
}


// setInterval(() => {console.log("koko");
// },2000)







render()

