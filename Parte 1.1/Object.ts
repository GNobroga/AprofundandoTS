`
    Duck Typing

        Um objeto quando passado em uma função, pode conter propriedade e 
        métodos além dos declarados na interface.

        "Se parece com um pato, nada como um pato e grasna como um pato,
        então provavelmente é um pato."
`;

interface Produto {
    nome: string;
    preco: number | string;
    quantidade: number;
    [key: string]: unknown; // Cria valores genéricos, ou seja, propriedades dinâmicas.
};

const p = {
    nome: "Notebook",
    quantidade: 10,
    preco: 2500,
    cor: "azul"
};

function getPriceProduto(produto: Produto): number {
    if (typeof produto.preco === "string") return Number(produto.preco);
    return produto.preco;
}

getPriceProduto(p);