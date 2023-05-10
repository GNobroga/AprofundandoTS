`
É possível definir a forma (shape) de um objeto usando uma sintaxe 
parecia com a de criação de objetos : {}

`;

const Pessoa: {name: string, age: number} = {
    name: "Gabriel", 
    age: 21
};

`A palavra chave type cria um atalho (alias) para um tipo customizado.`;

type TypePessoa = {
    name: string,
    age: number 
};

const Pessoa2: TypePessoa = {
    name: "Gabriel", 
    age: 21
};

type Categories = "A" | "B" | "C";

const categoria: Categories = "A";


`
    Interface funciona na maioria dos casos da mesma forma que type, porém
    possui uma sintaxe diferente. As interfaces são geralmente utilizadas
    para definirmos objetos.

`;

interface InterfaceCategoria {
   categoria: "A" | "B"
};

const motorista: InterfaceCategoria = {
    categoria: "A"
}