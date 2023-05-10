`
    Com a palavra chave instanceof podemos verificar se um objeto é uma instância de outro.
    Além disso verifica se a função construtora herda de outra {extends}.

`;

class Pessoa {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const p = new Pessoa("Gabriel");

console.log(p instanceof Pessoa);