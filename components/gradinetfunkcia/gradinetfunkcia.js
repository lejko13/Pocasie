import { gradienteee,SetGradient } from '../farba/farba.js'

export const Gradinetfunkcia = () => {




const now = new Date();

const hodiny = now.getHours();
const minuty = now.getMinutes();

const totalMinutes = hodiny * 60 + minuty;



if (totalMinutes >= 1020 || totalMinutes <= 330) {
  SetGradient({
    colors: [
      { color: "var(--modraCierna1)", stop: 3 },
      { color: "var(--modraCierna2)", stop: 33 },
      { color: "var(--farba-cierna)", stop: 89 }
    ]
  });

document.documentElement.style.setProperty("--skusam" , "black")



}


console.log(gradienteee);


  const mapujefarba = gradienteee.colors
    .map((i) => `${i.color} ${i.stop}%`)
    .join(", ");
console.log("anokokokokok");


  return `linear-gradient(${gradienteee.angle}deg, ${mapujefarba})`;
}

