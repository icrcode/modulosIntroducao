module.exports = function entradaDados(numeroFuncionario) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        rl.question(`Digite o nome do funcionário ${numeroFuncionario}: `, nome => {
            rl.question(`Digite o salário bruto do funcionário ${numeroFuncionario}: `, salarioBruto => {
                rl.close();
                resolve({ nome, salarioBruto: parseFloat(salarioBruto) });
            });
        });
    });
};
