import {Zobrazenie} from '../../components/zobrazeniemale/zobrazeniemale.js'
export const Owerlap2 = () => {
    const owerlap2 = document.createElement("div")
    owerlap2.className = "owerlap2"
    const klii = document.createElement("div")
        klii.className = "klii"
      
    const horehalvanavcas = document.createElement("div")
        horehalvanavcas.className = "horehalvanavcas"

const odstranenei = (e) => {
    if (e.target !== e.currentTarget) return;

    owerlap2.remove();
};
owerlap2.addEventListener("click" , odstranenei)
klii.addEventListener("click",odstranenei)


    const ikona3 = document.createElement("i")
        ikona3.className = "bx bx-map llpmm"


 const textoc = document.createElement("div")
        textoc.className = "textoc"


const hlavnacast32 = document.createElement("div")
    hlavnacast32.className = "hlavnacast32"

        textoc.innerHTML = `
       <span class = "llplplplplp"></span>
        <div class = "horrehreo">kok</div>
        <div  class = "horrehreo">koko</div>
        `
const llplplplplp = textoc.querySelector(".llplplplplp")
llplplplplp.append(ikona3)
horehalvanavcas.append(textoc,klii)


hlavnacast32.innerHTML = `
<div>kokoko</div>
<div>kokok</div>
<div>kokok</div>
<div>kokok</div>

`
// texthoreprava2.append(ikona3,textoc)

//   owerlap2.append(klii)
//   owerlap2.append(horehalvanavcas)
  owerlap2.append(hlavnacast32)



    return owerlap2
}


//   <span class ="datumikcmknk">

//        <span >${informacie.mesiac}</span> /
//    <span >${informacie.hodiny.day}</span> /

//    <span >${informacie.rok}</span>
  
//   </span>