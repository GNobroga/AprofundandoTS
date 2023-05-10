const {body}: {body: HTMLElement} = document;

type Product = {
    name: string;
    price?: number;
}

function handleData({name, price}: Product): void {
    console.log(name);
}

handleData({
    name: "Gabriel Cardoso Girarde"
})


`

    ...rest

    O opereador ...rest retorna uma Array

`;

function sum(operation: string, ...values: number[]): number {
    if (operation === "diminuir") return values.reduce((x, y) => x - y);
    return values.reduce((x, y) => x + y);

    
}

sum("diminuir", 1,2,3,4,5,6,78);