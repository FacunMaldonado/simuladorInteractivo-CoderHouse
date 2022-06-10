const mejorProm = [];

let pruebaa = document.querySelector('.prueba')
pruebaa.addEventListener('click', function(){
    n1 = document.getElementById("num1").value;  
    n2 = document.getElementById("num2").value;
    n3 = document.getElementById("num3").value;  
    //NaN = is not a number
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {  
      alert('Es necesarios introducir unicamente números válidos');
    } else {  
      //si no pongo parseFloat concatenaría n1 con n2 
      suma=parseFloat(n1)+parseFloat(n2)+parseFloat(n3);  
      prom= suma / 3;
    }  
    mejorProm.push(prom);
    document.getElementById("sumando").innerHTML = 'La nota promedio final es: ' + prom; 
    mejorPromedio(prom);
   console.log(mejorProm)
});

function mejorPromedio (prom){
  let masAlto = 0;
  for (i=0 ; i < mejorProm.length ;i++){
    if (masAlto > prom){
      masAlto = prom;
    }
  }
  document.getElementById("sumando2").innerHTML = 'El mejor promedio ingresado al momento es: ' + masAlto;
}

