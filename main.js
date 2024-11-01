const pantalla = document.querySelector(".numeros");
const pantalla2 = document.querySelector(".botones");
const inputDisplay = document.querySelector(".resultados"); 

pantalla.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        agregarCaracter(event.target.textContent);
    }
});

pantalla2.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        agregarCaracter(event.target.textContent);
    }
});

function agregarCaracter(caracter) {
    const operadores = ["+", "-", "*", "/"];
    const ultimoCaracter = inputDisplay.value.slice(-1);


    if (inputDisplay.value === "0" && !operadores.includes(caracter)) {
        inputDisplay.value = caracter;
    } else {
     
        if (!(operadores.includes(ultimoCaracter) && operadores.includes(caracter))) {
            inputDisplay.value += caracter;
        }
    }
}

function limpiarCalculdora() {
    const borrar = document.querySelector(".borrar");
    borrar.addEventListener("click", () => {
        inputDisplay.value = "0";
    });
}

limpiarCalculdora();

function resultado() {
    const igual = document.querySelector(".igual");
    igual.addEventListener("click", () => {
        try {
            const expresion = inputDisplay.value;
            inputDisplay.value = eval(expresion);
        } catch (e) {
            inputDisplay.value = "Error";
        }
    });
}

resultado();