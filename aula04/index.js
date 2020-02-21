// Obter usuario
// Preciso obter o numero de telefone de um usuario aparti de seu id
// Obter endereço
// import module interno do node js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  return new Promise(function resolverUsuario(resolve, reject) {
    setTimeout(function () {
      return resolve({
        id: 1,
        nome: "Alladim",
        dataNascimento: new Date()
      })
    }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolverPromisse(resolve, reject) {
    setTimeout(function () {
      return resolve({
        telefone: '81997758849',
        ddd: 81
      })
    }, 2000)
  })
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
      numero: 0
    })
  }, 2000)
}

main()

async function main() {
  try {
    console.time('INICIO')

    const usuario = await obterUsuario()
    // const endereco = await obterTelefone(usuario.id)
    // const telefone = await obterEnderecoAsync(usuario.id)

    const resultado = await Promise.all([
       obterTelefone(usuario.id),
       obterEnderecoAsync(usuario.id)
    ])

    const endereco = resultado[1]
    const telefone = resultado[0]

    console.log(
    `
     nome: ${usuario.nome},
     telefone: ${telefone.ddd} - ${telefone.telefone},
     endereco: ${endereco.rua}, ${endereco.numero}`
    )

    console.timeEnd('FIM')

  } catch (e) {
    console.error('DEU RUIM', e)
  }
}
