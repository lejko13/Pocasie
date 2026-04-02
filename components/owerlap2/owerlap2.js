import {Zobrazenie} from '../../components/zobrazeniemale/zobrazeniemale.js'

import {Setinformacie,informacie} from '../../ulozenie/hlavneulozenie.js'

import {Dodatkova} from '../dodatkova/blikam.js'

import {rozdelDatum} from '../../components/zizkamdatum/zizkamdatum.js'

import {Gradinetfunkcia} from '../../components/gradinetfunkcia/gradinetfunkcia.js'
import {Hladam} from "../../data/data.js"


export const Owerlap2 = ({vypcet,obrazok,maximalna,minimalna,vietorhodnota,mesiac,rok,den,stupne,popis,pocitova,hodnotavlhkost} = {}) => {

    const dalej = document.createElement("div")
        dalej.className = "dalej"

    const body = document.body

    const owerlap2 = document.createElement("div")
    owerlap2.className = "owerlap2"

    owerlap2.style.background = Gradinetfunkcia()
    const klii = document.createElement("div")
        klii.className = "klii"
      
    const horehalvanavcas = document.createElement("div")
        horehalvanavcas.className = "horehalvanavcas"
      
    const horehalvanavcas2 = document.createElement("div")
        horehalvanavcas2.className = "horehalvanavcas2"

    const nazovii = document.createElement("div")
        nazovii.className = "nazovii"
        nazovii.textContent = informacie.nazov

    
        const novyuplne = document.createElement("div")
            novyuplne.className = "novyuplnnnee"


            const ludze = Hladam.find(item => item.name === informacie.nazov )
            console.log(ludze.population);
            


const odstranenei = (e) => {
    if (e.target === e.currentTarget) {
        owerlap2.remove()

        document.documentElement.style.overflowY = "auto"
        body.style.overflowY = "auto"

    };


    


};
owerlap2.addEventListener("click" , odstranenei)



    const ikona3 = document.createElement("i")
        ikona3.className = "bx bx-map llpmm"
    const ikona4 = document.createElement("i")
        ikona4.className = "bx bx-map llpmm"

    const xikona = document.createElement("i")
        xikona.className = "bx bx-x ppppvsva"


 


    const xikon33a = document.createElement("i")
        xikon33a.className = "bx bx-chevron-left sipakkk"


 const textoc = document.createElement("div")
        textoc.className = "textoc"


const hlavnacast32 = document.createElement("div")
    hlavnacast32.className = "hlavnacast32"

        textoc.innerHTML = `
      
       <div class = "lokoko">
   <span class = "texoooll">Max: ${maximalna}${informacie.ikonastupen}</span>
  
   <span class = "texoooll">Min: ${minimalna}${informacie.ikonastupen}</span>

    
   </div>
        `


const anoklik = () => {
    owerlap2.remove()

 document.documentElement.style.overflowY = "auto"
        body.style.overflowY = "auto"
    
}


klii.addEventListener("click" , anoklik)

xikon33a.addEventListener("click" , anoklik)

// const xikona = document.querySelector(".xikona")

// console.log(xikona);


horehalvanavcas.append(textoc,Dodatkova({

    text:vypcet
}))


hlavnacast32.innerHTML = `
<div class = "texthoreeww">
    <span>${mesiac}</span> /
    <span> ${den}</span>/
    <span>${rok}</span>
</div>

<div class = "obraozkeckoko">
  <img  class = "obrzsekoko3323"src="${obrazok}" />
</div>
<div class = "classsgaplen">
<div class ="stupnecelzie" >${stupne}${informacie.ikonastupen}</div>
<div class ="textdiv" >${popis}</div>
<div class ="texthoreeww2" >Pocitova teplota je ${pocitova}${informacie.ikonastupen}</div>
    <div class = "virotrkokotin"></div>


</div>




`
const najdenydolnywrpaer = hlavnacast32.querySelector(`.virotrkokotin`)
console.log(najdenydolnywrpaer);
najdenydolnywrpaer.appendChild(Zobrazenie({
      najdene:"/Windy.png",
    text:"Vietor",
    druhytext:vietorhodnota,
    kolko:"km/h"
}))
najdenydolnywrpaer.appendChild(Zobrazenie({
    text:"Vlhkost",
    druhytext:hodnotavlhkost,
    kolko:"%",
     najdene:"/dazd.png"
}))

// texthoreprava2.append(ikona3,textoc)

//   owerlap2.append(klii)


novyuplne.innerHTML = `
<div class = "malekonknoncsc">
  <img  class = "obrzsekoko33"src="${obrazok}" />

<span>${popis}</span>
</div>
 <div class = "lokoko">
   <span class = "texoooll">Max: ${maximalna}${informacie.ikonastupen}</span>
  
   <span class = "texoooll">Min: ${minimalna}${informacie.ikonastupen}</span>

    
   </div>
`

const poslenyzecoajak = document.createElement("div")
poslenyzecoajak.className = "poslenyzecoajak"

const populacia = document.createElement("div")
populacia.className = "populacia"

populacia.innerHTML = `
<div class = "loorerenemeo">
 <span class = "llplplplplp32">
<span class = "lllooopmjnj"></span>
<div class = "horrehreo">${informacie.krajina}</div>
        <div  class = "horrehreo">${informacie.nazov}</div>

 </span>
</div>
<div>
<span class = "texoooll">Populacia: ${ludze.population} MIL</span>
</div>

`
const lllooopmjnj = populacia.querySelector(".lllooopmjnj")
console.log(lllooopmjnj);


const llplplplplp32 = populacia.querySelector(".llplplplplp32")


lllooopmjnj.append(ikona4)


const loorerenemeo = populacia.querySelector(".loorerenemeo")
console.log(loorerenemeo);

klii.append(xikona)
horehalvanavcas2.append(xikon33a,nazovii,klii)
  owerlap2.append(horehalvanavcas2)
  owerlap2.append(horehalvanavcas)

  owerlap2.append(hlavnacast32)
//   owerlap2.append(novyuplne)
//   owerlap2.append(populacia)



    return owerlap2
}

