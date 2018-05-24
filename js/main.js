
var display1 = $('#display1')
var display2 = $('#display2')
var pi = false;

// var display1 = ocument.getElementById("display1");
// var display2 = document.getElementById("display2");

var operacion;

var btn = document.getElementsByClassName('btn');
var ope = document.getElementsByClassName('btnOpe');

$("#ac").on( "click", function() {
    display1.html('')
    display2.html('')
  });

  $("#c").on( "click", function() {
      display2.html('')
    });

$(".btn").on( "click", function() {
    if (pi) {
        display2.html($( this ).text())
    }else {
      display2.append($( this ).text());
    }
    pi = false
  });


  $(".btnOpe").on( "click", function() {

        display1 = $('#display1')
        display2 = $('#display2')

    display1.append(display2.text())
    display2.html('')

    operacion  = this.getAttribute('id')

  });

  $("#igual").on( "click", function() {
    let resultado = igual()
    display2.html(resultado)
    display1.html('')
    pi = true
    });


//suma
var suma = function (){
  return parseInt(display1.text()) + parseInt(display2.text())
}
//resta
var resta = function (){
  return parseInt(display1.text()) - parseInt(display2.text())
}
//dividir
var dividir = function (){
  return parseInt(display1.text()) / parseInt(display2.text())
}
//multiplicar
var multiplicar = function (){
  return parseInt(display1.text()) * parseInt(display2.text())
}
//porcentaje
var porcentaje = function (){
   let porcentaje = parseInt(display1.text()) / 100
    return  porcentaje * parseInt(display2.text())
}

//masmenos
var masMenos = function (){
   return  parseInt(display2.text()) - (parseInt(display2.text()) * 2)
}


//igual
  function igual(){
    switch (operacion) {
      case 'suma':
        return suma()
      break
      case 'resta':
        return resta()
      break
      case 'multiplicar':
        return multiplicar()
      break
      case 'dividir':
        return dividir()
      break
      case 'porcentaje':
        return porcentaje()
      break
      case 'masMenos':
      return masMenos()
    break
    }
  }
