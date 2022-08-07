const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErro(erro){
    throw new Error(erro)
}

async function checaStatus(arrayURLs) {
   try{
    const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url =>{
                const res = await fetch(url)
                 return res.status
   })) 
   return arrayStatus;
   } catch(erro){
    manejaErro(erro);
   }
}

function geraArrayDeURLs(arraysLinks){
    return arraysLinks
        .map(objetoLink => Object
            .values(objetoLink).join())
}

async function validaURLs(arrayLinks){
   const links = geraArrayDeURLs(arrayLinks);
   const statusLinks = await checaStatus(links);

   const resultado = arrayLinks.map((objeto, indice) => ( { 
    ...objeto, 
    status : statusLinks[indice]
    }))
    return resultado;
}

module.exports = validaURLs;