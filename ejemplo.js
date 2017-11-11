//Saúl Enrique Labra Cruz A01020725

var poliActual = {X:0, Y:0, apotema:0, lados:0, teta:0};
var arcoActual = {X:0, Y:0, radio:0, tetaInicial:0, tetaFinal:0};
var cuboActual = {X:0, Y:0, lado:0};
var prisRectActual = {X:0, Y:0, ancho:0, largo:0, alto:0};
var ptActual = {X:0, Y:0, l1:0, l2:0, l3:0, altura:0};
var cActual = {X:0, Y:0, radio:0, alto:0};

function generar(figuraNatural)
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");
  var Xcenter = canvas.width/2;
  var Ycenter = canvas.height/2;

  switch (figuraNatural)
  {
    case 0:
      var apotemaPoli = document.getElementById("apotemaPoli").value;
      var ladosPoli = document.getElementById("ladosPoli").value;
      genPoli(Xcenter, Ycenter, apotemaPoli, ladosPoli, 0);
      poliActual.X = Xcenter;
      poliActual.Y = Ycenter;
      poliActual.apotema = apotemaPoli;
      poliActual.lados = ladosPoli;
      poliActual.teta = 0;
      break;
    case 1:
      arcoActual.X = Xcenter;
      arcoActual.Y = Ycenter;
      arcoActual.radio = Number(document.getElementById("radioArc").value);
      arcoActual.tetaInicial = (Number(document.getElementById("angIniArc").value)*Math.PI)/180;
      arcoActual.tetaFinal = (Number(document.getElementById("angFinArc").value)*Math.PI)/180;
      genArco(arcoActual.X, arcoActual.Y, arcoActual.radio, arcoActual.tetaInicial, arcoActual.tetaFinal);
      break;
    case 2:
      cuboActual.X = Xcenter;
      cuboActual.Y = Ycenter;
      cuboActual.lado = Number(document.getElementById("ladoCubo").value);
      genCubo(cuboActual.X, cuboActual.Y, cuboActual.lado);
      break;
    case 3:
      prisRectActual.X = Xcenter;
      prisRectActual.Y = Ycenter;
      prisRectActual.ancho = document.getElementById("anchoPrisRect").value;
      prisRectActual.largo = document.getElementById("largoPrisRect").value;
      prisRectActual.alto = document.getElementById("altoPrisRect").value;

      genPrisRect(prisRectActual.X, prisRectActual.Y, prisRectActual.ancho, prisRectActual.largo, prisRectActual.alto);
      break;
    case 4:
      ptActual.X = Xcenter;
      ptActual.Y = Ycenter;
      ptActual.l1 = document.getElementById("lado1").value;
      ptActual.l2 = document.getElementById("lado2").value;
      ptActual.l3 = document.getElementById("lado3").value;
      ptActual.altura = document.getElementById("ptAltura").value;

      genPT(ptActual.X, ptActual.Y, ptActual.l1, ptActual.l2, ptActual.l3, ptActual.altura);
      break;
    case 5:
      cActual.X = Xcenter;
      cActual.Y = Ycenter;
      cActual.radio = Number(document.getElementById("radioC").value);
      cActual.alto = Number(document.getElementById("altoC").value);
      genC(cActual.X, cActual.Y, cActual.radio, cActual.alto)
  }
}

function genPoli(Xcenter, Ycenter, apotema, lados, angInicial)
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");

  contexto.beginPath();
  contexto.moveTo(Xcenter + apotema * Math.cos(angInicial), Ycenter + apotema * Math.sin(angInicial));

  for(var i=0; i<=lados; i+=1)
  {
    contexto.lineTo(Xcenter + apotema*Math.cos(i*2*Math.PI/lados+angInicial), Ycenter + apotema*Math.sin(i*2*Math.PI/lados+angInicial));
  }

  contexto.stroke();
}

function trasPoli()
{
  poliActual.X = Number(document.getElementById("despXPoli").value) + Number(poliActual.X);
  poliActual.Y = Number(document.getElementById("despYPoli").value) + Number(poliActual.Y);

  genPoli(poliActual.X, poliActual.Y, poliActual.apotema, poliActual.lados, poliActual.teta);
}

