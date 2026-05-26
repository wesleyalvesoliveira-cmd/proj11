// Simulando a leitura de 7 nomes
const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda", "Gabriel"];

console.log("Listagem na ordem inversa:");

// Começa do último índice (comprimento - 1) e vai até 0
for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
}