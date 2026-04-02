import { Dole } from '../../components/dole/dole.js'
import { Hore } from '../../components/hore/hore.js'
import { Stred } from '../../components/stred/stred.js'
import { Ziskaniekrajiny } from '../../components/ziskaniekrajiny/ziskaniekrajiny.js'
import { Setinformacie } from '../../ulozenie/hlavneulozenie.js'

import { rozdelDatum } from '../../components/zizkamdatum/zizkamdatum.js'
import { novedatnaswiper, SetRender } from '../../ulozenie/render.js'

import { Hladam } from '../../data/data.js'
import { Ostatnekrajiny } from '../../components/ostatnedni/ostatnedni.js'
import { datumcas } from '../../components/datumcas/datumcas.js'
import { Gridmapovanie } from '../../components/gridmapovanie/gridmapovanie.js'

import { Setgraf } from '../../ulozenie/graf.js'
import { Gradinetfunkcia } from '../../components/gradinetfunkcia/gradinetfunkcia.js'


export const AppRender = async () => {
setInterval(() => {
  app.style.background = Gradinetfunkcia();
}, 60000)

app.style.background = Gradinetfunkcia()
const kontainer = document.createElement("div")
kontainer.className = "kontainer"

app.appendChild(kontainer)

const api = "1b7dcddb27a5652879e1c24b4c14ad52"


const dokument = document.getElementById("druhacstr")
console.log(dokument);


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

            dodatok:`Aktualne`
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
    dokument.append(Gridmapovanie())
    
    

    } catch (err) {
        console.error(err);
    }
}
await render();

};