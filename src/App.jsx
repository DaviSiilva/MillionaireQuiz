import { useState } from "react";
import "./app.css";
import Trivia from "./conponents/Trivia";

function App() {
  const [questionNumber, setquestionNumber] = useState(1);

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
    {
      id: 16,
      question: "Qual é o papel do protocolo HTTPS?",
      answers: [
        { 
          text: "Melhorar a largura de banda da rede.", 
          correct: false
         },
        { 
          text: "Gerenciar cookies no navegador.", 
          correct: false
         },
        { 
          text: "Oferecer uma conexão segura com criptografia.", 
          correct: true
         },
        { 
          text: "Substituir o HTTP em redes locais.", 
          correct: false
         },
      ],
    },
    {
      id: 17,
      question: "Qual comando no Linux é usado para listar arquivos em um diretório?",
      answers: [
        { 
          text: "cd", 
          correct: false
         },
        { 
          text: "ls", 
          correct: true
         },
        { 
          text: "mkdir", 
          correct: false
         },
        { 
          text: "rm", 
          correct: false
         },
      ],
    },
    {
      id: 18,
      question: "Qual é o principal objetivo do CI/CD?",
      answers: [
        { 
          text: "Criar interfaces de usuário dinâmicas.", 
          correct: false
         },
        { 
          text: "Automatizar testes de segurança.", 
          correct: false
         },
        { 
          text: "Automatizar a integração e entrega contínua de software.", 
          correct: true
         },
        { 
          text: "Configurar contêineres em produção.", 
          correct: false
         },
      ],
    },
    {
      id: 19,
      question: "Qual das opções abaixo é uma estrutura front-end?",
      answers: [
        { 
          text: "Express", 
          correct: false
         },
        { 
          text: "React", 
          correct: true
         },
        { 
          text: "Django", 
          correct: false
         },
        { 
          text: "Flask", 
          correct: false
         },
      ],
    },
    {
      id: 20,
      question: "Qual ferramenta é usada para monitorar logs em aplicações?",
      answers: [
        { 
          text: "Elasticsearch", 
          correct: true
         },
        { 
          text: "VSCode", 
          correct: false
         },
        { 
          text: "MongoDB", 
          correct: false
         },
        { 
          text: "Slack", 
          correct: false
         },
      ],
    },
    {
      id: 21,
      question: "Qual das linguagens é usada para estilizar páginas da web?",
      answers: [
        { 
          text: "HTML", 
          correct: false
         },
        { 
          text: "CSS", 
          correct: true
         },
        { 
          text: "JavaScript", 
          correct: false
         },
        { 
          text: "SQL", 
          correct: false
         },
      ],
    },
    {
      id: 22,
      question: "Qual é a função do React Native?",
      answers: [
        { 
          text: "Desenvolver aplicações web responsivas.", 
          correct: false
         },
        { 
          text: "Desenvolver aplicativos móveis usando JavaScript.", 
          correct: true
         },
        { 
          text: "Gerenciar bancos de dados em tempo real.", 
          correct: false
         },
        { 
          text: "Criar APIs RESTful.", 
          correct: false
         },
      ],
    },
    {
      id: 23,
      question: "O que é uma API REST?",
      answers: [
        { 
          text: "Um tipo de banco de dados relacional.", 
          correct: false
         },
        { 
          text: "Uma interface que permite a comunicação entre sistemas.", 
          correct: true
         },
        { 
          text: "Um framework front-end para desenvolvimento web.", 
          correct: false
         },
        { 
          text: "Um protocolo de criptografia de dados.", 
          correct: false
         },
      ],
    },
    {
      id: 24,
      question: "Qual é a principal vantagem de usar TypeScript no desenvolvimento?",
      answers: [
        { 
          text: "Melhorar o desempenho das aplicações.", 
          correct: false
         },
        { 
          text: "Adicionar tipagem estática ao JavaScript.", 
          correct: true
         },
        { 
          text: "Substituir o CSS em projetos modernos.", 
          correct: false
         },
        { 
          text: "Facilitar a criação de animações em sites.", 
          correct: false
         },
      ],
    },
    {
      id: 25,
      question: "O que significa a sigla DOM no contexto do desenvolvimento web?",
      answers: [
        { 
          text: "Document Object Model", 
          correct: true
         },
        { 
          text: "Data Operation Management", 
          correct: false
         },
        { 
          text: "Dynamic Online Module", 
          correct: false
         },
        { 
          text: "Document Operation Method", 
          correct: false
         },
      ],
    },
    {
      id: 26,
      question: "Qual é a função do Node.js?",
      answers: [
        { 
          text: "Desenvolver interfaces visuais.", 
          correct: false
         },
        { 
          text: "Criar aplicações web no lado do servidor.", 
          correct: true
         },
        { 
          text: "Gerenciar estilos CSS em tempo real.", 
          correct: false
         },
        { 
          text: "Monitorar desempenho de aplicativos móveis.", 
          correct: false
         },
      ],
    },
    {
      id: 27,
      question: "Qual dessas bibliotecas é usada para gerenciar o estado em aplicações React?",
      answers: [
        { 
          text: "Axios", 
          correct: false
         },
        { 
          text: "Redux", 
          correct: true
         },
        { 
          text: "Bootstrap", 
          correct: false
         },
        { 
          text: "JQuery", 
          correct: false
         },
      ],
    },
    {
      id: 28,
      question: "Qual framework é usado para desenvolvimento web com Python?",
      answers: [
        { 
          text: "Angular", 
          correct: false
         },
        { 
          text: "Laravel", 
          correct: false
         },
        { 
          text: "Django", 
          correct: true
         },
        { 
          text: "Vue.js", 
          correct: false
         },
      ],
    },
    {
      id: 29,
      question: "Qual é a principal funcionalidade do Firebase?",
      answers: [
        { 
          text: "Monitorar redes de computadores.", 
          correct: false
         },
        { 
          text: "Fornecer backend como serviço (BaaS).", 
          correct: true
         },
        { 
          text: "Gerenciar bancos de dados SQL.", 
          correct: false
         },
        { 
          text: "Criar designs responsivos para a web.", 
          correct: false
         },
      ],
    },
    {
      id: 30,
      question: "Qual tecnologia é usada para criar aplicativos móveis híbridos?",
      answers: [
        { 
          text: "React Native", 
          correct: true
         },
        { 
          text: "JQuery", 
          correct: false
         },
        { 
          text: "HTML5", 
          correct: false
         },
        { 
          text: "MongoDB", 
          correct: false
         },
      ],
    },
    {
      id: 31,
      question: "Qual é o principal objetivo do uso do Bootstrap?",
      answers: [
        { 
          text: "Criar aplicativos back-end escaláveis.", 
          correct: false
         },
        { 
          text: "Facilitar o desenvolvimento de interfaces responsivas.", 
          correct: true
         },
        { 
          text: "Gerenciar estados em aplicações React.", 
          correct: false
         },
        { 
          text: "Realizar consultas a bancos de dados.", 
          correct: false
         },
      ],
    },
    {
      id: 32,
      question: "Qual das opções é usada para criar componentes em React?",
      answers: [
        { 
          text: "useEffect", 
          correct: false
         },
        { 
          text: "JSX", 
          correct: true
         },
        { 
          text: "API Gateway", 
          correct: false
         },
        { 
          text: "Redux", 
          correct: false
         },
      ],
    },
    {
      id: 33,
      question: "O que significa o termo SPA no desenvolvimento web?",
      answers: [
        { 
          text: "Sistema de Páginas Automatizadas", 
          correct: false
         },
        { 
          text: "Single Page Application", 
          correct: true
         },
        { 
          text: "Script Programático Avançado", 
          correct: false
         },
        { 
          text: "Serviço de Processamento Ágil", 
          correct: false
         },
      ],
    },
    {
      id: 34,
      question: "Qual desses frameworks é focado em desenvolvimento back-end?",
      answers: [
        { 
          text: "React", 
          correct: false
         },
        { 
          text: "Vue.js", 
          correct: false
         },
        { 
          text: "Express.js", 
          correct: true
         },
        { 
          text: "Tailwind CSS", 
          correct: false
         },
      ],
    },
    {
      id: 35,
      question: "Qual linguagem é usada para desenvolvimento nativo no iOS?",
      answers: [
        { 
          text: "Kotlin", 
          correct: false
         },
        { 
          text: "Swift", 
          correct: true
         },
        { 
          text: "JavaScript", 
          correct: false
         },
        { 
          text: "C#", 
          correct: false
         },
      ],
    },
    {
      id: 36,
      question: "Qual das opções é uma vantagem do Progressive Web App (PWA)?",
      answers: [
        { 
          text: "Requer instalação na loja de aplicativos.", 
          correct: false
         },
        { 
          text: "Funciona offline e é acessível pelo navegador.", 
          correct: true
         },
        { 
          text: "É desenvolvido apenas com linguagens nativas.", 
          correct: false
         },
        { 
          text: "Não suporta notificações push.", 
          correct: false
         },
      ],
    },
    {
      id: 37,
      question: "Qual é a função do Webpack no desenvolvimento web?",
      answers: [
        { 
          text: "Criar interfaces de usuário dinâmicas.", 
          correct: false
         },
        { 
          text: "Empacotar e otimizar arquivos de projetos web.", 
          correct: true
         },
        { 
          text: "Gerenciar bancos de dados em tempo real.", 
          correct: false
         },
        { 
          text: "Monitorar logs de servidores.", 
          correct: false
         },
      ],
    },
    {
      id: 38,
      question: "O que significa JSX no contexto do React?",
      answers: [
        { 
          text: "JavaScript Extended", 
          correct: false
         },
        { 
          text: "JavaScript XML", 
          correct: true
         },
        { 
          text: "JavaScript Extra", 
          correct: false
         },
        { 
          text: "JavaScript Execution", 
          correct: false
         },
      ],
    },
    {
      id: 39,
      question: "Qual é a função do pacote Axios em aplicações web?",
      answers: [
        { 
          text: "Estilizar páginas web.", 
          correct: false
         },
        { 
          text: "Gerenciar chamadas HTTP.", 
          correct: true
         },
        { 
          text: "Criar componentes dinâmicos.", 
          correct: false
         },
        { 
          text: "Monitorar logs de aplicação.", 
          correct: false
         },
      ],
    },
    {
      id: 40,
      question: "Qual é a principal vantagem do uso do Tailwind CSS?",
      answers: [
        { 
          text: "Oferecer classes utilitárias para estilização rápida.", 
          correct: true
         },
        { 
          text: "Substituir frameworks como React.", 
          correct: false
         },
        { 
          text: "Criar bancos de dados responsivos.", 
          correct: false
         },
        { 
          text: "Automatizar chamadas HTTP.", 
          correct: false
         },
      ],
    },
  ];

  const moneyPyramid = [
    {id: 1, amount:"R$ 100"},
    {id: 2, amount:"R$ 200"},
    {id: 3, amount:"R$ 300"},
    {id: 4, amount:"R$ 500"},
    {id: 5, amount:"R$ 1000"},
    {id: 6, amount:"R$ 2000"},
    {id: 7, amount:"R$ 4000"},
    {id: 8, amount:"R$ 8000"},
    {id: 9, amount:"R$ 16000"},
    {id: 10, amount:"R$ 32000"},
    {id: 11, amount:"R$ 64000"},
    {id: 12, amount:"R$ 125000"},
    {id: 13, amount:"R$ 250000"},
    {id: 14, amount:"R$ 500000"},
    {id: 15, amount:"R$ 1000000"},
  ].reverse();

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia/>
        </div>
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
    </div>
  );
}

export default App;
