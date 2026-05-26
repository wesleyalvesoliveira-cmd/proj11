// Simulando a leitura de 8 números reais
const numeros = [5.5, 7.0, 4.2, 9.1, 6.8, 3.5, 8.0, 10.0];

let soma = 0;

// Calcula a soma manual
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

const media = soma / numeros.length;
console.log(`Média dos valores: ${media.toFixed(2)}`);
console.log("Valores acima da média:");

// Encontra e mostra os valores acima da média
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > media) {
        console.log(numeros[i]);
    }
}