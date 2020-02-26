const { obterPessoas } = require('./services')

async function main() {
  try {
    const { results } = await obterPessoas('a')
    const familiaLars = results.filter(function (item) {
      const result = item.name.toLowerCase().indexOf('lars') !== -1
      return result
    })
    const names = familiaLars.map((pessoa) => pessoa.name)
    console.log('Result', names)
  } catch (e) {
    console.error('Deu ruim ', e)
  }
}

main()
