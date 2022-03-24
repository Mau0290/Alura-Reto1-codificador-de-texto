
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
function encriptar (){
    var texto = document.querySelector("#input-texto").value;

    var textoEncriptado = "";
    //                        //hola
        for (var i = 0; i < texto.length; i++) {
         
            if (texto[i] == "a") {
                textoEncriptado = textoEncriptado + "ai";
            } else if (texto[i] == "e") {
                textoEncriptado = textoEncriptado + "enter";
            } else if (texto[i] == "i") {
                textoEncriptado = textoEncriptado + "imes";
            } else if (texto[i] == "o") {
                textoEncriptado = textoEncriptado + "ober";
            } else if (texto[i] == "u") {
                textoEncriptado = textoEncriptado + "ufat";
            }else {
                textoEncriptado = textoEncriptado + texto[i];
            }
            document.querySelector("#msg").value = textoEncriptado;
        }    
    
    document.querySelector("#input-texto").value = "";
}

function desencriptar (){
    var texto = document.querySelector("#input-texto").value;

    var textoEncriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    document.querySelector("#msg").value = textoEncriptado;

    document.querySelector("#input-texto").value = "";

}

function copy(){
    var copyText = document.querySelector("#msg");
    copyText.select();    
     document.execCommand("Copy");
      document.querySelector("#msg").value=" ";

}


var texto = document.querySelector("#input-texto");
texto.focus();

var button1 = document.getElementById("btn-encriptar");
button1.onclick = encriptar;

var button2 = document.getElementById("btn-desencriptar");
button2.onclick = desencriptar;

























