`

    Funciona em parte como o extends para interfaces, mas pode
    ser utilizado em Types

`;

type Produto = {
    preco: number;
};

type Carro = {
    rodas: number;
    portas: number;
};

function handleProdutoCarro(dados: Produto & Carro): void {
    dados.rodas;
    dados.portas;
    dados.preco;
}