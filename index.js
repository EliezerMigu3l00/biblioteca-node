const fs = require('fs');
const { encode } = require('punycode');

function trataErro(erro){
    throw new Error(erro.code, 'Arquivo não encontrado ou vocë esta acessando um repositorio! Verifique os dados e tente novamente!');

}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(texto)
    } catch(erro) {
        trataErro(erro);
    }
}

/*function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(texto))
    .catch((erro) => trataErro(erro))
}*/

/*function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro)
        }
        console.log(texto);
    })
}*/

pegaArquivo('./arquivos/texto1.md');

