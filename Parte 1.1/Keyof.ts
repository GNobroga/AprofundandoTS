`
///////////////////////////////////////////////////////////////////////////
    keyof
        indica que o dado é uma chave de uma interface/Tipo.
`;

interface Produto {
    nome: string;
    preco: string;
};

let chave: keyof Produto;

chave = "preco";
chave = "nome";


`
///////////////////////////////////////////////////////////////////////////
    Podemos utilizar o typeof para indicar que um dado possui o mesmo tipo que outro
`;


type Empresa = {
    nome: string;
};

const empresa: Empresa = {
    nome: "Uniaves"
};

const auxiliar: typeof empresa = {
    nome: "Mega Loja"
};


`
///////////////////////////////////////////////////////////////////////////
    Keyof e mapped types
`;

//// Keyof

interface Jogador {
    nome: string;
    idade: number;
    camisa: string;
};

const j: keyof Jogador = "camisa";

// Mapped Types - Mapeando Tipos

interface Jogador {
    nome: string;
    idade: number;
    camisa: string;
};


type cores = "azul" | "branco" | "preto";

type MappedFromProps<T> = { // Percorrer cada propriedade da interface Jogador e atribui a propriedade com o tipo number
     [P in keyof T]: T[P]
};


// Obter tipo

interface Jogador {
    nome: string;
    idade: number;
    camisa: string;
};


type JogadorName = Jogador["nome"]; // Peguei o tipo da propriedade nome da interface Jogador