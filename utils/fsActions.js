import fs from 'node:fs'

/**
 * Función para obtener todos los archivos de un tipo en una ruta.
 * @constructor
 * @param {string} dir - La ruta del directorio.
 * @param {string[]} extensions - La extension de los archivos.
 */
export const readFiles = async (dir, extensions) => {
  try {
    if (!dir) throw new Error('El directorio no está especificado.')
    if (!extensions || extensions.length === 0) throw new Error('No se han proporcionado extensiones.')
    const results = []
    await Promise.all(
      extensions.map(async (ext) => {
        const files = await fs.promises.readdir(dir)
        const filteredFiles = files.filter((file) => file.endsWith(ext))
        if (filteredFiles.length > 0) {
          results.push(...filteredFiles)
        }
      })
    )
    return results
  } catch (error) {
    console.error(error.message)
    return []
  }
}

/**
 * Función para crear una carpeta
 * @constructor
 * @param {string} fileName - El nombre de la carpeta.
 */
export const createFolder = async (fileName) => {
  try {
    if (!fileName) throw new Error('Establece correctamente los parámetros.')
    if (fs.existsSync(fileName)) console.log('Ya existe la carpeta')
    await fs.promises.mkdir(fileName)
  } catch (error) {
    console.error(error.message)
  }
}

/**
 * Función para mover archivos a una carpeta
 * @constructor
 * @param {string} olderPath - Origen de los archivos.
 * @param {array} files - Los archivos a mover.
 * @param {string} folder - La carpeta donde se moverán los archivos.
*/
export const movedFiles = async (olderPath, files, folder) => {
  try {
    if (!files || !folder) return console.log('Establece correctamente los parámetros.')
    files.forEach((file) => {
      const oldPath = `${olderPath}/${file}`
      fs.rename(oldPath, `${folder}/${file}`, (err) => {
        if (err) throw err
        console.log('Archivos Ordenados')
      })
    })
  } catch (error) {
    console.log(error)
  }
}
