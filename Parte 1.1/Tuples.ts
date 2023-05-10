`
    Tuples são arrays que possuem dados em posições fixas.
`;

const tuple: [string, number] = ["Gabriel", 200];

`
    as const

        Torna um dado readonly e infere o tipo de dado mais específico possível.
        Em métodos que retornam Arrays, as mesmas são transformadas em Tuples.

`

function getText1(selector: string): null | [HTMLElement, string] {
    const e = document.querySelector<HTMLElement>(selector)!;
    return [e, e.innerText];
}

const t1 = getText1("button") // É a mesma coisa que as const exceto que as const torna readonly

function getText2(selector: string) {
    const e = document.querySelector<HTMLElement>(selector);
    if(e) {
        return [e, e.innerText] as const;
    }
    return null;
}

const t2 = getText2("button");



