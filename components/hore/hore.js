import {Kruh} from '../kruh/kruh'
import {Owerlapinput} from '../owerlapinput/owerlapinput.js'
import {informacie} from '../../ulozenie/hlavneulozenie.js'
import {Blikam} from '../../components/bikam/blikam.js'
import {Stupneikona}  from '../../components/supneikona/stupneikona.js'

export const Hore  = () => {
 // elementy   
 console.log(informacie);
 
const body = document.body
    const celacast = document.createElement("div")
    celacast.className = "celacast"

     const ikona1 = document.createElement("i")
        ikona1.className = "bx bx-search"

    const ikona2 = document.createElement("i")
        ikona2.className = "bx bx-menu"

    const ikona3 = document.createElement("i")
        ikona3.className = "bx bx-map llpmm"

         const hore = document.createElement("div")
    hore.className = "hore"

    const textdiv = document.createElement("div")

    textdiv.className = "textdiv"
    textdiv.textContent = informacie.nazov

const kontainerEl = document.querySelector(".kontainer")

     const spodnacast = document.createElement("div")
    spodnacast.className = "spodnacast"


    const texthoreprava = document.createElement("div")
    texthoreprava.className = "texthoreprava"



    const texthoreprava2 = document.createElement("div")
    texthoreprava2.className = "texthoreprava2"

    const textoc = document.createElement("div")
        textoc.className = "textoc"

        textoc.innerHTML = `
        <div class = "horrehreo">${informacie.krajina}</div>
        <div  class = "horrehreo">${informacie.nazov}</div>
        `
  

     texthoreprava2.append(ikona3,textoc)


const lentak = document.createElement("div")
 lentak.className = "lentak"
// elementy
lentak.append(textdiv)
spodnacast.innerHTML = `
<div class = "lavastarna"></div>
<div class = "pravastrana"></div>
`
const pravastrana = spodnacast.querySelector(".pravastrana")
pravastrana.appendChild(Blikam({text:"Aktualne"}))

const lavastarna = spodnacast.querySelector(".lavastarna")
lavastarna.appendChild(texthoreprava)
lavastarna.appendChild(texthoreprava2)



// funkcie
const funkcia = (e) => {
  e.stopPropagation();

  const scrollY = window.scrollY;

  body.style.position = "fixed";
  body.style.top = `-${scrollY}px`;
  body.style.width = "100%";

  const el = Owerlapinput();   // vytvorenie
  document.body.append(el);    // pridanie do DOM

  el.querySelector("input")?.focus(); // použitie
};

    hore.append(Stupneikona())
    hore.appendChild(lentak)
    hore.appendChild(Kruh({
        ikona: ikona1,
          klik:(e) => funkcia(e)
    }))
    celacast.append(hore)

    celacast.append(spodnacast)
    // hore.append(spodnacast)




    return celacast

}