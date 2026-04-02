import {Setinformacie,informacie} from '../../ulozenie/hlavneulozenie.js'
export const Blikam  = ({text} = {}) => {      
    const blik = document.createElement("div")
        blik.className = "blik"
    const blikacka = document.createElement("div")
        blikacka.className = "blikacka"
    const textvacstblikblikb = document.createElement("div")
        textvacstblikblikb.className = "textvacstblikblikb"
        textvacstblikblikb.textContent = informacie.dodatok

        blik.append(blikacka)
        blik.append(textvacstblikblikb)




    return blik
}