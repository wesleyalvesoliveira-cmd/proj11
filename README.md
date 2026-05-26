# 📁 Exercícios de Vetores em JavaScript

Este repositório contém a resolução de 4 exercícios práticos focados na manipulação de vetores (arrays) em JavaScript. 

### ⚠️ Restrição Técnica Importante
Todos os algoritmos foram desenvolvidos **sem a utilização de métodos nativos de arrays** do JavaScript (como `.push()`, `.reverse()`, `.filter()`, `.map()`, `.includes()`, etc.). A manipulação, inserção e busca de dados foram feitas puramente através de estruturas de repetição (`for`) e controlo manual de índices, focando no desenvolvimento da lógica pura.

---

## 🚀 Exercícios Desenvolvidos

### 1. Nomes na Ordem Inversa (`exercicio1.js`)
* **Descrição:** Armazena o nome de 7 pessoas e faz uma listagem na ordem inversa daquela em que foram inseridos.
* **Abordagem:** Percorre o vetor do último índice (`length - 1`) até o índice `0`.

### 2. Números Acima da Média (`exercicio2.js`)
* **Descrição:** Armazena 8 números reais, calcula a média aritmética e exibe apenas os valores que estão acima dessa média.
* **Abordagem:** Um laço faz o somatório manual dos valores para obter a média; um segundo laço filtra e imprime os valores maiores que ela.

### 3. Relacionamento de Vetores - Menores de Idade (`exercicio3.js`)
* **Descrição:** Armazena o nome e a idade de 9 pessoas em dois vetores mapeados em paralelo. No final, exibe apenas os dados das pessoas menores de 18 anos.
* **Abordagem:** Utiliza o mesmo índice de controlo `i` para garantir que o nome e a idade impressos pertençam à mesma pessoa.

### 4. Interseção de Vetores sem Repetição (`exercicio4.js`)
* **Descrição:** Compara dois vetores de 5 elementos inteiros cada e gera um terceiro vetor contendo apenas os números que aparecem em ambos, sem duplicar elementos.
* **Abordagem:** Um algoritmo de busca aninhada valida elemento a elemento e controla manualmente o tamanho e o índice de inserção do vetor resultante.

---

## 🛠️ Tecnologias Utilizadas
* **JavaScript (ES6+)**
* **Node.js** (Ambiente de execução local)
* **Git & GitHub** (Controlo de versão e repositório remoto)

---

## 💻 Como Executar o Projeto