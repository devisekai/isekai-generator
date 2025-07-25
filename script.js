const protagonistas = [
  "um aprendiz de dev",
  "um sysadmin renegado",
  "um guerreiro do Git",
  "um arquimago de código",
  "um oráculo de APIs",
  "um feiticeiro de Python",
  "um paladino do front-end",
  "um bardodev",
  "um ladino de scripts",
  "um ninja do terminal",
  "um dev cansado do Jira",
  "um alquimista de dados",
  "um clérigo do código limpo",
  "um cavaleiro do StackOverflow",
  "um dev em modo dark",
  "um necromante de bugs",
  "um dev freelancer errante",
  "um aventureiro sem backlog",
  "um estagiário nível 99",
  "um conjurador de CSS",
  "um dev abandonado por sua framework",
  "um dev descompilado",
  "um criador de servidores mágicos",
  "um mestre dos comandos bash",
  "um caçador de código legado",
  "um dev que sobreviveu ao deploy de sexta",
  "um domador de IA",
  "um invocador de stacks",
  "um dev que quebrou o tempo com recursão",
  "um dev que já viu o null de perto",
  "um criador de Golems em JavaScript",
  "um dev amaldiçoado com um `while(true)`",
  "um goblin que aprendeu a programar",
  "um orc do back-end",
  "um elfo devops",
  "um anão programador de bancos de dados",
  "um humanoide de código reescrito",
  "um dev que fala com máquinas antigas",
  "um dev lendário do tempo do HTML3",
  "um guerreiro de documentação",
  "um dev que hackeou o próprio destino",
  "um dev da Guilda dos Algoritmos",
  "um aprendiz do Templo do Clean Code",
  "um dev que trocou espada por teclado",
  "um domador de exceptions",
  "um cavaleiro da chave estrangeira",
  "um druida das variáveis",
  "um conjurador de tokens JWT",
  "um dev expulso do reino corporativo",
  "um dev de meia-idade tentando versionar sua vida"
];
const mortes = [
  "foi atropelado por um caminhão de dados",
  "sofreu um overflow existencial",
  "caiu dentro de um loop infinito",
  "foi desconectado do servidor da realidade",
  "rodou um script proibido",
  "foi eliminado por um bug sagrado",
  "esbarrou num NULL e desapareceu",
  "foi rejeitado por todos os commits",
  "fez merge errado no tempo",
  "criou uma função recursiva que o consumiu",
  "foi compactado até sumir",
  "foi atropelado por um pacote npm",
  "escreveu um código tão feio que o universo colapsou",
  "chamou um método que não existe",
  "foi engolido por um stack trace",
  "clicou no link errado e caiu em outro mundo",
  "cometeu um git push forçado e pagou o preço",
  "executou um `sudo rm -rf /` na própria alma",
  "reencarnou após dar deploy sem testes",
  "foi tragado por um regex sem fim",
  "foi absorvido por uma planilha mágica",
  "perdeu o ping da existência",
  "chamou a função `autoAtropelar()`",
  "bugou a linha do tempo do Scrum",
  "foi reiniciado pelo sistema universal",
  "rodou um código ancestral que não devia",
  "foi devorado por uma inteligência artificial faminta",
  "foi zapeado para outro universo via commit",
  "desapareceu durante um `git pull` arcano",
  "foi silenciado por um bot milenar",
  "foi decifrado e removido da RAM cósmica",
  "entrou em um if sem else e nunca voltou",
  "foi esquecido na lixeira digital",
  "testou um código amaldiçoado",
  "foi zipado para outra dimensão",
  "caiu num buraco de documentação incompleta",
  "sofreu um `TypeError: vida is not defined`",
  "chamou a morte com um ping místico",
  "foi deletado da branch principal da realidade",
  "foi banido do plano real por um framework antigo",
  "quebrou o build do universo",
  "apagou a própria existência com um SELECT * sem WHERE",
  "fez um commit diretamente no éter",
  "usou uma função sem retorno e sumiu",
  "instanciou o próprio fim",
  "passou `undefined` pra vida",
  "tentou rodar código num universo estático",
  "deletou a variável alma",
  "virou parâmetro num constructor de outro mundo"
];
const mundos = [
  "Yggdracode",
  "Stackland",
  "Codeverso",
  "Gitárnia",
  "Nullaria",
  "Scriptonia",
  "ObjetoReino",
  "Bugária",
  "Algoritmália",
  "Compilória",
  "Loopar",
  "Varíavelia",
  "Arrayn",
  "Promisefell",
  "Cloudania",
  "Devmora",
  "Shellgard",
  "404realms",
  "Apiland",
  "Documentária",
  "Testeria",
  "Deployhalla",
  "Regextrópolis",
  "Nodaria",
  "FuncionaEmMinhaMáquina",
  "Fronthelm",
  "PHPark",
  "Reponômia",
  "Commitzônia",
  "Recursiville",
  "Dependêncity",
  "Replitus",
  "Terminux",
  "Javascryptum",
  "Bytefornia",
  "ControlFlowgard",
  "Inputtern",
  "Asyncaria",
  "Devnheim",
  "Sassária",
  "Compilewood",
  "StackOverflowa",
  "Brackethold",
  "Tokenfall",
  "Arraygard",
  "Pinglória",
  "Crashlândia",
  "Middlewarea",
  "Branchtopia",
  "Scriptalor"
];
const classes = [
  "Dev Mage",
  "Code Warrior",
  "Paladino do Debug",
  "Barbarian do Bash",
  "Ladino do Git",
  "Necromante de Funções",
  "Arqueiro de APIs",
  "Mestre dos Arrays",
  "Domador de Loops",
  "Bardo do Front",
  "Berserker do PHP",
  "Clérigo do Stack",
  "Samurai das Expressões Regulares",
  "Invocador de Tokens",
  "Ilusionista de Frameworks",
  "Arquiteto de Back-end",
  "Encantador de Banco de Dados",
  "Alquimista do Frontend",
  "Cavaleiro da Documentação",
  "Destruidor de Bugs",
  "Vigilante da Semântica",
  "Monge do CSS Grid",
  "Mago dos Selects",
  "Senhor dos Commits",
  "Guardião do Repositório",
  "Explorador de API's",
  "Assassino de Variáveis Globais",
  "Sumonador de Webhooks",
  "Druida das Classes Utilitárias",
  "Templário do MVC",
  "Sentinela de Deploy",
  "Oráculo da Tipagem Estática",
  "Clérigo do Open Source",
  "Feiticeiro do CI/CD",
  "Devops Ancestral",
  "Executor de Build",
  "Programador Rúnico",
  "Defensor do Clean Code",
  "Cavaleiro do Design Pattern",
  "Andarilho da Stack Trace",
  "Forjador de Componentes",
  "Goblin do Linter",
  "Senhor do Script Oculto",
  "Colecionador de Parâmetros",
  "Discípulo da Recursividade",
  "Mercador de Templates",
  "Executor de Queries Sagradas",
  "Caçador de Memória",
  "Guardião do Kernel",
  "Usuário Root Ascendido"
];
const missoes = [
  "derrotar o Bug Supremo",
  "restaurar o repositório ancestral",
  "consertar o CSS quebrado do universo",
  "refatorar a realidade",
  "salvar o front-end do caos visual",
  "debugar o código sagrado",
  "recompilar os pilares da existência",
  "escalar a torre do Git",
  "prevenir conflitos de merge no multiverso",
  "impedir o retorno do NullPointer",
  "conectar a API perdida",
  "salvar os dados da extinção",
  "evitar um overflow dimensional",
  "evangelizar os scripts do bem",
  "encontrar o scroll infinito",
  "implantar responsividade universal",
  "ensinar orientação a objetos para os orcs",
  "proteger o deploy final",
  "recuperar o token roubado",
  "fazer o commit sagrado",
  "resgatar a UI da dimensão quebrada",
  "trazer de volta a documentação perdida",
  "reviver o código legado com dignidade",
  "enfrentar o captcha supremo",
  "implementar um dark mode eterno",
  "fechar os tickets de outra dimensão",
  "compactar os arquivos do apocalipse",
  "resolver o bug temporal do cron",
  "remover os `console.log()` do multiverso",
  "otimizar o universo para mobile",
  "enfrentar a IA corrompida",
  "estabilizar a RAM cósmica",
  "descompilar o oráculo digital",
  "escrever testes para a vida real",
  "proteger o cache do conhecimento",
  "automatizar os feitiços",
  "integrar sistemas interdimensionais",
  "codar o script do destino",
  "evitar memory leaks do submundo",
  "vencer o chefe final da manutenção",
  "evitar a queda do framework sagrado",
  "criar um mundo sem bugs (ou quase)",
  "enfrentar o servidor de trevas",
  "documentar o grimório do código",
  "renomear variáveis amaldiçoadas",
  "salvar os usuários do UX sombrio",
  "banir o JS maldito de outro plano",
  "conquistar o título de Dev Supremo",
  "codar até reencarnar novamente"
];