function rotaPoli()
{
  poliActual.teta = (Math.PI*(Number(document.getElementById("gradosPoliRot").value)))/360 + Number(poliActual.teta);
  genPoli(poliActual.X, poliActual.Y, poliActual.apotema, poliActual.lados, poliActual.teta);
}

function reflejaPoliHor()
{
  poliActual.X = -170 + Number(poliActual.X);
  poliActual.teta = Math.PI + Number(poliActual.teta);
  genPoli(poliActual.X, poliActual.Y, poliActual.apotema, poliActual.lados, poliActual.teta);
}

function reflejaPoliVer()
{
  poliActual.Y = 170 + Number(poliActual.Y);
  poliActual.teta = Math.PI*(3/4) + Number(poliActual.teta);
  genPoli(poliActual.X, poliActual.Y, poliActual.apotema, poliActual.lados, poliActual.teta);
}

function redimensionarPoli()
{
  poliActual.apotema = Number(poliActual.apotema)*Number(document.getElementById("multiPoli").value);
  genPoli(poliActual.X, poliActual.Y, poliActual.apotema, poliActual.lados, poliActual.teta);
}

function genArco(Xcenter, Ycenter, radio, tetaInicial, tetaFinal)
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");

  contexto.beginPath();
  contexto.arc(Xcenter, Ycenter, radio, tetaInicial, tetaFinal, false);
  contexto.stroke();
}

function trasArco()
{
  arcoActual.X = Number(document.getElementById("despXArco").value) + Number(arcoActual.X);
  arcoActual.Y = Number(document.getElementById("despYArco").value) + Number(arcoActual.Y);

  genArco(arcoActual.X, arcoActual.Y, arcoActual.radio, arcoActual.tetaInicial, arcoActual.tetaFinal)
}

function rotarArco()
{
  arcoActual.tetaInicial = ((Number(document.getElementById("gradosArcRot").value)*Math.PI)/180) + Number(arcoActual.tetaInicial);

  arcoActual.tetaFinal = ((Number(document.getElementById("gradosArcRot").value)*Math.PI)/180) + Number(arcoActual.tetaFinal);

  genArco(arcoActual.X, arcoActual.Y, arcoActual.radio, arcoActual.tetaInicial, arcoActual.tetaFinal);
}

function reflejaArcoHor()
{
  arcoActual.X = Number(arcoActual.X);
  arcoActual.tetaInicial = (Math.PI/2) + Number(arcoActual.tetaInicial);
  arcoActual.tetaFinal = (Math.PI/2) + Number(arcoActual.tetaFinal);
  genArco(arcoActual.X, arcoActual.Y, arcoActual.radio, arcoActual.tetaInicial, arcoActual.tetaFinal);
}

function reflejaArcoVer()
{
  arcoActual.Y = Number(arcoActual.Y);
  arcoActual.tetaInicial = (3*Math.PI/2) + Number(arcoActual.tetaInicial);
  arcoActual.tetaFinal = (3*Math.PI/2) + Number(arcoActual.tetaFinal);
  genArco(arcoActual.X, arcoActual.Y, arcoActual.radio, arcoActual.tetaInicial, arcoActual.tetaFinal);
}

function redimensionarArco()
{
  arcoActual.radio = Number(arcoActual.radio)*Number(document.getElementById("multiArco").value);
  genArco(arcoActual.X, arcoActual.Y, arcoActual.radio, arcoActual.tetaInicial, arcoActual.tetaFinal);
}

function genCubo(x, y, lado)
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");

  contexto.beginPath();

  contexto.rect(x, y, lado, lado);
  contexto.rect(x+lado/2, y+lado/2, lado, lado);
  contexto.stroke();

  for(var i=0; i<2; i+=1)
  {
    for(var j=0; j<2; j+=1)
    {
      contexto.moveTo(x + (i*lado), y + (j*lado));
      contexto.lineTo(x+(i*lado)+lado/2, y+(j*lado)+lado/2);
      contexto.stroke();
    }
  }
}

function trasladarCubo()
{
  cuboActual.X = Number(cuboActual.X) + Number(document.getElementById("despXCubo").value);
  cuboActual.Y = Number(cuboActual.Y) + Number(document.getElementById("despYCubo").value);
  genCubo(cuboActual.X, cuboActual.Y, cuboActual.lado);
}

