export const KelvinToCelsius = (kelvin) => {

    const final = kelvin - 273.15;
    const konec = Math.round(final*10) / 10
  return konec
};