// LIMPEZA E VALIDAÇÃO

const email="    email@email.com    ";
// Trim remove os espaços do inicio e do fim
const emaillimpo= email.trim(); 
console.log(emaillimpo)     

// VALIDAÇÃO

if(emaillimpo.includes("@")) {
    console.log("Email válido")
}
else {
    console.log("Email inválido")
}

// TRANSFORMAÇÃO DE TEXTOS

const tituloArtigo="Como aprender Java RAIZ";

// metodo upper(maiusculo) e low(minusculo)
const texto1 = tituloArtigo.toLowerCase(); 
console.log(texto1)

// split - transforma o texto em array
const texto2 = tituloArtigo.split(" ");
console.log(texto2)

// join - junta tudo em uma unica string
const texto3 = texto2.join("-");
console.log(texto3)

// Metodo toFixed
const precoProduto = 199.99;
const desconto = 0.15; // 15%
const precoFinal = precoProduto * (1-desconto);
console.log(precoFinal)
// `` - template strings - concatenação
console.log(`R$ ${precoFinal.toFixed(2)}`);


