`

    Partial

        Torna os atributos de um tipo opcionais

`;

interface Quadrado {
    x: number;
    y: number;
};

const obj: Partial<Quadrado> = {
    x: 100
};

`
    Pick

        Serve para pegar algumas propriedades de um tipo

`;

interface Quadrado {
    x: number;
    y: number;
};

type Posicao = Pick<Quadrado, "x">;

`
    Omit

        Oculta propriedades de um tipo

`;

interface Quadrado {
    x: number;
    y: number;
};


type Teste = Omit<Quadrado, "x">; // Só vai omitir o X.

`
    Exclude

        Permite excluir o U de um tipo T Exclude<T, U>

`;

type Color = "red" | "blue" | "green" | "black" | "white";

type newColors = Exclude<Color, "black" | "white"> // Exclui os atributos específicados de um tipo



`
    Extract

        Permite extrair U de um tipo T Extract<T, U>
`;

type Color2  = "red" | "blue" | "green";

type Color3 = Extract<Color2, "red">;

`

    Required - Torna atributos opcionais em obrigatórios.
    
    Readonly - Acrescenta os atributos de um tipo como readonly

`;

interface User {
    nome?: string;
    email?: string;
}

type newUser = Required<User>; ///

interface User {
    nome?: string;
    email?: string;
}

type newUser2 = Readonly<User>; ///


`
    NonNullable

        Exclui os valores nulos e undefined
`;

type Color4 = "black" | "pink" | "yellow" | null;

const c: NonNullable<Color4> = "black";

`

    Record  - Record<T, U>

        Concatena os tipos T como chave de um tipo U

`;

interface Url {
    url: string;
}

type Social = "facebook" | "instagram" | "youtube";

const midias: Record<Social, Url> = {
    facebook: {url: "url"},
    instagram: {url: "url"},
    youtube: {url: "url"}
};

`
    coditional types
`;


type MyType<T, U> = T extends U ? string : number; 

type test = string;

type newTest = test extends string ? "x" : "y";

