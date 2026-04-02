import {Hladam} from '../../data/data.js'
export const Owerlapinput  = () => {
// elemetny

     const owerlapinput = document.createElement("div")
        owerlapinput.className = "owerlapinput"

     const input = document.createElement("input")
        input.className = "input"
        
     const wraperko = document.createElement("wraperko")
        wraperko.className = "wraperko"
        wraperko.append(input)
        input.placeholder = "Vyhladaj mesto"; 


     const vysledky = document.createElement("div")
        vysledky.className = "vysledky"

        const klik = document.createElement("div")
        klik.className = "klik"
console.log(klik);


       const lenklikanec = document.createElement("div")
             lenklikanec.className = "lenklikanec"
       const ikona = document.createElement("i")
             ikona.className = "bx bx-x kokol"

lenklikanec.append(ikona)

  let finall = [];
        


// const kontrola  = (e) => {
//   if (input) {

//     console.log("kokokokokmlml");
    
//     return null
//   }
//         if (klik.contains(e.target)) {


//                 owerlapinput.remove()
//        input.value = "";
//        console.log("anoononobvfhbvkdfvbfkdj");
       
// vysledky.innerHTML = `<span></span>`;
//  input.style.borderRadius = "22px"
//   lenklikanec?.remove();
//       vysledky.style.opacity = 0
//       input.focus()
// console.log(input);


//                 console.log("ankokokoko");  
//                 return
//         }
     
        
//                 owerlapinput.remove()
//                  document.body.classList.remove('no-scroll');
//         document.removeEventListener("click",kontrola)
// } 


const inputlogika = (e) => {
  const text = e.target.value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "");

  if (text.length === 0) {
    finall = [];
    lenklikanec?.remove();
    vysledky.innerHTML = ``;
      vysledky.style.opacity = 0
   
           input.style.borderRadius = "22px"
 
    return;
  }




  
  const results = Hladam.filter(item =>
    item.name.toLowerCase().includes(text)
  );

  finall = results;

  wraperko.append(lenklikanec);

  if (results.length === 0) { 
    vysledky.innerHTML = `<span class = "lpnhjvbhvbhu">nic</span>`;
    return;
  }

  const kkokoko = () => {
  input.value = ""; // vymaže input
  results.length = 0
  console.log(results);
   vysledky.innerHTML = ""
   input.focus()
         ikona.remove()

      vysledky.style.opacity = 0
};

  ikona.addEventListener("click" , kkokoko)
  vysledky.innerHTML = results
    .map(item => `<div class = "lpnhjvbhvbhu">
      <span class ="vvevev">${item.name}</span>
      <span class ="vve232vev">${item.country}</span>
      
      </div>`)
    .join("");
     vysledky.style.opacity = 1

};

// logika
        setTimeout(() => {input.focus()}, 0)

        klik.appendChild(wraperko)
        klik.appendChild(vysledky)

//  klik.appendChild(lenklikanec)
        owerlapinput.appendChild(klik)


const kontrloaaa = (e) => {
  if (e.target === e.currentTarget || e.target === klik) {
      owerlapinput.remove()


     document.body.classList.remove('no-scroll');


       
  }

 
}


        owerlapinput.addEventListener("click" , kontrloaaa)
        // document.addEventListener("click" , kontrola)
        input.addEventListener("input" , inputlogika)



        return owerlapinput
   
}