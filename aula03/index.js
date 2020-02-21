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

const usuarioPromisse = obterUsuario()

usuarioPromisse
  .then(function (usuario) {
    return obterTelefone(usuario.id)
      .then(function resolverTelefone(result) {
        return {
          usuario: {
            nome: usuario.nome,
            id: usuario.id
          },
          telefone: result
        }
      })
  })
  .then(function(resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id)
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result
      }
    })
  })
  .then(function (resultado) {
  console.log('Resultado', resultado)
}).catch(function (error) {
  console.error('deu ruim mano')
})
