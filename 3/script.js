// Simulando a leitura de 9 pessoas
const nomes = ["João", "Maria", "Pedro", "Lucas", "Beatriz", "Julia", "Marcos", "Ana", "Larissa"];
const idades = [20, 15, 17, 30, 12, 18, 45, 16, 22];

console.log("Listagem de pessoas menores de idade:");

for (let i = 0; i < nomes.length; i++) {
    if (idades[i] < 18) {
        console.log(`Nome: ${nomes[i]} - Idade: ${idades[i]}`);
    }
}