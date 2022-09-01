const texto= document.querySelector("#texto")
const imagen= document.querySelector(".imagen")
const mensajeEncriptado= document.querySelector(".mensaje-encriptado")



function btnEncriptar(){
   
     imagen.style.backgroundImage= "none" 
     const textoEncriptado = encriptar(texto.value); 
     mensajeEncriptado.innerHTML= `<p id="txtEncriptado">${textoEncriptado}</p>`;
     mensajeEncriptado.style.marginTop= "-300px";
     mensajeEncriptado.style.color= "black";
     mensajeEncriptado.style.fontSize="50px"
     mensajeEncriptado.style.marginBottom="120px"
     texto.value=""
}

 
function btnDesencriptar(){
   
   imagen.style.backgroundImage= "none" 
   const textoEncriptado = desencriptar(texto.value); 
   mensajeEncriptado.innerHTML= textoEncriptado;
   mensajeEncriptado.style.marginTop= "-300px";
   mensajeEncriptado.style.color= "blue";
   mensajeEncriptado.style.fontSize="50px"
   texto.value=""
}

function encriptar(stringEncriptar){
   let matriz= [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
   ]
   stringEncriptar = stringEncriptar.toLowerCase();

   for(let i=0;i<matriz.length;i++){
     if(stringEncriptar.includes(matriz[i][0])){
        stringEncriptar= stringEncriptar.replaceAll(matriz[i][0],matriz[i][1])
     }
   }

   return stringEncriptar
}

function desencriptar(stringDesencriptar){
   let matriz= [
    ["a","ai"],
    ["e","enter"],
    ["i","imes"],  
    ["o","ober"],
    ["u","ufat"]
   ]
   stringDesencriptar = stringDesencriptar.toLowerCase();

   for(let i=0;i<matriz.length;i++){
     if(stringDesencriptar.includes(matriz[i][1])){
        stringDesencriptar= stringDesencriptar.replaceAll(matriz[i][1],matriz[i][0])
     }
   }

   return stringDesencriptar
}

 function copiar(){
   parrafo= document.querySelector('#txtEncriptado').innerText   
   navigator.clipboard.writeText(parrafo)
   
} 