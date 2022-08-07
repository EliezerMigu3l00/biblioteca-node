#!/usr/bin/env node

const validaURLs = require('./http-validacao')
const pegaArquivo = require('./index');

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if(caminho[3] === 'validar'){
        console.log('Links validados', await validaURLs(resultado))
    } else {
       console.log('Lista de links', resultado); 
    } 
}

processaTexto(caminho);