/* import path from 'node:path' */
import readline from 'node:readline'
import { ordenDocs, ordenVideo, ordenImage, ordenPrograms, ordenSlides, ordenFonts } from './utils/orderByType.js'

console.log('Bienvenido a ORDENODE')
console.log('Pasa la ruta de la carpeta que deseas ordenar. Importante el programa no funciona en carpetas. \nPor motivos técnicos las carpetas creadas tendrán el nombre de Folder-byOrdeNode, puedes retirar el nombre a posterior')

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

reader.question('Introduce la ruta de la carpeta que deseas ordenar: ', (ruta) => {
  console.log(`Ruta seleccionada: ${ruta}`)

  reader.question('¿Deseas continuar con el ordenamiento? (S/N): ', (confirm) => {
    if (confirm.toLowerCase() === 's') {
      ordenDocs(ruta)
      ordenImage(ruta)
      ordenVideo(ruta)
      ordenFonts(ruta)
      ordenPrograms(ruta)
      ordenSlides(ruta)
      reader.close()
    } else {
      console.log('Ordenamiento cancelado.')
      reader.close()
    }
  })
})

/* const __dirname = path.resolve()
console.log(__dirname)

ordenDocs(__dirname)
ordenImage(__dirname)
ordenVideo(__dirname)
ordenFonts(__dirname)
ordenPrograms(__dirname)
ordenSlides(__dirname) */
