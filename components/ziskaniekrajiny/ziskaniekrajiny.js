export const  Ziskaniekrajiny = (code) => {
  const regionNames = new Intl.DisplayNames(['sk'], { type: 'region' })
  return regionNames.of(code)
}
