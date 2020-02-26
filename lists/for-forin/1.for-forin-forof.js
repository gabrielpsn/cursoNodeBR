const service = require('./services')

async function main () {
  try {
    const result = await service.obterPessoas('a')
    const names = []
    console.time('FOR')
    for(let i = 0; i <= result.results.length - 1; i++) {
      const pessoa = result.results[i]
      names.push(pessoa.name)
    }
    console.timeEnd('FOR')

    console.time('FORIN')
    for(let i in result.results) {
      const pessoa = result.results[i]
      names.push(pessoa.name)
    }
    console.timeEnd('FORIN')

    console.time('FOROF')
    for (pessoa of result.results) {
      names.push(pessoa.name)
    }
    console.timeEnd('FOROF')

    console.log('Names', names)
  } catch (e) {
    console.error('Error interno', e)
  }
}

main()
