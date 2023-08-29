module.exports = function exibirResultado(resultado) {
    console.log(`Nome: ${resultado.nome}`);
    console.log(`Salário Bruto: R$:${resultado.salarioBruto.toFixed(2)}`);
    console.log(`Desconto INSS: R$:${resultado.inss.toFixed(2)}`);
    console.log(`Desconto Imposto: R$:${resultado.imposto.toFixed(2)}`);
    console.log(`Salário Líquido: R$:${resultado.salarioLiquido.toFixed(2)}`);
};
