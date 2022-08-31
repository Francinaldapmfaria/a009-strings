const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString.trim())

console.log(minhaString.length)
console.log(minhaString.trim().length)

let frase = "Eu não sou supersticioso, mas sou um pouco ________."
let frasenova = frase.replaceAll("________","sticioso")
console.log(frasenova)