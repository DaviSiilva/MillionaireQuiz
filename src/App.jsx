import {useMemo, useEffect, useState } from "react";
import Timer from "./conponents/Timer";
import Trivia from "./conponents/Trivia";
import Start from "./conponents/Start";
import "./app.css";


function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("R$ 0");

  const data = [
    {
      id: 1,
      question: "O que significa a sigla CPU?",
      answers: [
        {
          
          text: "Central Performance Unit",
          correct: false
          ,
        },
        {
          
          text: "Computer Process Unit",
          correct: false
          ,
        },
        {
          
          text: "Central Processing Unit",

          correct: true
          ,
        },
        {
          
          text: "Central Programming Unitetic",
          correct: false
          ,
        },
      ],
    },
    {
      id: 2,
      question: "Qual dessas linguagens é mais usada para desenvolvimento web front-end?",
      answers: [
        {
          
          text: "JavaScript",
          correct: true
          ,
        },
        {
          
          text: "Python",
          correct: false
          ,
        },
        {
          
          text: "Java",
          correct: false
          ,
        },
        {
          
          text: "C++",
          correct: false
          ,
        },
      ],
    },
    {
      id: 3,
      question: "O que é um banco de dados relacional?",
      answers: [
        {
          
          text: "Um banco que armazena dados em documentos.",
          correct: false
          ,
        },
        {
          
          text: "Um banco que usa apenas linguagens procedurais.",
          correct: false
          ,
        },
        {
          
          text: "Um banco que armazena dados em formato de chave-valor.",
          correct: false
          ,
        },
        {
          
          text: "Um banco que organiza dados em tabelas com relacionamentos entre si.",
          correct: true
          ,
        },
      ],
    },
    {
      id: 4,
      question: "Qual é o objetivo principal do firewall em redes de computadores?",
      answers: [
        {
          
          text: "Aumentar a velocidade da conexão.",
          correct: false
          ,
        },
        {
          
          text: "Melhorar a qualidade do sinal Wi-Fi.",
          correct: false
          ,
        },
        {
          
          text: "Proteger a rede contra acessos não autorizados.",
          correct: true
          ,
        },
        {
          
          text: "Gerenciar endereços IP.",
          correct: false
          ,
        },
      ],
    },
    {
      id: 5,
      question: "Qual é a principal função de um servidor DNS?",
      answers: [
        {
          
          text: "Traduzir nomes de domínio em endereços IP.",
          correct: true
          ,
        },
        {
          
          text: "Gerenciar senhas de usuários.",
          correct: false
          ,
        },
        {
          
          text: "Monitorar a largura de banda da rede.",
          correct: false
          ,
        },
        {
          
          text: "Configurar roteadores.",
          correct: false
          ,
        },
      ],
    },
    {
      id: 6,
      question: "Em qual camada do modelo OSI opera o protocolo HTTP?",
      answers: [
        {
          
          text: "Física",
          correct: false
          ,
        },
        {
          
          text: "Rede", 
          correct: false
          ,
        },
        {
          
          text: "Transporte",
          correct: false
          ,
        },
        {
          
          text: "Aplicação",   
          correct: true
          ,
        },
      ],
    },
    {
      id: 7,
      question: "Qual é a principal vantagem do uso de contêineres (como Docker)?",
      answers: [
        { 
          
          text: "Aumentar a segurança de aplicativos web.",
          correct: false

        },
        { 
          
          text: "Isolar aplicativos e suas dependências em ambientes leves.", 
          correct: true

        },
        { 
          
          text: "Melhorar a conectividade entre servidores.", 
          correct: false

        },
        { 
          
          text: "Substituir máquinas virtuais.", 
          correct: false

        },
      ],
    },
    {
      id: 8,
      question: "O que significa o conceito de 'polimorfismo' na programação orientada a objetos?",
      answers: [
        { 
          
          text: "A capacidade de executar várias tarefas ao mesmo tempo.", 
          
          correct: false

        },
        { 
          text: "A habilidade de criar classes abstratas.", 
          correct: false
         },
        { 
          text: "A capacidade de usar métodos com o mesmo nome, mas comportamentos diferentes.", 
          correct: true
         },
        { 
          text: "A execução de código em vários threads.", 
          correct: false
         },
      ],
    },
    {
      id: 9,
      question: "Qual é o principal objetivo do Scrum em projetos de TI?",
      answers: [
        { 
          text: "Planejar projetos detalhadamente antes do início.", 
          correct: false
         },
        { 
          text: "Garantir entregas contínuas e adaptáveis em ciclos curtos.", 
          correct: true
         },
        { 
          text: "Reduzir custos ao eliminar testes.", 
          correct: false
         },
        { 
          text: "Automatizar processos de desenvolvimento.", 
          correct: false
         },
      ],
    },
    {
      id: 10,
      question: "Qual é o propósito do comando `git clone` no Git?",
      answers: [
        { 
          text: "Atualizar o repositório local.", 
          correct: false
         },
        { 
          text: "Criar um repositório novo.", 
          correct: false
         },
        { 
          text: "Copiar um repositório remoto para o ambiente local.", 
          correct: true
         },
        { 
          text: "Resolver conflitos de merge.", 
          correct: false
         },
      ],
    },
    {
      id: 11,
      question: "Qual dessas opções é um banco de dados NoSQL?",
      answers: [
        { 
          text: "MySQL", 
          correct: false
         },
        { 
          text: "MongoDB", 
          correct: true
         },
        { 
          text: "PostgreSQL", 
          correct: false
         },
        { 
          text: "Oracle", 
          correct: false
         },
      ],
    },
    {
      id: 12,
      question: "O que significa o termo 'phishing'?",
      answers: [
        { 
          text: "Um ataque que explora falhas de hardware.", 
          correct: false
         },
        { 
          text: "Uma técnica de engenharia social para roubar informações.", 
          correct: true
         },
        { 
          text: "Um método de otimização de sites.", 
          correct: false
         },
        { 
          text: "Um tipo de malware que bloqueia arquivos.", 
          correct: false
         },
      ],
    },
    {
      id: 13,
      question: "Qual linguagem é amplamente usada em aprendizado de máquina?",
      answers: [
        { 
          text: "HTML", 
          correct: false
         },
        { 
          text: "Python", 
          correct: true
         },
        { 
          text: "C#", 
          correct: false
         },
        { 
          text: "SQL", 
          correct: false
         },
      ],
    },
    {
      id: 14,
      question: "Qual dessas opções é um exemplo de servidor web?",
      answers: [
        { 
          text: "Apache", 
          correct: true
         },
        { 
          text: "Ubuntu", 
          correct: false
         },
        { 
          text: "Docker", 
          correct: false
         },
        { 
          text: "PostgreSQL", 
          correct: false
         },
      ],
    },
    {
      id: 15,
      question: "O que é DevOps?",
      answers: [
        { 
          text: "Um método de desenvolvimento baseado em linguagens visuais.", 
          correct: false
         },
        { 
          text: "Uma filosofia que integra desenvolvimento e operações para entregar software rapidamente.", 
          correct: true
         },
        { 
          text: "Um sistema operacional exclusivo para desenvolvedores.", 
          correct: false
         },
        { 
          text: "Um modelo de rede para servidores.", 
          correct: false
         },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "R$ 100" },
        { id: 2, amount: "R$ 200" },
        { id: 3, amount: "R$ 300" },
        { id: 4, amount: "R$ 500" },
        { id: 5, amount: "R$ 1.000" },
        { id: 6, amount: "R$ 2.000" },
        { id: 7, amount: "R$ 4.000" },
        { id: 8, amount: "R$ 8.000" },
        { id: 9, amount: "R$ 16.000" },
        { id: 10, amount: "R$ 32.000" },
        { id: 11, amount: "R$ 64.000" },
        { id: 12, amount: "R$ 125.000" },
        { id: 13, amount: "R$ 250.000" },
        { id: 14, amount: "R$ 500.000" },
        { id: 15, amount: "R$ 1.000.000" },
      ].reverse(),
    []
  );

    useEffect(() => {
      questionNumber > 1 &&
        setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {username ? (
        <>
        <div className="main">
        {stop ? 
        (<h1 className="endText">você ganhou: {earned} </h1>
        ) : (
          <>
          <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber}/>
          </div>
        </div>
        <div className="bottom">
          <Trivia 
          data={data} 
          setStop={setStop} 
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber} />
        </div>
        </>
      )}
    </div>
      <div className="pyramid">
        <ul className="moneyList">
        {moneyPyramid.map((m) =>(
          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
        ))}
        </ul>
      </div>
        </>
      ) : (<Start setUsername={setUsername}/>
      )};
    </div>
  );
}

export default App;