function rotarCubo()
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");

  var rotacion = Number(document.getElementById("gradosCuboRot").value);

  contexto.translate(cuboActual.X, cuboActual.Y);
  contexto.rotate(rotacion*Math.PI/180);
  contexto.translate(-cuboActual.X, -cuboActual.Y);

  genCubo(cuboActual.X, cuboActual.Y, cuboActual.lado);
}

function reflejaCuboHor()
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");

  cuboActual.X = Number(cuboActual.X) - 170;

  contexto.beginPath();

  contexto.rect(cuboActual.X, cuboActual.Y, cuboActual.lado, cuboActual.lado);
  contexto.rect(cuboActual.X-cuboActual.lado/2, cuboActual.Y+cuboActual.lado/2, cuboActual.lado, cuboActual.lado);
  contexto.stroke();

  for(var i=0; i<2; i+=1)
  {
    for(var j=0; j<2; j+=1)
    {
      contexto.moveTo(cuboActual.X + (i*cuboActual.lado), cuboActual.Y + (j*cuboActual.lado));
      contexto.lineTo(cuboActual.X+(i*cuboActual.lado)-cuboActual.lado/2, cuboActual.Y+(j*cuboActual.lado)+cuboActual.lado/2);
      contexto.stroke();
    }
  }
}

function reflejaCuboVer()
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");

  cuboActual.Y = Number(cuboActual.Y) - 170;

  contexto.beginPath();

  contexto.rect(cuboActual.X, cuboActual.Y, cuboActual.lado, cuboActual.lado);
  contexto.rect(cuboActual.X-cuboActual.lado/2, cuboActual.Y+cuboActual.lado/2, cuboActual.lado, cuboActual.lado);
  contexto.stroke();

  for(var i=0; i<2; i+=1)
  {
    for(var j=0; j<2; j+=1)
    {
      contexto.moveTo(cuboActual.X + (i*cuboActual.lado), cuboActual.Y + (j*cuboActual.lado));
      contexto.lineTo(cuboActual.X+(i*cuboActual.lado)-cuboActual.lado/2, cuboActual.Y+(j*cuboActual.lado)+cuboActual.lado/2);
      contexto.stroke();
    }
  }
}

function redimensionarCubo()
{
  cuboActual.lado = Number(cuboActual.lado)*Number(document.getElementById("multiCubo").value);
  genCubo(cuboActual.X, cuboActual.Y, cuboActual.lado);
}

function genPrisRect(x, y, ancho, largo, alto)
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");

  contexto.beginPath();

  contexto.rect(x, y, ancho, largo);
  contexto.rect(x+alto/2, y+alto/2, ancho, largo);
  contexto.stroke();

  for(var i=0; i<2; i+=1)
  {
    for(var j=0; j<2; j+=1)
    {
      contexto.moveTo(x + (i*ancho), y + (j*largo));
      contexto.lineTo(x+(i*ancho)+alto/2, y+(j*largo)+alto/2);
      contexto.stroke();
    }
  }
}

function trasladarPrisRect()
{
  prisRectActual.X = Number(prisRectActual.X) + Number(document.getElementById("despXPrisRect").value);
  prisRectActual.Y = Number(prisRectActual.Y) + Number(document.getElementById("despYPrisRect").value);
  genPrisRect(prisRectActual.X, prisRectActual.Y, prisRectActual.ancho, prisRectActual.largo, prisRectActual.alto);
}

function rotarPrisRect()
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");

  var rotacion = Number(document.getElementById("gradosPrisRectRot").value);

  contexto.translate(prisRectActual.X, prisRectActual.Y);
  contexto.rotate(rotacion*Math.PI/180);
  contexto.translate(-prisRectActual.X, -prisRectActual.Y);

  genPrisRect(prisRectActual.X, prisRectActual.Y, prisRectActual.ancho, prisRectActual.largo, prisRectActual.alto);
}

function reflejaPrisRectHor()
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");

  prisRectActual.X = Number(prisRectActual.X) - 170;

  contexto.beginPath();

  contexto.rect(prisRectActual.X, prisRectActual.Y, prisRectActual.ancho, prisRectActual.largo);
  contexto.rect(prisRectActual.X-prisRectActual.alto/2, prisRectActual.Y+prisRectActual.alto/2, prisRectActual.ancho, prisRectActual.largo);
  contexto.stroke();

  for(var i=0; i<2; i+=1)
  {
    for(var j=0; j<2; j+=1)
    {
      contexto.moveTo(prisRectActual.X + (i*prisRectActual.ancho), prisRectActual.Y + (j*prisRectActual.largo));
      contexto.lineTo(prisRectActual.X+(i*prisRectActual.ancho)-prisRectActual.alto/2, prisRectActual.Y+(j*prisRectActual.largo)+prisRectActual.alto/2);
      contexto.stroke();
    }
  }
}

