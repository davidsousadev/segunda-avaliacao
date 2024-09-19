// Import das noticias
// import { noticias } from "./banco_de_noticias.js";

var noticias = {};

// Fonte, titulo, link, data, imagem(url)
noticias[0] = ["G1","Novo vídeo mostra que Datena arremessa cadeira em Marçal e ameaça pegar outra", "https://g1.globo.com/sp/sao-paulo/eleicoes/2024/noticia/2024/09/16/cadeirada-de-datena-em-marcal-novas-imagens-de-agressao-sao-divulgadas.ghtml", "16/09/2024", "https://s2-g1.glbimg.com/1-j5Zgxa8jQn5xREuCGiHgsvg10=/133x45:556x278/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/A/l/OATWAQQYyYkliSBNNKvw/12927485-640x360.jpg"];
noticias[1] = ["Carta Capital","Quem são os deputados do PL denunciados pela PGR por corrupção no uso de emendas", "https://www.cartacapital.com.br/politica/quem-sao-os-deputados-do-pl-denunciados-pela-pgr-por-corrupcao-no-uso-de-emendas/", "17/09/2024", "https://www.cartacapital.com.br/wp-content/uploads/2023/03/seupaisartigo.jpg"];
noticias[2] = ["CNN Brasil","Francês acusado de dopar esposa para estupros confessa: “Sou um estuprador”", "https://www.cnnbrasil.com.br/internacional/frances-acusado-de-dopar-esposa-para-estupros-confessa-sou-um-estuprador/", "17/09/2024", "data:image/jpeg;base64,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"];

noticias[3] = ["180graus","Justiça condena empresa elétrica no Piauí por colocar trabalhadores em risco", "https://180graus.com/famosos/justica-condena-empresa-eletrica-no-piaui-por-colocar-trabalhadores-em-risco/", "17/09/2024", "http://storage.stwonline.com.br/180graus/media/image_bank/2024/9/1d2d1d_2536774636364222202.png"];

noticias[4] = ["Meio Norte","Adriano Imperador marca Flamengo x Inter de Milão; Veja data do amistoso", "https://www.meionews.com/esportes/adriano-imperador-marca-flamengo-x-inter-de-milao-veja-data-do-amistoso-508202", "17/09/2024", "https://www.meionews.com/uploads/imagens/2024/9/17/webp/adriano-imperador-marca-flamengo-x-inter-de-milao-veja-data-do-amistoso-7e501f19-756e-494b-adad-6b79fbb97296.jpg.webp"];

noticias[5] = ["InfoMoney","Acusado de assédio sexual, Datena apresenta queixa-crime contra Marçal", "https://www.infomoney.com.br/politica/acusado-de-assedio-sexual-datena-apresenta-queixa-crime-contra-marcal/", "17/09/2024", "https://www.infomoney.com.br/wp-content/uploads/2024/09/Datena-marcal-debate.jpg?w=1090&quality=70&strip=all"];

noticias[6] = ["OitoMeia","PRF prende homem em posse de 2,5 kg de maconha na zona rural Sul de Teresina", "https://www.oitomeia.com.br/colunas/zap-do-efrem/2024/09/17/prf-prende-homem-em-posse-de-25-kg-de-maconha-na-zona-rural-sul-de-teresina/", "17/09/2024", "https://www.oitomeia.com.br/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-17-at-17.21.25.jpeg"];

noticias[7] = ["GE","Análise: São Paulo cumpre missão ao segurar o Botafogo fora e ganha energia para decisão no Morumbis", "https://ge.globo.com/futebol/times/sao-paulo/noticia/2024/09/19/analise-sao-paulo-cumpre-missao-ao-segurar-o-botafogo-fora-e-ganha-energia-para-decisao-no-morumbis.ghtml", "19/09/2024", "https://s2-ge.glbimg.com/cb7n9BVJp5xEHeQaH7ORzE-lx8U=/0x0:2126x1601/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/e/1/nbnSevSKOMePmH6Bo1BQ/54005782390-d04b511335-o.jpg"];

var conteudo = document.getElementById("noticias");
var destaques = document.getElementById("destaques");
var publicidade = document.getElementById("publicidade");
var galeria = document.getElementById("galeria");
var contatos = document.getElementById("contatos");

var pagina_contatos = document.getElementById("pagina_contatos");
var pagina_galeria = document.getElementById("pagina_galeria");
var pagina_principal = document.getElementById("pagina_principal");




