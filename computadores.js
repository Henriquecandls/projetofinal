// Simulando a lista de computadores (você pode substituir por dados reais do banco)
const computadores = [
    { id: 1, sala: "Sala 1", computador: "PC-01" },
    { id: 2, sala: "Sala 2", computador: "PC-02" },
    { id: 3, sala: "Sala 3", computador: "PC-03" }
];

// Função para exibir a lista de computadores
function exibirComputadores() {
    const listaElement = document.getElementById('computadores-lista');
    computadores.forEach(computador => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${computador.id} - Sala: ${computador.sala} - Computador: ${computador.computador}`;
        listaElement.appendChild(listItem);
    });
}

// Chama a função para exibir os computadores
exibirComputadores();
