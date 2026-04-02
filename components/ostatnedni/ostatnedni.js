import {grafdata,Setgraf} from '../../ulozenie/graf.js'
import {dni} from '../../data/dni.js'

import {KelvinToCelsius} from '../prepocetnakm/prepocetnakm.js'
import {weatherList} from '../../data/pocasielen.js'


import {Owerlap2} from '../../components/owerlap2/owerlap2.js'
import{rozdelDatum} from '../../components/zizkamdatum/zizkamdatum.js'
import {informacie} from '../../ulozenie/hlavneulozenie.js'
export const  Ostatnekrajiny = (code) => {  
  // console.log(grafdata.halavnedata.length);
  // 

const pole = []
let dnes  = new Date()


dnes.setHours(0,0,0,0)


const body = document.body


const novydatum = Math.floor(dnes.getTime() / 1000);
// console.log(novydatum);

const sekudny = novydatum + 432000  

const maxdnie = new Date( sekudny * 1000)


const minden = novydatum + 86400 
const pprvyod = new Date( minden * 1000)


const poslendedataMIN = pprvyod.getTime() / 1000
const poslendedataMAX = maxdnie.getTime()  / 1000





const dniky = [
  { id: 1, name: "Pondelok", short: "Po" },
  { id: 2, name: "Utorok", short: "Ut" },
  { id: 3, name: "Streda", short: "St" },
  { id: 4, name: "Štvrtok", short: "Št" },
  { id: 5, name: "Piatok", short: "Pi" },
  { id: 6, name: "Sobota", short: "So" },
  { id: 0, name: "Nedeľa", short: "Ne" }
];



for (let i = 0; i < grafdata.halavnedata.length; i++) {
  const element = grafdata.halavnedata[i];

if (element.dt > poslendedataMIN && element.dt < poslendedataMAX ) {
  
pole.push(element);

const den = new Date(element.dt * 1000)

const key = den.toISOString().split("T")[0]

}}





const poslednykrat = pole.reduce((acc,x) => {

  // console.log(x);
  

  let datum = x.dt * 1000
  
  let novy = new Date(datum)


let dnik = novy.getDay()






const text = weatherList.find(item => item.main ===x.weather[0].main )

  
  const najdenyden = dni.find(item => item.index === dnik)

  
const isoDate = novy.toISOString().slice(0, 10)



let najdem = acc.find((item => item.kluc === isoDate))



if (!najdem) {
acc.push({
  cislo:x.dt,
  maxiamlna:"",minilalna:"",vlkosthodnota:"",vietorpriemer:"",pocit:"",kluc:isoDate,img:"",popips:text.mainSk,fotka:x.weather[0].main,dokopy:"",dne:najdenyden.skratka,hodnota:[{klic:x}]}) 

} 
else {

  najdem.hodnota.push({klic:x})
}




return acc

  

 
  
  

},[])






const posldeneuzfakt = poslednykrat.reduce((acc,i) => {
  const sictavam = i.hodnota
  // console.log(i);
  



  

  const premenna = sictavam.reduce((acc2,i2) => {
    const cislo = i2.klic.main.temp
    const pocitova = i2.klic.main.feels_like
    const vlhkost = i2.klic.main.humidity
    const vietor = i2.klic.wind.speed

    const mimii = i2.klic.main.temp_min
    const maxxx = i2.klic.main.temp_max
// console.log(mimii);
// console.log(maxxx);

  
  
    let reprezentujem = cislo + acc2.stupne
    let cisla = pocitova+ acc2.priemer
    let viter = vietor + acc2.vietor
    let vlhkostik = vlhkost + acc2.vlahkos
    let maxo = maxxx + acc2.maxi
    let minniii = mimii + acc2.mini

    // let maxixxi = 
    // let minini = 

      return {
        stupne:reprezentujem,
        priemer:cisla,
        vlahkos:vlhkostik,
        vietor:viter,
        maxi:maxo,
        mini:minniii
        
      
      }
  },{
     stupne:0,
        priemer:0,
        vlahkos:0,
        vietor:0,
        maxi:0,
        mini:0


  })

  console.log(premenna.mini);
  
  const pretypovanie = KelvinToCelsius(premenna.stupne /sictavam.length)
  const finalvhkost = Math.round(premenna.vlahkos / sictavam.length)
  const vietorfinal = Math.round(premenna.vietor / sictavam.length *10) /10
  const priemerna = KelvinToCelsius(premenna.priemer / sictavam.length)
  // const finalvhkost = Math.round(premenna.vlahkos / sictavam.length)


  const maxFinla = KelvinToCelsius(premenna.maxi/sictavam.length)
  const minFinla = KelvinToCelsius(premenna.mini/sictavam.length)

// console.log(minFinla);



  

// console.log(poslednykrat);
// console.log(i.fotka);

// console.log(pretypovanie);

const fotka = weatherList.find(item => item.main === i.fotka)
// console.log(fotka.img);



i.img = fotka.img
i.dokopy = pretypovanie
i.vietorpriemer = vietorfinal
i.pocit = priemerna
i.vlkosthodnota = finalvhkost
i.maxiamlna = maxFinla
i.minilalna = minFinla

  return acc

},[...poslednykrat])

  console.log(posldeneuzfakt);

// console.log(posldeneuzfakt);


    const druhapage = document.createElement("div") 
        druhapage.className = "druhapage"
        druhapage.innerHTML = `
        <span class = "horetexciek">Predpoveď počasia na dalsie dni</span>
        <div class = "llkoko">

         ${posldeneuzfakt.map((item) => `
          <div class = "centrum">
          <div class ="llolooccm">
            <span >${item.dne} </span>
 
                <img class = "ikonavvvmalaokninko" src="${item.img}" />
                    <span class = "aaannnoko">    ${item.popips}</span>
          
          
          </div>

        

                <span>         ${item.dokopy}${informacie.ikonastupen}</span>
            
              
                


     
      

         </div>`).join("")}

        </div>
        `


const centrum = druhapage.querySelectorAll('.centrum')



const otvorenie = (paramater) => {


window.scrollTo({
  top: 0,
  behavior: "smooth"
});

document.documentElement.style.overflow = "hidden";
body.style.overflow = "hidden";


  const spravne = posldeneuzfakt.find((item,index) => index === paramater)
  console.log(spravne.cislo);
  


  const prepocet = spravne.cislo * 1000
  console.log(spravne);
  console.log(prepocet);
  const novydatum = new Date(prepocet)
  console.log(novydatum);

  const deniee = novydatum.getDay()

  console.log(deniee);
  

  const denuzfilter = dniky.filter(item => item.id === deniee)
  console.log(denuzfilter);
  console.log(denuzfilter[0].name);
  console.log(denuzfilter);
  
  const {
    rok,
    mesiac, // mesiace sú od 0
    den
  } = rozdelDatum(spravne.cislo)

  console.log(rok);
  

    document.documentElement.append(Owerlap2(
      {
mesiac:mesiac,
den:den,
rok:rok,
stupne:spravne.dokopy,
popis:spravne.popips,
pocitova:spravne.pocit,
hodnotavlhkost:spravne.vlkosthodnota,
vietorhodnota:spravne.vietorpriemer,
maximalna:spravne.maxiamlna,
minimalna:spravne.minilalna,
obrazok:spravne.img,

vypcet:denuzfilter[0].name
      }
      
    ))
  
}


for (let index = 0; index < centrum.length; index++) {
  const element = centrum[index];
  // console.log(element);

  element.addEventListener("click" , () => otvorenie(index) )
  
  
}

  return druhapage
}
