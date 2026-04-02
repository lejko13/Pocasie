export const rozdelDatum = (dt) =>  {
  const d = new Date(dt * 1000);

  const mesiace = [
  { id: 1, nazov: "január", skratka: "Jan" },
  { id: 2, nazov: "február", skratka: "Feb" },
  { id: 3, nazov: "marec", skratka: "Mar" },
  { id: 4, nazov: "apríl", skratka: "Apr" },
  { id: 5, nazov: "máj", skratka: "May" },
  { id: 6, nazov: "jún", skratka: "Jun" },
  { id: 7, nazov: "júl", skratka: "Jul" },
  { id: 8, nazov: "august", skratka: "Aug" },
  { id: 9, nazov: "september", skratka: "Sep" },
  { id: 10, nazov: "október", skratka: "Oct" },
  { id: 11, nazov: "november", skratka: "Nov" },
  { id: 12, nazov: "december", skratka: "Dec" }
];

const rok = d.getFullYear()
const mesiac = mesiace.find(item => item.id ===  d.getMonth() + 1)
const den = d.getDate()

  return {
    rok: rok,
    mesiac:mesiac.skratka, // mesiace sú od 0
    den:den,
  };
}