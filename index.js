const perguntas = [
  {
    pergunta: "Quem é o protagonista principal do filme 'Meu Malvado Favorito'?",
    respostas: [
      "Dr. Nefario",
      "Gru",
      "Vector",
    ],
    correta: 1
  },
  {
    pergunta: "Quantas filhas Gru adota ao longo do filme?",
    respostas: [
      "1",
      "2",
      "3",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome das criaturas amarelas que Gru usa para ajudá-lo em seus planos?",
    respostas: [
      "Minions",
      "Gremlins",
      "Oompa Loompas",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a profissão original de Gru antes de se tornar um pai adotivo?",
    respostas: [
      "Vilão",
      "Cientista",
      "Dançarino",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome da série de brinquedos que Gru tenta roubar?",
    respostas: [
      "Mr. Potato Head",
      "My Little Pony",
      "Furby",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o principal concorrente de Gru na busca pela Lua?",
    respostas: [
      "Dr. Nefario",
      "Vector",
      "El Macho",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do cachorro adotivo de Gru?",
    respostas: [
      "Max",
      "Duke",
      "Kyle",
    ],
    correta: 2
  },
  {
    pergunta: "O que as meninas de Gru vendem para arrecadar dinheiro para o fundo da Lua?",
    respostas: [
      "Cookies",
      "Bolos",
      "Cupcakes",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do evento em que Gru e seus filhos dançam no final do primeiro filme?",
    respostas: [
      "Festa da Lua",
      "Baile de Gala",
      "Recital de Dança",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o vilão do segundo filme 'Meu Malvado Favorito 2'?",
    respostas: [
      "Balthazar Bratt",
      "El Macho",
      "Scarlet Overkill",
    ],
    correta: 0
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (Event) => {
      const estaCorreta = Event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }


    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}