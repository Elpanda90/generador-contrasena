let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
const cadenaCaracteres = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';
let contrasena = document.getElementById('contrasena');
function generar(){
    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);

    if( numeroDigitado < 8){
        alert('La cantidad de caracteres tiene que ser mayor a 8');
    }
    let password = ' ';
    for(let i=0; i<numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        //Indice de elemento aleatorio
        console.log(caracterAleatorio);
        password += caracterAleatorio;
    }
    contrasena.value = password;
}



