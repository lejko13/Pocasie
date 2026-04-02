import {Setinformacie,informacie} from '../../ulozenie/hlavneulozenie.js'
export const Dodatkova  = ({text} = {}) => {      
    const blik = document.createElement("div")
        blik.className = "blik"
    const blikacka = document.createElement("div")
        blikacka.className = "blikacka"
    const textvacstblikblikb = document.createElement("div")
        textvacstblikblikb.className = "textvacstblikblikb"
        textvacstblikblikb.textContent = text

        blik.append(blikacka)
        blik.append(textvacstblikblikb)




    return blik
}