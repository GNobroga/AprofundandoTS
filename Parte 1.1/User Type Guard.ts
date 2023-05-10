`
///////////////////////////////////////////////////////////////////////////
    Array

        Uma array não pode ser verificada com o typeof pois a mesma é um object.
        Podemos verificar se o dado é instaceof Array ou podemos usar a função
        Array.isArray()
`;

function getTotal(values: unknown): number {
    if (Array.isArray(values)) {
        return values.reduce((x, y) => x + y, 10);
    }
    return 0;
}


`
///////////////////////////////////////////////////////////////////////////
    Type Predicate


    Com o Type Predicate : arg is type, podemos indicar qual o tipo de argumento
    uma função boolean (que retorna boolean) recebeu para ser verdadeira.

`;

function isString(data: unknown): data is string { // Está indicando que retornará true quando o valor for string e false caso contrário.
    return typeof data === "string";
}