function reflejaPrisRectVer()
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");

  prisRectActual.Y = Number(prisRectActual.Y) - 170;

  contexto.beginPath();

  contexto.rect(prisRectActual.X, prisRectActual.Y, prisRectActual.ancho, prisRectActual.largo);
  contexto.rect(prisRectActual.X+prisRectActual.alto/2, prisRectActual.Y-prisRectActual.alto/2, prisRectActual.ancho, prisRectActual.largo);
  contexto.stroke();

  for(var i=0; i<2; i+=1)
  {
    for(var j=0; j<2; j+=1)
    {
      contexto.moveTo(prisRectActual.X + (i*prisRectActual.ancho), prisRectActual.Y + (j*prisRectActual.largo));
      contexto.lineTo(prisRectActual.X+(i*prisRectActual.ancho)+prisRectActual.alto/2, prisRectActual.Y+(j*prisRectActual.largo)-prisRectActual.alto/2);
      contexto.stroke();
    }
  }
}

function redimensionarPrisRect()
{
  prisRectActual.largo = Number(prisRectActual.largo)*Number(document.getElementById("multiPrisRect").value);
  prisRectActual.ancho = Number(prisRectActual.ancho)*Number(document.getElementById("multiPrisRect").value);
  prisRectActual.alto = Number(prisRectActual.alto)*Number(document.getElementById("multiPrisRect").value);
  genPrisRect(prisRectActual.X, prisRectActual.Y, prisRectActual.ancho, prisRectActual.largo, prisRectActual.alto);
}

function genPT(x, y, l1, l2, l3, altura)
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");

  contexto.beginPath();

    contexto.moveTo(x, y);
    contexto.lineTo(x+l1, y);
    contexto.lineTo(100, 200);

    contexto.stroke();
}

function genC(x, y, radio, alto)
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");

  contexto.beginPath();

  contexto.ellipse(x, y, radio, radio/4, 0, 0, 2*Math.PI, true);
  contexto.moveTo(x-radio, y);
  contexto.lineTo(x, y-alto);
  contexto.lineTo(x+radio, y);
  contexto.stroke();
}

function trasC()
{
  cActual.X = Number(document.getElementById("despXC").value) + Number(cActual.X);
  cActual.Y = Number(document.getElementById("despYC").value) + Number(cActual.Y);

  genC(cActual.X, cActual.Y, cActual.radio, cActual.alto);
}

function rotarC()
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");

  var rotacion = Number(document.getElementById("gradosC").value);

  contexto.translate(cActual.X, cActual.Y);
  contexto.rotate(rotacion*Math.PI/180);
  contexto.translate(-cActual.X, -cActual.Y);

  genC(cActual.X, cActual.Y, cActual.radio, cActual.alto);
}

function reflejarCHor()
{
  cActual.X = Number(cActual.X - 170);
  genC(cActual.X, cActual.Y, cActual.radio, cActual.alto);
}

function reflejarCVer()
{
  cActual.Y = Number(cActual.Y - 190);

  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");

  var x = cActual.X;
  var y = cActual.Y;
  var radio = cActual.radio;
  var alto = cActual.alto;

  contexto.beginPath();

  contexto.ellipse(x, y, radio, radio/4, 0, 0, 2*Math.PI, true);
  contexto.moveTo(x-radio, y);
  contexto.lineTo(x, y+alto);
  contexto.lineTo(x+radio, y);
  contexto.stroke();
}

function redimensionarC()
{
  cActual.radio = Number(cActual.radio)*Number(document.getElementById("multiC").value);
  cActual.alto = Number(cActual.alto)*Number(document.getElementById("multiC").value);
  genC(cActual.X, cActual.Y, cActual.radio, cActual.alto);
}

function limpiar()
{
  var canvas = document.getElementById("dibujo");
  var contexto = canvas.getContext("2d");
  contexto.clearRect(0,0, canvas.width, canvas.height);
}
