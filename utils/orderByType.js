import { readFiles, createFolder, movedFiles } from './fsActions.js'
import path from 'node:path'

/*
 * @name ordenDocs
 * @constructor
 * @param {string} dirname - La ruta del directorio.
*/
export const ordenDocs = async (dirname) => {
  const docsExtension = ['.docx', '.pdf', '.txt', '.doc']
  const files = await readFiles(dirname, docsExtension)
  try {
    if (files.length === 0) return console.log('')
    const folderPath = path.join(dirname, 'Documentos-byOrdeNode')
    const response = await createFolder(folderPath)
    if (response === 'Ya existe') return console.log('Carpeta ya existente')
    await movedFiles(dirname, files, folderPath)
  } catch (error) {
    console.error(error.message)
    return []
  }
}

/*
 * @name ordenImage
 * @constructor
 * @param {string} dirname - La ruta del directorio.
*/
export const ordenImage = async (dirname) => {
  const imgsExtension = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif']
  const files = await readFiles(dirname, imgsExtension)
  try {
    if (files.length === 0) return console.log('')
    const folderPath = path.join(dirname, 'Imágenes-byOrdeNode')
    const response = await createFolder(folderPath)
    if (response === 'Ya existe') return console.log('Carpeta ya existente')
    await movedFiles(dirname, files, folderPath)
  } catch (error) {
    console.error(error.message)
    return []
  }
}

/*
 * @name ordenVideos
 * @constructor
 * @param {string} dirname - La ruta del directorio.
*/
export const ordenVideo = async (dirname) => {
  const mediaExtension = ['.mp3', '.mp4', '.mov', '.avi', '.flv', '.wmv', '.mkv', '.webm', '.m4v', '.mpeg', '.m4a']
  const files = await readFiles(dirname, mediaExtension)
  try {
    if (files.length === 0) return console.log('')
    const folderPath = path.join(dirname, 'Videos-byOrdeNode')
    const response = await createFolder(folderPath)
    if (response === 'Ya existe') return console.log('Carpeta ya existente')
    await movedFiles(dirname, files, folderPath)
  } catch (error) {
    console.error(error.message)
    return []
  }
}

/*
 * @name ordenPrograms
 * @constructor
 * @param {string} dirname - La ruta del directorio.
*/
export const ordenPrograms = async (dirname) => {
  const programsExtension = ['.exe', '.msi', '.pkg', '.deb', '.dmg', '.iso', '.apk', '.app', '.jar', '.war', '.zip', '.rar', '.7z', '.tar', '.gz', '.bz2', '.xz', '.zst', '.lz4', '.appinstaller']
  const files = await readFiles(dirname, programsExtension)
  try {
    if (files.length === 0) return console.log('')
    const folderPath = path.join(dirname, 'Programas-byOrdeNode')
    const response = await createFolder(folderPath)
    if (response === 'Ya existe') return console.log('Carpeta ya existente')
    await movedFiles(dirname, files, folderPath)
  } catch (error) {
    console.error(error.message)
    return []
  }
}

/*
 * @name ordenFonts
 * @constructor
 * @param {string} dirname - La ruta del directorio.
*/
export const ordenFonts = async (dirname) => {
  const fontsExtension = ['.ttf', '.otf', '.woff', '.woff2', '.eot', '.sfnt', '.svg', '.ttc', '.fnt', '.fon', '.otc', '.bdf', '.psf', '.pfa', '.pfb', '.pfr', '.pfs', '.pfv']
  const files = await readFiles(dirname, fontsExtension)
  try {
    if (files.length === 0) return console.log('')
    const folderPath = path.join(dirname, 'Fuentes-byOrdeNode')
    const response = await createFolder(folderPath)
    if (response === 'Ya existe') return console.log('Carpeta ya existente')
    await movedFiles(dirname, files, folderPath)
  } catch (error) {
    console.error(error.message)
    return []
  }
}

/*
 * @name ordenSlides
 * @constructor
 * @param {string} dirname - La ruta del directorio.
*/
export const ordenSlides = async (dirname) => {
  const slidesExtension = ['.pptx', '.ppt', '.potx', '.pot', '.ppsx', '.pps', '.pptm', '.pptm', '.odp', '.ods', '.odt', '.key']
  const files = await readFiles(dirname, slidesExtension)
  try {
    if (files.length === 0) return console.log('')
    const folderPath = path.join(dirname, 'Diapositivas-byOrdeNode')
    const response = await createFolder(folderPath)
    if (response === 'Ya existe') return console.log('Carpeta ya existente')
    await movedFiles(dirname, files, folderPath)
  } catch (error) {
    console.error(error.message)
    return []
  }
}
