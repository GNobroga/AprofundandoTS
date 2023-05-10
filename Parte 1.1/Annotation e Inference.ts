`
Com o TypeScript podemos indicar qual será o tipo de dado de uma variável atrave´s
de anotações (variable: type)

`;
////// Annotations /////////

const produto: string = "Livro";

let preco: number = 200;

const carro: {marca: string; portas: number;} = {
    marca: "Samsung",
    portas: 4
};

function sum(x: number, y: number): number {
    return x + y;
}

////// Inference ////////////

const myName = "Gabriel"
let age = 21 