`
    as
        Com o Type Assertion é possível indicar ao TypeScript qual o tipo
        de dado esperado com a palavra-chave as. Só é possível indicar tipos
        que possuam relação com o tipo original.


    -- Evitar isso.

`;

const video = document.querySelector(".player") as HTMLVideoElement;

video.volume = 200;



`
    Operador: ! - non-null operator


    Indica que não existe a possibilidade do dado ser null.

`;

const video2 = document.querySelector(".player")!;

