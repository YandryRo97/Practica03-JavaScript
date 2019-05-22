
var actual = 0;
var velocidad = 2000;

var fotos = new Array
("imagenes/logo.png","imagenes/foto1.jpg","imagenes/foto2.jpg","imagenes/foto3.jpg","imagenes/foto4.jpg",
"imagenes/foto5.jpg","imagenes/foto6.jpg","imagenes/foto7.jpg","imagenes/foto8.jpg","imagenes/foto9.jpg");



function puntos(n) {
    var punto = document.getElementsByClassName("punto")
    for(i=0; 1<punto.length; i++){
        if(punto[i].className.includes("activo")){
            punto[i].className = punto[i].className.replace("activo", "");
            break;
        }
    }
    punto [n].className += " activo";
}

function mostrar(n){
    var imagenes = document.getElementsByClassName("imagen");
    for(i=0; i<imagenes.length; i++){
        if(imagenes[i].className.includes(" actual")){
            imagenes[i].className = imagenes[i].className.replace(" actual","");
            break;
        }
    }
    actual = n;
    imagenes[n].className += " actual";
    puntos(n);
}

function siguiente(){
    actual++;
    if(actual > 9){
        actual = 9;
    }
    mostrar(actual);
}

function anterior(){
    actual--;
    if(actual < 0){
        actual = 0;
    }
    mostrar(actual);
}

/*var play = setInterval("siguiente ()",velocidad);

function playPause(){
    var boton = document.getElementById("btn");
    if (play == null ){
        
    }
}*/


