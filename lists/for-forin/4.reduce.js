const { obterPessoas } = require('./services')

async function main() {
  try {
    const { results } = await obterPessoas('a')
    const pesos = results.map(item => parseInt(item.height))
    const total = pesos.reduce((anterior, proximo) => {
      return anterior + proximo
    })
    console.log(`Total ${total} `)
  } catch (e) {
    console.error("deu ruim ", e)
  }
}

main()
