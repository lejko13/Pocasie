export const Stupneikona = () => {

    const ikonahakvna = document.createElement("div")
    ikonahakvna.className = "ikonahakvna"

ikonahakvna.textContent = "°C"


const zmena = () => {
    console.log("Kokoko");
    
}
ikonahakvna.addEventListener('click' , zmena)


    return ikonahakvna
}