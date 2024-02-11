/* import path from 'node:path' */
import readline from 'node:readline/promises'
import { organize } from './utils/orderByType.js'

console.log('Bienvenido a ORDENODE')
console.log('Pasa la ruta de la carpeta que deseas ordenar. Importante el programa no funciona en carpetas. \nPor motivos técnicos las carpetas creadas tendrán el nombre de Folder-nombreextra, puedes retirar el nombre a posterior')

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const questions = async () => {
  const path = await reader.question('Introduce la ruta de la carpeta que deseas ordenar: ')
  const extraName = await reader.question('Introduce la terminación de la carpeta: ')
  console.log(`Ruta seleccionada: ${path} \nTerminación de la carpeta: ${extraName} \nVista previa de carpeta: Documentos-${extraName}`)
  const confirm = await reader.question('¿Deseas continuar con el ordenamiento? (S/N): ')
  if (confirm.toLowerCase() === 's') {
    organize(path, extraName)
    reader.close()
  } else {
    console.log('Ordenamiento cancelado.')
    reader.close()
  }
}

questions()

/* reader.question('Introduce la ruta de la carpeta que deseas ordenar: ', async (ruta) => {
  const extraName = await reader.question('Introduce la terminación de la carpeta')
  console.log(`Ruta seleccionada: ${ruta} \nTerminación de la carpeta: ${extraName} \nVista previa de carpeta: Documentos-${extraName}`)
  reader.question('¿Deseas continuar con el ordenamiento? (S/N): ', (confirm) => {
    if (confirm.toLowerCase() === 's') {
      organize(ruta)
      reader.close()
    } else {
      console.log('Ordenamiento cancelado.')
      reader.close()
    }
  })
})
 */
/* const __dirname = path.resolve()
console.log(__dirname)

ordenDocs(__dirname)
ordenImage(__dirname)
ordenVideo(__dirname)
ordenFonts(__dirname)
ordenPrograms(__dirname)
ordenSlides(__dirname) */
