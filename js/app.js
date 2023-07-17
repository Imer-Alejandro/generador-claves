//valores para generar clave aleatoria
const ListCaracteresClave = 'abcdehijklmnñopqrstuvwxyz01234567890!@#$%^&*()_-+=/~?¿ªÇ|ABCDEHIJKLMNÑOPQRSTUVWXYZ'

//input para mostrar la clave
let inputMostrarClave = document.querySelector('.inputClave')
//entrada de caracteres
let contadorCaracteres = document.querySelector('#rangoCaracteres')
//medidor de seguridad
let niveSeguridad = document.querySelector('.nivelSeguridad')

//ejecutar  con el evento del boton del formulario
function btn_generalClave() {
    generarClave(parseInt(contadorCaracteres.value))
    
}

//mostrar en la cantidad de caracteres selecionados 
function contador(value) {
    document.querySelector('.contador').innerHTML= value
}





//generar clave aleatiria mesclando los caracteres de los distintos array 
function generarClave(caracteres) {
     result = ''
    for (let i = 0; i <= caracteres; i++) {
        result += ListCaracteresClave.charAt(Math.floor(Math.random() *  ListCaracteresClave.length))
    }
    //mostrar el valor generado en el input de la interfaz
    inputMostrarClave.value= result

    //indicador de seguridad
    validar_seguridad(result.length)
}





//copiar al portapapeles la clave
 document.querySelector(".copy").onclick = function() {
    let clave = document.querySelector('.inputClave').value
 
    navigator.clipboard.writeText(clave)
    .then(() => {
        console.log('texto copiado');
    })
    .catch(err => {
        console.error('Error al copiar texto ', err);
    });
   
    
}


function validar_seguridad(valor) {
    if (valor <= 5 ) {
        niveSeguridad.innerHTML='Bajo'
        document.querySelector('.valores_1').style.background='#db2f23'
        document.querySelector('.valores_2').style.background='#db2f23'
        document.querySelector('.valores_3').style.background='transparent'
        document.querySelector('.valores_4').style.background='transparent'


    }
    else if (valor > 5 && valor <=15) {
        niveSeguridad.innerHTML='Medio'
        document.querySelector('.valores_1').style.background='#cfdb23'
        document.querySelector('.valores_2').style.background='#cfdb23'
        document.querySelector('.valores_3').style.background='#cfdb23'
        document.querySelector('.valores_4').style.background='transparent'

    }
    else if (valor > 15 && valor <=25) {
        niveSeguridad.innerHTML='Alto'
        document.querySelector('.valores_1').style.background='#26B139'
        document.querySelector('.valores_2').style.background='#26B139'
        document.querySelector('.valores_3').style.background='#26B139'
        document.querySelector('.valores_4').style.background='#26B139'

    }
}

