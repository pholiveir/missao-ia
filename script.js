const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "ja pensou em ser pecuarista?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "afirmação"
            },
            {
                texto: "Ainda não!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual melhor boida pra engorda?",
        alternativas: [
            {
                texto: "nelore.",
                afirmacao: "afirmação"
            },
            {
                texto: "berdim.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual a melhor vaca de leite?",
        alternativas: [
            {
                texto: "Holandês.",
                afirmacao: "afirmação"
            },
            {
                texto: "Jersey.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual o melhor animal pra lida?",
        alternativas: [
            {
                texto: "equinos.",
                afirmacao: "afirmação"
            },
            {
                texto: "muares.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual melhor pasto para o gado de corte? ",
        alternativas: [
            {
                texto: "Coloniões.",
                afirmacao: "afirmação"
            },
            {
                texto: "mato grosso.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();
