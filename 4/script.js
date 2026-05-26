const vetor1 = [1, 2, 3, 4, 5];
const vetor2 = [3, 4, 5, 6, 7];

const resultado = [];
let indexResultado = 0;

// Percorre o primeiro vetor
for (let i = 0; i < vetor1.length; i++) {
    const elementoAtual = vetor1[i];
    
    // Verifica se o elemento existe no vetor2
    let existeNoVetor2 = false;
    for (let j = 0; j < vetor2.length; j++) {
        if (elementoAtual === vetor2[j]) {
            existeNoVetor2 = true;
            break;
        }
    }
    
    // Se existe no vetor2, verifica se já não foi adicionado ao resultado (evitar repetição)
    if (existeNoVetor2) {
        let jaEstaNoResultado = false;
        for (let k = 0; k < indexResultado; k++) {
            if (resultado[k] === elementoAtual) {
                jaEstaNoResultado = true;
                break;
            }
        }
        
        // Se for um elemento novo na interseção, adiciona usando o índice manual
        if (!jaEstaNoResultado) {
            resultado[indexResultado] = elementoAtual;
            indexResultado++;
        }
    }
}

console.log("Vetor 1:", vetor1);
console.log("Vetor 2:", vetor2);
console.log("Resultado (Interseção):", resultado);