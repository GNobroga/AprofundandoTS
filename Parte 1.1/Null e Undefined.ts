`
null é um tipo primitivo que representa a ausência de valor. É comum 
em funções do DOM que fazem uma busca, retornarem null quando não são bem
sucedidas.

`;

const button: HTMLButtonElement | null = document.querySelector("button");

if (button) {
    button.click();
}



`
//// Propriedades Opcionais 

Podemos definir propriedades opcionais utilizando opcional?: string. Quando
opcional elas poderão sempre retornar como o valor definido ou undefined.
`

interface Product {
    nome?: string;
}