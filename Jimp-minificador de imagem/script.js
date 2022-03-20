var Jimp = require('jimp');

const fs = require('fs');

const teste = fs.readdirSync('./img');
console.log(teste)

teste.forEach(item => {
  Jimp.read('img/' + item).then((image) => {
    image.cover(400, 400)
      .write('otmizadas/' + item)
  })
})