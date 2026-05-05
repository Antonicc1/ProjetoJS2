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

// DOM (DOCUMENT OBJECT MODEL)
const titulo = document.getElementById("titulo")
titulo.innerText = "O DOM mudou o texto";
titulo.style.color = "blue";

// Criando o App
// Primeira coisa sempre pra tudo: banco de dados
// Rede de objetos:
const produtos =[
    {nome:"Teclado Mecânico",preco:300,emPromocao:true},
    {nome:"Mouse Gamer",preco:150,emPromocao:false},
    {nome:"Monitor Gamer",preco:1300,emPromocao:true},
    {nome:"Mousepad XL",preco:400,emPromocao:false},
];

const container = document.getElementById("listar-produtos");
const mostrarTotal = document.getElementById("resultado-total");

// Map: transforma o array de objetos em um array de strings html e css
function todosProdutos(lista){
    mostrarTotal.innerText=""; // passa o texto pro html
    const htmlProdutos = lista.map(item =>`
        <div class="card">
            <h3>${item.nome}</h3>
            <p>Preço: R$ ${item.preco}</p>
            ${item.emPromocao ? '<span class="tag">Promoção</span>':''}
        </div>
        `).join(''); // transforma o arrau em uma unica string

        container.innerHTML = htmlProdutos;
}

// filter: cria uma nova lista apenas com o que escolheu (promoção)
function filtrarPromocoes() {
    const promocionais = produtos.filter(item => item.emPromocao);
    todosProdutos(promocionais);
}

// Reduce: reduz o array á um unico valor (soma dos preços)
function calcularTotal() {
    const total = produtos.reduce((acumulador,item)=>{
        return acumulador + item.preco;
    },0);
    mostrarTotal.innerText = `Valor Total R$ ${total}`;
}