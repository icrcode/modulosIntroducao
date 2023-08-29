const entradaDados = require('./entradaDados');
const processamentoDados = require('./processamentoDados');
const exibirResultado = require('./exibirResultado');

(async () => {
    const numFuncionarios = 2;
    const funcionarios = [];

    for (let i = 1; i <= numFuncionarios; i++) {
        const dados = await entradaDados(i);
        funcionarios.push(processamentoDados(dados));
    }

    funcionarios.forEach((resultado, index) => {
        console.log(`\nDados do Funcionário ${index + 1}:`);
        exibirResultado(resultado);
    });

})();
