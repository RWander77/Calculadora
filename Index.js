//Calculadora de partidas Rankeadas

function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
    let nivel;


    // Define o nível com base no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna o saldo e o nível
    return { saldoVitorias, nivel };
}

// Exemplo de uso da função
const vitorias = 75; // exemplo de vitórias
const derrotas = 25; // exemplo de derrotas
const resultado = calcularNivel(vitorias, derrotas);

// Exibe a mensagem final
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
