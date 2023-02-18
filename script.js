const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const bnt = document.querySelector('#btnCalcular');
const parrafo = document.getElementById('result');
const select = document.querySelector('#options')

function generarResultado(text) {
    const card = document.createElement('p');
    card.classList.add('card')
    card.innerText = text;
    return card;
}

function cambioSelect() {

    const value = select.value;
    console.log('Esta cambiando el select: ' + value);

    return value;
    
}

function btnCalcular() {

    const valorSelect = cambioSelect()

     
    valor1 = parseInt(input1.value);
    valor2 = parseInt(input2.value);
    
    
    let resultado ;
    
    switch (valorSelect) {
        case "suma":
            resultado = (valor1 + valor2);
            
            break;
        case 'resta':
            resultado = (valor1 - valor2);
                break;
        case 'multiplicación':
            resultado = (valor1 * valor2);
                break;
        case 'division':
            resultado = (valor1 / valor2);
            break;
    }
    
    console.log(resultado);
    

    // parrafo.innerText = "Resultado: " + resultado;
    const rest = `Resultado de la ${valorSelect}: ${resultado}`;
    const pCard = generarResultado(rest);
    parrafo.appendChild(pCard);
    
    
}






