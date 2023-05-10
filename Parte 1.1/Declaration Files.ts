`
Podemos criar arquivos focados apenas na declaração de tipos e interfaces,
estes devem ser terminados em .d.ts;

O TypeScript não irá compilar eles, mas os tipos declarados poderão ser utilizados
globalmente na sua aplicação.


    fileName.d.ts
`;

interface Product {
    name: string;
    price: string;
    quantity: number;
};

`
Não é necessário criar um arquivo global ou .d.ts para ter um tipo global.
É possível também declarar dentro de um arquivo tipo module, usando o 
declare global {}.
`;

declare global {

    interface User {
        name: string;
        id: number;
    }
}

export {};