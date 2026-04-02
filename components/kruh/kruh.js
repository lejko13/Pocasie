export const Kruh = ({ klik, ikona } = {}) => {
   

      const kruh = document.createElement("div")
            kruh.className = "kruh"
            if (klik) {
               kruh.addEventListener("click" , klik)
            }
            if (ikona) {
                kruh.append(ikona)
            }

      



    

    return kruh
}