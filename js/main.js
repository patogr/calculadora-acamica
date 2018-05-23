
var display1;
var display2;
// var display1 = ocument.getElementById("display1");
// var display2 = document.getElementById("display2");

var operacion;

var btn = document.getElementsByClassName('btn');
var ope = document.getElementsByClassName('btnOpe');

   btn.onclick = function(event) {
    display2.append($(this).text())
   };


   btnOpe.onclick = function(event) {
    display1 = display2
    operacion  = this.getAttribute('id')
   };

 


//suma
var suma = function (){
  return display1 + display2
}
//resta
var resta = function (){
  return display1 + display2
}
//dividir
var dividir = function (){
  return display1 / display2
}
//multiplicar
var multiplicar = function (){
  return display1 * display2
}
//porcentaje
var porcentaje = function (){
   let porcentaje = display1 / 100
    return  porcentaje * display2
}

//masmenos
var masMenos = function (){
   return  display2 - (display2 * 2)
}


//igual
  function igual(){
    switch (op) {
      case 'suma':
        display2 = suma()
      break
      case 'resta':
        display2 = resta()
      break
      case 'multiplicar':
        display2 = miltiplicar()
      break
      case 'dividir':
        display2 = dividir()
      break
      case 'porcentaje':
        display2 = porcentaje()
      break
      case 'masMenos':
      display2 = masMenos()
    break
    }
  }