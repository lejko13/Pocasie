export const Zobrazenie  = ({najdene,text,druhytext,kolko} = {}) => {
   const zobrazenie = document.createElement("div")
        zobrazenie.className = "zobrazenie"

    const ikona3 = document.createElement("i")
        ikona3.className = "bx bx-map"
    
    zobrazenie.innerHTML = `
    <div class = "lavastranalen">

    
   <img class = "ikonamalaokninko" src="${najdene}" />
    </div>
    <div class = "pravastranalen">
    <span class = "lllplplpl">${text}</span>
    <span class = "lllplplpl2">${druhytext}${kolko}</span>
    </div>
    `


    return  zobrazenie
}
