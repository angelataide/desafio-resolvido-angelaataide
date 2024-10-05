/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

let paises = {};

while (true) {
  let pais = prompt("Digite o nome do país (ou 'sair' para encerrar):");
  if (pais.toLowerCase() === 'sair') break;

  let ouro = parseInt(prompt("Digite o número de medalhas de ouro:"));
  let prata = parseInt(prompt("Digite o número de medalhas de prata:"));
  let bronze = parseInt(prompt("Digite o número de medalhas de bronze:"));

  let total = ouro + prata + bronze;
  paises[pais] = total;
}

// Ordenar o objeto por valor (total de medalhas) em ordem decrescente
let ranking = Object.entries(paises).sort((a, b) => b[1] - a[1]);

// Exibir o ranking em um alerta
let mensagem = "## Ranking de medalhas:\n";
ranking.forEach(([pais, total]) => {
  mensagem += `#${pais}: ${total} medalhas\n`;
});
alert(mensagem);