const path = require('path')
const fs = require('fs')
const sharp = require('sharp')
const mmm = require('mmmagic')

const Magic = mmm.Magic

const galleryDir = path.join('.', 'public', 'images', 'gallery')
const categoryList = fs.readdirSync(galleryDir).filter(fileName => fs.lstatSync(path.join(galleryDir, fileName)).isDirectory())
categoryList.forEach(categoryName => {
  const categoryDir = path.join(galleryDir, categoryName)
  const thumbDir = path.join(galleryDir, categoryName, 'thumbs')
  if(!fs.existsSync(thumbDir)) fs.mkdirSync(thumbDir)
  const categoryFilesList = fs.readdirSync(categoryDir).filter(fileName => !fs.lstatSync(path.join(categoryDir, fileName)).isDirectory())
  categoryFilesList.forEach(async (file) => {
    const fileDir = path.join(categoryDir, file)
    const magic = new Magic(mmm.MAGIC_MIME_TYPE)
    magic.detectFile(fileDir, async (err, result) => {
      if(err) throw err
      else {
        if(result.split('/')[0] === 'image') {
          // resize and save image
          const metaData = await sharp(fileDir).metadata()
          const minSize = 360
          const [nowWidth, nowHeight] = [metaData.width, metaData.height]
          const [resizeWidth, resizeHeight] = nowWidth < nowHeight ? [nowWidth * minSize/nowHeight, minSize] : [minSize, nowHeight * minSize/nowWidth]
          const [smallWidth, smallHeight] = [Math.floor(resizeWidth), Math.floor(resizeHeight)]
          try {
            const newFileDir = path.join(
              thumbDir,
              file
            )
            await sharp(fileDir).resize(smallWidth, smallHeight).toFile(newFileDir)
          } catch (e) {
            console.log(e)
          }
        }
      }
    })
  })
})
