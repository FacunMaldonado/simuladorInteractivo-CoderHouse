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
      prom= suma / 3
    }  
    document.getElementById("sumando").innerHTML = 'La nota promedio final es: ' + prom; 
});
 