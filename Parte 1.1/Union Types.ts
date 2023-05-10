`
É comum termos funções que podem retornar ou receber tipos diferentes. Para
isso usamos a barra vertical para indicar um tipo ou outro.
    string | number | boolean
`;

let total: string | number = 200;
total = "4000";


function toNumber(value: number | string): number {
    if (typeof value == "string") Number(value);
    if (typeof value == "number") return value;
    throw new TypeError("Value deve ser um número ou uma string");
}

console.log(toNumber("524678"));

