// exemplo utilizando o modulo nativo nativo do node - URL

// importa o modulo url
const url = require('url')

// importa o url do site
let site = 'https://www.amazon.com.br/Notebook-Gamer-G15-i1000-D20P-Gera%C3%A7%C3%A3o-NVIDIA/dp/B0B5S5RML3/ref=asc_df_B0B5S5RML3/?tag=googleshopp00-20&linkCode=df0&hvadid=379817941610&hvpos=&hvnetw=g&hvrand=17966210595115516603&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100551&hvtargid=pla-1719494849019&th=1'

let partUrl = new url.URL(site)

// exibe o dominio
console.log('Dominio:', partUrl.host)

console.log('Caminho ou rota', partUrl.pathname)

console.log('Query String:', partUrl.search)

console.log('Parâmetros:', partUrl.searchParams)

console.log('Parâmetros tag da url:', partUrl.searchParams.get('tag'))