// // function boasVindas(nome) {
// //     document.write(`<h1>Olá, ${nome}</h1>`); 
// // }

// // boasVindas("João");

// function somar(numero1, numero2) {
//     // document.write (`<h1>A soma é: ${numero1 + numero2}</h1>`);
//     console.log(`A soma é: ${numero1 + numero2}`);
//     return numero1 + numero2;
// }

// somar(2,3);
// somar(5,10);

// document.write(`<h1>O resultado é: ${somar(1,1)}</h1>`);

function preencherSelects(tag,limite) {
    for(let i = 1; i <= limite; i++) {
        tag.innerHTML += `<option>${i}</option>>`;
    }
}

preencherSelects(dia,31);
preencherSelects(mes,12);

