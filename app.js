    let numeroSecreto=0;
    let intentos;
        
    function asignarTextoElenmeto(elemento,texto) {
            let elementoHTML= document.querySelector(elemento);
                elementoHTML.innerHTML=texto;
        }
        function limpiarCaja(){
            document.getElementById("valorUsuario").value="";
        }
        function condicionesIniciales(){
            asignarTextoElenmeto("h1","Juego del numero secreto!");
            asignarTextoElenmeto("p","Indica un numero del 1 al 10");
            intentos=1;
            numeroSecreto=numeroAleatorio();
        }

        function reiniciarJuego(){
            //reiniciar el numero de intentos
            //generar un nuevo numero secreto
            //indicar el mensaje de intervalo de numeros
            condicionesIniciales();
            //limpiar caja 
            limpiarCaja();
            //desabilitar el boton de nuevo juego
            document.getElementById("reiniciar").setAttribute("disabled","true");         
        }

    function verificarIntento(){
            let numeroUsuario=parseInt(document.getElementById("valorUsuario").value);
    if (numeroUsuario==numeroSecreto) {
            asignarTextoElenmeto("P",`Felicidades,acertaste el numero secreto ${intentos} ${intentos==1 ? "vez" : "veces"}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
      }else{
        if (numeroUsuario>numeroSecreto) {
            asignarTextoElenmeto("p","El numero secreto es menor");
        }
        else{
            asignarTextoElenmeto("p","No el numero secreto es mayor");
          }
          intentos++;
          limpiarCaja();
        }
        }

        
        
        
        
        function numeroAleatorio(){
        return Math.floor(Math.random()*10)+1;
        }


condicionesIniciales()



