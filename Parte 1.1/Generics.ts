`
///////////////////////////////////////////////////////////////////////////
    Um tipo genérico é uma forma de declararmos um parâmetro para a nossa função,
    classe ou interface. Esse tipo poderá ser indicado no momento do uso da função
    através de <Type>.

`;

function generic<T>(value: T): T {
    return value;
}

generic<string>("Gabriel"); 
    //ou
generic("Gabriel");
    // São a mesma coisa

`
///////////////////////////////////////////////////////////////////////////
    É possível indicar que tipo genérico deve herdar de uma interface específica com o 
    extends
`;

function extractText<T extends HTMLElement>(e: HTMLElement) {

}

`
///////////////////////////////////////////////////////////////////////////
    Tipos default Generic

`;

type Action<T = string> = { // Assume a forma de string caso não seja passado nada no <>
    content: T
};

const a: Action = {content: "a"};

`
///////////////////////////////////////////////////////////////////////////
    Dois tipos genéricos 
`;

interface map<K = string, V = number> {
    obterValor(value: K): V;
};


const func: map = {
   obterValor(value: string) {
        return 1;
   }
}