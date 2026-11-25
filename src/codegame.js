//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 160;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 160;
let velocidadeYOponente;

let colidiu = false;
let colidiuRaquete = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;
const pontosParaVencer = 7;

//sons do jogo
let raquetada;
let ponto;
let trilha;

//chance de errar
let chanceDeErrar = 0;

function setup() {
  createCanvas(600, 400).parent("game");
  trilha = loadSound("assets/trilha.mp3", som => som.loop());
  ponto = loadSound("assets/ponto.mp3");
  raquetada = loadSound("assets/raquetada.mp3");
}

function draw() {
  colidiuRaquete = false;
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  marcaPonto();
  incluiPlacar();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
   if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1
  }
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if  (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  yRaquete = constrain(yRaquete, 0, 310);
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, diametro);
  if (colidiu){
    colidiuRaquete = true;
    velocidadeXBolinha *=-1
    if (raquetada && raquetada.isLoaded()) raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = constrain(yBolinha - yRaqueteOponente - raqueteAltura / 2, -5, 5);
  yRaqueteOponente += velocidadeYOponente;
  yRaqueteOponente = constrain(yRaqueteOponente, 0, 310)
  calculaChanceDeErrar()
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140, 0));
  rect(150, 10, 40, 20)
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590 && !colidiuRaquete){
    meusPontos += 1;
    if (ponto && ponto.isLoaded()) ponto.play();
    reiniciaBolinha();
  } else if (xBolinha < 10 && !colidiuRaquete){
    pontosDoOponente += 1;
    if (ponto && ponto.isLoaded()) ponto.play();
    reiniciaBolinha();
  }
  if (meusPontos >= pontosParaVencer || pontosDoOponente >= pontosParaVencer){
    encerraPartida();
  }
}

function reiniciaBolinha(){
  xBolinha = width / 2;
  yBolinha = height / 2;
}

function encerraPartida(){
  noLoop();
  if (trilha && trilha.isLoaded()) trilha.stop();
  push();
  noStroke();
  fill(0, 0, 0, 180);
  rect(0, 0, width, height);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(meusPontos >= pontosParaVencer ? "Você venceu!" : "Oponente venceu!", width / 2, height / 2);
  textSize(18);
  text("Jogo encerrado", width / 2, height / 2 + 38);
  pop();
}

function calculaChanceDeErrar(){
  if(pontosDoOponente >= meusPontos){
    chanceDeErrar += 1
    if(chanceDeErrar >= 39){
      chanceDeErrar = 40
    } else {
      chanceDeErrar -= 1
      if (chanceDeErrar <= 35){
        chanceDeErrar = 35
      }
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}
