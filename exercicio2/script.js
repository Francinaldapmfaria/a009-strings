const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const minhaString1 = minhaString.trim()
console.log(minhaString1)

console.log(`${minhaString.length}
${minhaString1.length}`)


let frase = "Eu não sou supersticioso, mas sou um pouco ________."
let frasenova = frase.replaceAll("________","sticioso")
console.log(frasenova)