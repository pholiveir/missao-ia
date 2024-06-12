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
          texto: "?",
          afirmação: [
            "",
            ""
        ]
    },
    {
      texto: "? "
    ",
          afirmação: [
            "",
            ""
        ]
    },
    {
          texto: "?",
          afirmação: [
            "",
            ""
        ]
    },
    {
          texto: "?",
          afirmação: [
            "",
            ""
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
