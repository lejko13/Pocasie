
export const gradienteee = {
  angle: 0,
  colors: [
    { color: "var(--farba-biela)", stop: 3 },
    { color: "var(--modraSvetla)", stop: 40 },
    { color: "var(--modraTmava)", stop: 89 }
  ]
}
export const SetGradient = (props) => {

    Object.assign(gradienteee,props)
}


