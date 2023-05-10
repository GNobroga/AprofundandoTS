`
    Decorator
`;


`
    É necessário tipar o construtor da classe com e restringir o genérico.
    Para tipar o construtor é necessário utilizar o operador new.
    new () => void;
`;


interface Construtor {
    new (...args: any[]): any;
}

@decorator
class Pessoa1 {
    constructor(public name: string) {}
}


function decorator(target: Construtor): any {
    return class extends target {
        constructor(...args: any) {
            console.log("kkkkk");
            super(...args);
        }
    }
}

const p2 = new Pessoa1("José");


`//////////////// Decorator Factories ////////////////`;

function rule(...rules: string[]): any {
    return function <T extends new (...args: any[]) => any>(target: T):  T {
        return class extends target {
            constructor(...args: any[]) {
                if (args[0] != rules[0]) 
                    args[0] = "Macaco";
                args[1] = parseInt(rules[1]) - args[1];
                super(...args);
            }
        }
    }
}

@rule("Gabriel", "2022")
class Player {
    constructor (public name: string, public ano: number) {}

    public get getName(): string {
        return this.name;
    }

    public set setName(name: string) {
        this.name = name;
    }

    public get getAno(): number {
        return this.ano;
    }
}

const pl = new Player("José", 2000);

console.log(pl.getName);


`/////////////////// Composição de decoradores ///////////////////`;


@decorator
@rule("Gabriel", "2022")
class Test {

}

`
    ---- DECORADORES DE MÉTODO (METHOD DECORATOR) ---- 
`;


function decoratorMethod(
    classPrototype: any, 
    nameMethod: string, 
    properties: PropertyDescriptor
): PropertyDescriptor {
    console.log(classPrototype);
    console.log(nameMethod);
    console.log(properties);
    return {
     
    };
}

class Calculadora {

    @decoratorMethod
    public sum(...args: number[]): string {
        return `${args.reduce((x, y) => x + y, 0)}`;
    }
}

const c1 = new Calculadora();

console.log(c1.sum(1,2,3,4,5));


`
    DECORADORES DE PARÂMETROS (PARAMETER DECORATOR)
`

function decoratorParams(
    classPrototype: any,
    nomeMetodo: string | symbol,
    index: number
): any {
    return {}
}

class Fudeu {

    public xingar(@decoratorParams message: string): void {
        console.log(message);
    }
}


`

    DECORADORES DE PROPRIEDADES (PROPERTY DECORATORS)

`;

function decoratorProperty(
    classPrototype: any, 
    nome: string | symbol 
): any {

}

class Test2 {
    @decoratorProperty
    public usuario: string = "";

}