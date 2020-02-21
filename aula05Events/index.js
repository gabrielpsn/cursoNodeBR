const EventEmmiter = require('events')
class MeuEmissor extends EventEmmiter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function() {
  console.log('Um usuario clicou', click)
})
//
// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'no ok')
//
// setInterval(function () {
//   meuEmissor.emit(nomeEvento, 'no ok' + (count++))
// }, 1000)
const stdin = process.openStdin()

function main() {
  return new Promise(function(resolve, reject) {
    return stdin.addListener('data', function (value) {
      // console.log(`Voce digitou: ${value.toString().trim()}`)
      return resolve(value)
    })
  })
}

main().then(function (resultado) {
  console.log('Resultado', resultado.toString())
})


