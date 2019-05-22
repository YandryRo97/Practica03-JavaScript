function validar(){
    var banderaT= validarTelefono()
    var banderaC = validarCedula()
    var banderaE = validarCorreo()
    var banderaF = validarFecha()
    var bandera= validarCamposObligatorios()
    
    if(banderaT == false){
        alert("Telefono Incorrecto")
    }
    if(banderaC == false){
        alert("Cedula Incorrecta")
    }
    if(bandera == false){
        alert("Llenar Campos")
    }
    if(banderaE == false){
        alert("El correo debe tener mas de tres caracteres antes del @ y tener el  dominio ups.edu.ec")
    }
    if(banderaF == false){
        alert("Fecha Incorretca su fecha debe estar con el formato yyy-mm-dd o su fecha no es valida")
    }
    if(banderaT== false || banderaC == false || bandera == false || banderaF == false){
        return false
    }
    
}

function validarCamposObligatorios(){
    var bandera = true
    for(var i = 0; i < document.forms[0].length ; i++){
        var elemento = document.forms[0].elements[i]
        if(elemento.value.trim() == ''){
            bandera=false
            if(elemento.id == 'cedula' || elemento.id == 'telefono' || elemento.id == 'correo' || elemento.id == 'nombres' || elemento.id == 'apellidos' || elemento.id == 'contrasena' || elemento.id == 'fechaNacimiento' || elemento.id == 'direccion' ){
                elemento.style.background ='rgba(194, 32, 32,0.7)'
                elemento.style.color = 'white'
                elemento.value ="Llenar"
            }
            
        }
    }
    if(bandera == true){
        return true
    }else{
        return false
    }
}

function validarLetras(frase,identificador){
    var palabra =frase.value.substring(frase.value.length-1,frase.value.length).charCodeAt()
    var x = document.getElementById(identificador)
    if((palabra >=65 && palabra <= 90)||(palabra >=97 && palabra <= 122) || palabra ==32){
    }else{
        x.value = x.value.substring(0,x.value.length-1) 
    }
}

function validarNumeros(numero,idNum){
    var palabra =numero.value.substring(numero.value.length-1,numero.value.length).charCodeAt()
    var x = document.getElementById(idNum)
    if((palabra >=48 && palabra <= 57)){
    }else{
        x.value = x.value.substring(0,x.value.length-1) 
    }
}

function validarTelefono(){
    var x =document.getElementById("telefono").value
    if(x.length == 10){
        return true
    }else{
        return false
    }
}

function validarCedula(){
     var x =document.getElementById("cedula").value
     var total = 0;
     var longitud = x.length;
     var longcheck = longitud - 1;
    if(longitud == 10){
        for(i = 0; i < longcheck; i++){
            if (i%2 === 0) {
              var aux = x.charAt(i) * 2;
              if (aux >= 10) aux -= 9;
              total += aux;
            } else {
              total += parseInt(x.charAt(i));
            }
        }
        total = total % 10 !=0 ? 10 - total % 10 : 0;

        if (x.charAt(longitud-1) == total) {
            
            return true
        }else{
            alert("Su cedula no corresponde a ecuador")
            return false
        }
    }else{
        return false
    }
}
                
function validarCorreo(){
    var x = document.getElementById("correo").value
    var correo = x.split("@")
    if(x == correo){
    }if(correo[0].length <= 3 ){
        return false
    }else if(correo[1] != "ups.edu.ec"){
        return false
    }else{
        return true
    }
    
}



function validarFecha(){
    var x = document.getElementById("fechaNacimiento").value
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if(!x.match(regEx))return false;
  var fecha = new Date(x)
  var anio = fecha.getFullYear()
  var mes = fecha.getMonth()
  var dia = fecha.getDay(
  )
  if(anio > 2019 || anio < 1900) return false;
  if (mes < 1 || mes > 12) return false;
  else if (dia < 1 || dia> 31) return false;
  else if ((mes==4 || mes==6 || mes==9 || mes==11) && dtDay ==31) return false;
  else if (mes == 2) {
        var bisiesto = (anio % 4 == 0 && (anio% 100 != 0 || anio % 400 == 0));
        if (dia> 29 || (dia ==29 && !isleap)) return false;
    }
}