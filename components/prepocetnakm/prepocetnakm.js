
// import {stupne} from '../../components/zmenakelvinunas/zemnakelvinu'
// export const KelvinToCelsius = (kelvin) => {

//     const final = kelvin - 273.15;
    
//     const konec = Math.round(final*10) / stupne.celza


//   return konec
// };

import {informacie,Setinformacie} from '../../ulozenie/hlavneulozenie'

import { stupne } from '../../components/zmenakelvinunas/zemnakelvinu';

export const KelvinToCelsius = (kelvin) => {

    const final = kelvin - 273.15;
    let konec;

    if (informacie.render === 0) {
        konec = Math.round(final * 10) / 10;
        
    } else {
        konec = Math.round((final * 9/5 + 32) * 10) / 10;
    }

    return konec;
};