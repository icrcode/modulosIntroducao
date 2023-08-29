module.exports = function processamentoDados(dados) {
    const { nome, salarioBruto } = dados;
    let inss, imposto, descontoTotal;

    if (salarioBruto > 2500) {
        inss = salarioBruto * 0.08;
        imposto = salarioBruto * 0.11;
    } else {
        inss = salarioBruto * 0.05;
        imposto = 0;
    }

    descontoTotal = inss + imposto;
    const salarioLiquido = salarioBruto - descontoTotal;

    return { nome, salarioBruto, inss, imposto, salarioLiquido };
};