const storyEl = document.getElementById('story');
const storyBox = document.getElementById('story-box');
const generateBtn = document.getElementById('generate-btn');
const toggleThemeBtn = document.getElementById('toggle-theme');

function gerarHistoria() {
  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const historia = `Você ${random(mortes)} e renasceu em ${random(mundos)} como ${random(protagonistas)} da classe ${random(classes)}. Sua missão: ${random(missoes)}.`;

  storyBox.classList.remove('fade'); // Reinicia animação
  void storyBox.offsetWidth; // Força reflow pra reiniciar a classe
  storyBox.classList.add('fade');

  storyEl.textContent = historia;
}

function alternarTema() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
}

generateBtn.addEventListener('click', gerarHistoria);
toggleThemeBtn.addEventListener('click', alternarTema);

document.getElementById('share-twitter').addEventListener('click', () => {
  const texto = encodeURIComponent(document.getElementById('story').textContent);
  const url = `https://twitter.com/intent/tweet?text=${texto}`;
  window.open(url, '_blank');
});

document.getElementById('copy-story').addEventListener('click', () => {
  const texto = document.getElementById('story').textContent;
  navigator.clipboard.writeText(texto).then(() => {
    alert("História copiada para a área de transferência!");
  });
});

document.getElementById('download-image').addEventListener('click', () => {
  html2canvas(document.getElementById('story-box')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'minha-historia-isekai.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});

const audio = document.getElementById('bg-music');
document.getElementById('toggle-music').addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
