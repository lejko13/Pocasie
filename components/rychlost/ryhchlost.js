export const mpsToKmh = (speed) => {
  const finalna = speed * 3.6;
  console.log(finalna);
  
  const konecna = Math.round(finalna * 10) / 10;
  return konecna;
};