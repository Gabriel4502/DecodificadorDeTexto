// let mensagem = document.querySelector('input').value;
var containerInputVazio = document.getElementById("emptyTextContainer");
var containerInputPreenchido = document.getElementById("resultado");
let textoTrabalhado = document.getElementById("textoResultante");
containerInputPreenchido.classList.toggle("hidden", true);

let texto = [];
function toggleContainer() {
    if (!(document.querySelector('input').value == '') && (containerInputVazio.className == "")) {
        containerInputVazio.classList.toggle("hidden", true);
        containerInputPreenchido.classList.toggle("hidden", false);
        containerInputPreenchido.classList.toggle("show", true);
    } else if (document.querySelector('input').value == '') {
        containerInputVazio.classList.toggle("hidden", false);
        containerInputPreenchido.classList.toggle("hidden", true);
        containerInputPreenchido.classList.toggle("show", false);
    }
}
toggleContainer();


function encrypt() {
    texto = (document.querySelector('input').value).split('');
    toggleContainer();
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a":
                texto.splice(i, 1, 'a', 'i');
                i++;
                break;

            case "e":
                texto.splice(i, 1, 'e', 'n', 't', 'e', 'r');
                i += 4;
                break;

            case "i":
                texto.splice(i, 1, 'i', 'm', 'e', 's');
                i += 3;
                break;

            case "o":
                texto.splice(i, 1, 'o', 'b', 'e', 'r');
                i += 3;
                break;

            case "u":
                texto.splice(i, 1, 'u', 'f', 'a', 't');
                i += 3;
                break;
        }

    }

    textoTrabalhado.innerHTML = texto.join('');
}


function decrypt() {
    toggleContainer();
    texto = (document.querySelector('input').value).split('');
    texto.map((item, index, arr) => {
        if (arr[index] + arr[index + 1] == "ai") texto.splice(index, 2, 'a');
        if (arr.slice(index, index + 5).join('') === "enter") texto.splice(index, 5, 'e');
        if (arr.slice(index, index + 4).join('') === "imes") texto.splice(index, 4, 'i');
        if (arr.slice(index, index + 4).join('') === "ober") texto.splice(index, 4, 'o');
        if (arr.slice(index, index + 4).join('') === "ufat") texto.splice(index, 4, 'u');

        console.log(texto.join(""));

    });

    console.log(texto)
    textoTrabalhado.innerHTML = texto.join('');
}

console.log(texto.join(''));

function copyText() {

}



