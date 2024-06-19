<script src="script.js"></script>
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        texto: "com a seca muitas plantaçao nao vingaram e os produtores podem ter um prejuizo muito grande, oque fazer ?",
        afirmação: [
            "esperar a chegada de uma chuva"
            "passar veneno pra secar e fazer silo"
        ]
    },
    {
          texto: "vc chega na plantação e nota uma praga, oque fazer para solucionar esse problema da melhor forma ?",
          afirmação: [
            "chamar um agronomo para analisar a praga ",
            "ou tentar resolver sozinho "
        ]
    },
    {
      texto: "Qual é o principal objetivo da rotação de culturas na agronomia?"
    ",
          afirmação: [
            "A rotação de culturas ajuda a melhorar a saúde do solo, aumentar a biodiversidade e reduzir a incidência de pragas e doenças"
            "A rotação de culturas serve apenas para aumentar o custo de produção, sem trazer benefícios significativos para a produtividade agrícola"
        ]
    },
    {
          texto: "Qual é o principal objetivo da adubação nitrogenada na agricultura?"
          afirmação: [
            "A adubação nitrogenada é utilizada para fornecer nitrogênio às plantas, promovendo um crescimento saudável e aumentando a produtividade das culturas"
            " A adubação nitrogenada é usada para eliminar pragas do solo, como nematoides, melhorando a saúde das plantas de maneira indireta"
        ]
    },
    {
          texto: "Qual é a principal função da aração do solo na agricultura?"
          afirmação: [
            "A aração do solo ajuda a controlar ervas daninhas, promove a aeração e a descompactação do solo, facilitando o crescimento das raízes das plantas"
            "A aração do solo é realizada para aumentar a acidez do solo, tornando-o mais propício para o cultivo de plantas acidófilas como mirtilos e azáleas"
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", function(){
                atual++;
                mostraPergunta();
            })
            caixaAlternativas.appendChild(botaoAlternativas);
    }
}
