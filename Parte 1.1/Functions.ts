`
    A Interface de uma função é definida durante a sua declaração

`;

function somar1(a: number, b: number): number {
    return a + b;
}

// Parâmetros opcionais

function somar2(a: number, b: number, c?: number): number {
    return a + b + (c ? c : 0);
}

// Arrow Function

const subtrair = (a: number, b: number) => a - b;

// Criar types para função

type CallBack = (event: MouseEvent) => void;

// Retorno Never - Para funções que lançam um exception

function abort(message: string): never {
    throw new Error(message);
}

// Interface
 
interface Quadrado {
    lado: number;
    perimetro(lado: number): number;
}

function getSome(obj: Quadrado): void {

}

/*
    Function Overload

        Existem funções que retornam diferentes dados dependendo do argumento.

        Podemos declarar a interface dessas funções utilizando function overload. Basta
        declarar a interface antes da definição da mesma, utilizando o mesmo nome.

        O Overload deve ser compátivel com a função original

*/

function submit(values: number): number;
function submit(values: number | number[], message?: string): number | number[] {
    if (values instanceof Array) {
        return values;
    }
    return values;
}
