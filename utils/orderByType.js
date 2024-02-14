import { readFiles, createFolder, movedFiles } from './fsActions.js'
import path from 'node:path'

import fs from 'node:fs'

const fileTypes = JSON.parse(fs.readFileSync('./utils/fileTypes.json'))

/**
 * @name organize
 * @constructor
 * @param {string} dirname - La ruta del directorio.
 * @param {string} extraName - El nombre adicional de la carpeta.
*/
export const organize = async (dirname, extraName) => {
  fileTypes.forEach(async (type) => {
    const files = await readFiles(dirname, type.extensions)
    try {
      if (files.length === 0) return console.log('')
      const folderName = `${type.name}-${extraName}`
      const folderPath = path.join(dirname, folderName)
      await createFolder(folderPath)
      await movedFiles(dirname, files, folderPath)
    } catch (error) {
      console.error(error.message)
      return []
    }
  }
  )
}
