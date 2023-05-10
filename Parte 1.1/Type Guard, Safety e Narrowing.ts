`
    Type guard: In
        O operador in verifica se o objeto possui uma propriedade com o 
        mesmo nome da string comparada "propriedade" in obj;

`;

const objeto: {nome: string;} = {
    nome: "Origamid"
}

if ("nome" in objeto) {
    console.log("The name exists");
}