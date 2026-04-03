import {Setstupe,stupne} from '../zmenakelvinunas/zemnakelvinu.js'
import {KelvinToCelsius} from '../../components/prepocetnakm/prepocetnakm.js'


import {informacie,Setinformacie} from '../../ulozenie/hlavneulozenie.js'


import {Dole} from '../../components/dole/dole.js'
import {Hore} from '../../components/hore/hore.js'
import {Stred} from '../../components/stred/stred.js'
import {Ostatnekrajiny} from '../../components/ostatnedni/ostatnedni.js'
import {Textclpsed} from '../../components/kedsazavrievsetko/kedsazavrievsetko.js'

export const Stupneikona = () => {

    const ikonahakvna = document.createElement("div")
    ikonahakvna.className = "ikonahakvna"

ikonahakvna.textContent = informacie.ikonastupen


// kontainer.className = "kontainer"
const kontainer = document.querySelector(".kontainer")
const dokument = document.getElementById("druhacstr")
console.log(dokument);


const body = document.body




const zmena = () => {
    if (informacie.render === 0) {
        console.log("0");
      Setinformacie({
           render:1,
        ikonastupen:"°F"
       
      })
    }
    
else{
    console.log("1");
    Setinformacie({
    render:0,
      ikonastupen:"°C"
        })}
     console.log(informacie);
     

console.log(kontainer);

body.innerHTML = ""
// dokument.innerHTML = ""

 body.append(Hore())
    body.append(Stred())
    body.append(Dole())
    body.append(Ostatnekrajiny())
     body.append(Textclpsed())
    
}
ikonahakvna.addEventListener('click' , zmena)


    return ikonahakvna
}