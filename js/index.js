function hacerPregunta(preguntas) {
  const respuesta = prompt(preguntas)
  return respuesta
}

function verRespuesta(respuesta, respuestaCorrecta) {
  if (respuesta !== respuestaCorrecta) {
    return false
  }
  return true
}

const compatibilidad = [
  "I ____ on my way to work: was o were ",
  "____ she have to go to school today?: Do or Does",
  "What ___ your favorite movie?: is or are",
  "John is a director, ___ makes movies: he or she",
  "___ is your dream job?: What or Who",
  "I ____ to Canada this winter.: went or want",
  "What is your favorite thing to ___ on a weekend?: do or does",
]

const respuestasCorrectas = [
  "was",
  "Does",
  "is",
  "he",
  "What",
  "went",
  "do",
]

let todoCorrecto = true
for (let i = 0; i < compatibilidad.length; i++) {
  const preguntas = compatibilidad[i]
  const respuesta = hacerPregunta(preguntas)
  const esCorrecto = verRespuesta(respuesta, respuestasCorrectas[i])
  if (!esCorrecto) {
    todoCorrecto = false
    break
  }
}

if (todoCorrecto) {
  alert("100% You are a pro!")
} else {
  alert("¡Eso es incorrecto! Podés intentarlo nuevamente para obtener una puntuación más alta. Better luck next time!")
}
