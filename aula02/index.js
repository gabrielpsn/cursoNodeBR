// Obter usuario
// Preciso obter o numero de telefone de um usuario aparti de seu id
// Obter endereço

function obterUsuario(callback) {
  setTimeout(function () {
    return callback( null, {
      id: 1,
      nome: "Alladim",
      dataNascimento: new Date()
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(function () {
    return callback(null, {
      telefone: '81997758849',
      ddd: 81
    })
  }, 2000)
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
      numero: 0
    })
  }, 2000)
}

obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error("Deu ruim em usuario!", error)
    return
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error("Deu ruim em Telefone!", error1)
      return
    }

    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.error("Deu ruim em endereço!", error2)
        return
      }
      console.log(`
      usuario: ${usuario.nome},
      endereço: ${endereco.rua},
      telefone: ${telefone.telefone}`
      )
    })
  })
})
