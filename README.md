🏓 Game Pong

<div align="center">"JavaScript" (https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
"HTML5" (https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
"CSS3" (https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Uma recriação interativa do clássico Pong, desenvolvida com JavaScript puro.

Um projeto voltado à prática de lógica de programação, manipulação de elementos gráficos, detecção de colisões e interação com o usuário diretamente no navegador.

</div>---

📌 Sobre o projeto

<div align="justify">O Game Pong é uma recriação do clássico jogo de arcade Pong, desenvolvido utilizando JavaScript puro (Vanilla JavaScript), sem dependências de bibliotecas ou frameworks externos.

O projeto foi desenvolvido como exercício prático de lógica de programação, permitindo aplicar conceitos fundamentais como estruturas condicionais, variáveis, funções, operadores matemáticos, controle de fluxo e manipulação de eventos.

A implementação busca reproduzir as mecânicas originais do jogo, incluindo movimentação das raquetes, deslocamento da bolinha, detecção de colisões e sistema de pontuação.

A experiência é complementada por recursos sonoros, incluindo efeitos de colisão, áudio de pontuação e música de fundo, proporcionando uma experiência mais dinâmica e interativa.

Além de seu aspecto recreativo, o projeto representa uma oportunidade de consolidar conhecimentos de programação e desenvolvimento Front-End por meio da construção de uma aplicação funcional.

</div>🎮 Funcionalidades

- Movimentação das raquetes: controle utilizando as teclas direcionais.
- Movimentação da bolinha: deslocamento contínuo pela área de jogo.
- Detecção de colisões: identificação do contato entre a bolinha, as raquetes e as paredes.
- Inversão de direção: alteração da trajetória da bolinha após colisões.
- Sistema de pontuação: atribuição de pontos ao adversário quando a bolinha ultrapassa a área de defesa.
- Efeitos sonoros: reprodução de sons durante colisões e pontuações.
- Música de fundo: áudio para complementar a experiência.
- Posicionamento inicial: a bolinha começa centralizada na tela.

🕹️ Como jogar

<div align="justify">O objetivo é impedir que a bolinha ultrapasse sua raquete, utilizando os movimentos verticais para realizar as defesas e marcar pontos contra o adversário.

</div>Tecla| Ação
"↑"| Movimentar a raquete para cima
"↓"| Movimentar a raquete para baixo

Regras do jogo:

1. A bolinha inicia no centro da área de jogo.
2. Ao colidir com uma raquete, sua trajetória é alterada.
3. Ao ultrapassar uma das áreas de defesa, o adversário recebe um ponto.
4. Após a pontuação, a bolinha retorna à posição central.

🛠️ Tecnologias utilizadas

Tecnologia| Aplicação
JavaScript (Vanilla)| Lógica, movimentação e colisões
HTML5| Estrutura da aplicação
CSS3| Estilização e apresentação visual
Áudio| Efeitos sonoros e música de fundo

O projeto não utiliza bibliotecas ou frameworks JavaScript externos.

🧠 Conceitos de programação aplicados

<div align="justify">O desenvolvimento do jogo foi utilizado como exercício de aplicação prática de lógica de programação, transformando conceitos teóricos em comportamentos funcionais dentro de uma aplicação interativa.

</div>Entre os principais conceitos trabalhados:

- Variáveis e tipos de dados.
- Operadores aritméticos e lógicos.
- Estruturas condicionais.
- Estruturas de repetição.
- Funções e organização de código.
- Manipulação de eventos do teclado.
- Coordenadas e posicionamento de elementos.
- Operações matemáticas para movimentação.
- Detecção e tratamento de colisões.
- Controle de estados e atualização da pontuação.

🚀 Como executar

1. Clone o repositório

git clone https://github.com/jilldias/game-pong.git

2. Acesse o diretório

cd game-pong

3. Execute o projeto

Abra o arquivo "index.html" diretamente no navegador.

Não é necessário instalar dependências ou configurar um servidor Back-End.

Alternativamente, você pode utilizar a extensão Live Server no Visual Studio Code para executar o projeto em um servidor local.

🎨 Personalização

<div align="justify">O código-fonte permite modificar diferentes aspectos visuais e sonoros do jogo. Essa flexibilidade facilita a experimentação, a compreensão da estrutura da aplicação e a implementação de novas funcionalidades.

</div>As principais possibilidades de personalização incluem:

- Raquetes: alterar cores, dimensões e aparência.
- Bolinha: modificar tamanho, cor e características visuais.
- Cenário: personalizar o fundo e os elementos da área de jogo.
- Efeitos sonoros: substituir os arquivos de áudio utilizados nas colisões e pontuações.
- Música de fundo: utilizar uma trilha sonora diferente.

🤝 Como contribuir

<div align="justify">Contribuições são bem-vindas! O projeto está aberto a melhorias visuais, correções, otimizações e novas funcionalidades.

Para contribuir, utilize o fluxo de trabalho baseado em Fork e Pull Request, permitindo que as alterações sejam analisadas antes de serem incorporadas ao repositório original.

</div>1. Faça um Fork

Acesse o repositório original no GitHub e clique em Fork para criar uma cópia em sua conta.

2. Clone seu Fork

git clone https://github.com/SEU-USUARIO/game-pong.git

Entre no diretório:

cd game-pong

3. Configure o repositório original

git remote add upstream https://github.com/jilldias/game-pong.git

Verifique os repositórios remotos:

git remote -v

4. Crie uma Branch

Crie uma branch específica para sua contribuição:

git checkout -b feature/nova-funcionalidade

Sugestões de nomenclatura:

Prefixo| Finalidade
"feature/"| Novas funcionalidades
"fix/"| Correções de erros
"style/"| Melhorias visuais
"refactor/"| Refatoração do código
"docs/"| Documentação

5. Realize suas alterações

Implemente as modificações desejadas, mantendo a organização do código e a compatibilidade com os navegadores modernos.

6. Registre suas alterações

git add .
git commit -m "feat: improve game mechanics"

7. Envie sua Branch

git push origin feature/nova-funcionalidade

8. Abra um Pull Request

Acesse seu Fork no GitHub e selecione Compare & pull request.

Configure o Pull Request da seguinte maneira:

- Base repository: "jilldias/game-pong"
- Base branch: "main"
- Head repository: seu Fork
- Compare branch: sua branch de contribuição.

Descreva as alterações realizadas, explique sua finalidade e, quando possível, inclua capturas de tela das melhorias visuais.

Clique em Create pull request para enviar sua contribuição.

💡 Possibilidades de evolução

Algumas funcionalidades que podem ser exploradas em versões futuras:

- [ ] Implementação de diferentes níveis de dificuldade.
- [ ] Sistema de seleção de velocidade da bolinha.
- [ ] Tela inicial com botão para iniciar a partida.
- [ ] Sistema de pausa e reinicialização.
- [ ] Placar com limite de pontuação.
- [ ] Modo de dois jogadores.
- [ ] Melhorias de responsividade para dispositivos móveis.
- [ ] Armazenamento de recordes utilizando LocalStorage.

📄 Licença

Consulte o repositório para verificar os termos de utilização e distribuição do projeto. Caso deseje permitir a reutilização e modificação do código, considere adicionar uma licença de código aberto, como a MIT License.