// API Clima
var clima = document.getElementById("clima");
const url = 'https://api-restful-express.vercel.app/clima';
function busca() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta da API');
            }
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                console.log('Erro ao buscar as clima.');
                return;
            }
            alimentarBlog(data);
        })
        .catch(error => {
            console.error('Erro ao buscar cliam:', error);
            console.log('Erro ao buscar as clima.');
        });
}
function alimentarBlog(data) {
    
    if (data) {
            clima.innerHTML = `<h2>${data.name}<br />${data.main["temp"]} °C</h2>
            ${data.main["temp_min"]}°C Min
            ${data.main["temp_max"]}°C Max <br />
            ${data.weather[0]["description"]}
            `;
    } else {
        clima.innerHTML = "";
        console.log('Nenhuma cidade encontrada.');
    }
}
busca();


// Paginas

function mostrarpaginacontatos(){
    conteudo.style.display = "none";
    destaques.style.display = "none";
    publicidade.style.display = "none";
    galeria.style.display = "none";
    contatos.style.display = "block";
}

function mostrarpaginagaleria(){
    conteudo.style.display = "none";
    destaques.style.display = "none";
    publicidade.style.display = "none";
    contatos.style.display = "none";
    galeria.style.display = "block";
}

function mostrarpaginaprincipal(){
    conteudo.style.display = "block";
    destaques.style.display = "block";
    publicidade.style.display = "block";
    galeria.style.display = "none";
    contatos.style.display = "none";
}

pagina_contatos.addEventListener("click", mostrarpaginacontatos);
pagina_galeria.addEventListener("click", mostrarpaginagaleria);
pagina_principal.addEventListener("click", mostrarpaginaprincipal);

// Noticias

function injetar_noticias(noticias, i){
    return `<article><p><span>`+noticias[i][0]+`-<a href="`+noticias[i][2]+`" target="_blank" class="titulo">`+noticias[i][1]+`</a> </span><br /> <span class="data"> Data: `+noticias[i][3]+`</span> </p> <img src="`+noticias[i][4]+`" alt="Imagem indisponivel!"> </img> </article>`;
}


function mostrar_noticias(noticias, quantidade, ultimas){
    var lista_noticias = "";
    if (ultimas===true){
        for (var i = Object.keys(noticias).length - 1; i > (Object.keys(noticias).length - 1 ) - quantidade; i--) {
            lista_noticias += injetar_noticias(noticias, i);
        };
    }
    else{
        for (var i = 0; i < quantidade; i++) {
            lista_noticias += injetar_noticias(noticias, i);
        };
    }

return lista_noticias;
}

conteudo.innerHTML += mostrar_noticias(noticias, 6, false);
destaques.innerHTML += mostrar_noticias(noticias, 7, true);

// Mudar o tamanho texto da página

var botaoAumentarTamanhoTexto = document.getElementById("aumentarTamanhoTexto");
var botaoDiminuirTamanhoTexto = document.getElementById("diminuirTamanhoTexto");
var tamanho = 16;

function aumentarTamanhoTexto() {
    if (tamanho<26){
    tamanho += 2;
    document.body.style.fontSize = tamanho + "px";
    }
}
function diminuirTamanhoTexto() {
    if (tamanho>16){
        tamanho -= 2;
        document.body.style.fontSize = tamanho + "px"; 
}
}
botaoAumentarTamanhoTexto.addEventListener("click", aumentarTamanhoTexto);
botaoDiminuirTamanhoTexto.addEventListener("click", diminuirTamanhoTexto);

// Mudar Cor

var botao = document.getElementById("mudarCor");
function mudarCor() {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        conteudo.style.backgroundColor = 'white';
        destaques.style.backgroundColor = 'white';
        publicidade.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        botao.innerHTML = "Dark";
    }
    else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        conteudo.style.backgroundColor = 'black';
        destaques.style.backgroundColor = 'black';
        publicidade.style.backgroundColor = 'black';
        botao.innerHTML = "Ligth";
    }
}
botao.addEventListener("click", mudarCor);

// Galeria

for (var i = 0; i < Object.keys(noticias).length-1; i++) {
    galeria.innerHTML += `<a href="`+noticias[i][4]+`" target="_black"><img src="`+noticias[i][4]+`" alt="Imagem indisponivel!"> </img></a>`;
}
