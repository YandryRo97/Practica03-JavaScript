window.onload = function(){
    pantalla=document.getElementById("textoPantalla");
    document.onkeydown = teclado;
}
x="0";
xi=1;
coma=0;
ni=0;
op="no";

function numero(xx) { 
    if (x=="0" || xi==1  ) { 
       pantalla.innerHTML=xx; 
       x=xx; 
       if (xx==".") { 
          pantalla.innerHTML="0."; 
          x=xx; 
          coma=1; 
          }
      }
      else { 
          if (xx=="." && coma==0) { 
              pantalla.innerHTML+=xx;
              x+=xx;
              coma=1; 
          }
         
          else if (xx=="." && coma==1) {} 
          	 
          else {
              pantalla.innerHTML+=xx;
              x+=xx
          }
       }
       xi=0 
}
function operar(s) {
    igualar();
    ni=x;
    op=s;
    xi=1; 
}
function igualar() {
    if (op=="no") { 
       pantalla.innerHTML=x;	
       }
    else { 
       sl=ni+op+x; 
       sol=eval(sl); 
       pantalla.innerHTML=sol; 
       x=sol; 
       op="no"; 
       xi=1; 
       }
}

function raizc() {
    x=Math.sqrt(x);
    pantalla.innerHTML=x; 
    op="no"; 
    xi=1; 
}

function porcent() { 
    x=x/100 
    pantalla.innerHTML=x; 
    igualar() 
    xi=1 
}
function inve() {
    nx=Number(x);
    nx=(1/nx);
    x=String(nx);		 
    pantalla.innerHTML=x;
    xi=1; 
}

function borra(){ //Borrar sólo el último número escrito.
    cifras=x.length; //hayar número de caracteres en pantalla
    br=x.substr(cifras-1,cifras) //info del último caracter
    x=x.substr(0,cifras-1) //quitar el ultimo caracter
    if (x=="") {x="0";} //si ya no quedan caracteres, pondremos el 0
    if (br==".") {coma=0;} //Si hemos quitado la coma, se permite escribirla de nuevo.
    pantalla.innerHTML=x; //mostrar resultado en pantalla	 
}
function borradoParcial() {
    pantalla.innerHTML=0; //Borrado de pantalla;
    x=0; //Borrado indicador número pantalla.
    coma=0; //reiniciamos también la coma					
    }

function borradoTotal() {
    pantalla.innerHTML=0; //poner pantalla a 0
    x="0"; //reiniciar número en pantalla
    coma=0; //reiniciar estado coma decimal 
    ni=0 //indicador de número oculto a 0;
    op="no" //borrar operación en curso.
}