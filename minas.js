// Variáveis
var tela = document.querySelector("#canvas");
var ctx = tela.getContext('2d');
var dt = anterior = 0;
var mapa = new Map(20, 20, 70);
mapa.cell = FASE1;

function limpaTela()
{
  ctx.fillStyle = "black";
  ctx.fillRect(0,0, tela.width, tela.height);
}

function passo(t){
  dt = (t - anterior)/1000;
  ctx.clearRect(0,0,canvas.width, canvas.height);
  mapa.desenhar(ctx);
  requestAnimationFrame(passo);
  anterior = t;
}
requestAnimationFrame(passo);
