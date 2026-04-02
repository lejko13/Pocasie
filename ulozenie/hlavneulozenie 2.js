import {Hladam} from '../data/data.js'
export const informacie = {

  dodatok:"Aktualne",


  nazov: Hladam[0].name,
  krajina: "",
  rok: "",
  datum: "",
  mesiac: "",
  lat:Hladam[0].lat,
  lon:Hladam[0].lon,
  stupe:"24",
  pocit:"5",
  max:"15",
  min:"13",
  popisakoje:"sunny",
  podlatohourcujes:"",

  vlhkost:"4",
  vietor:"5",
  hodiny:""
};


// console.log(Hladam);

export const Setinformacie = (newData) => {
  Object.assign(informacie, newData);
};