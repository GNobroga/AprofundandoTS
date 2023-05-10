`
Indica que não sabemos o tipo de dados que pode ser passado. Diferente do any,
o unknown só irá permitir o uso de métodos quando a Type Safety estiver garantida.

`;

function typeGuard(value: unknown): void {
    if (typeof value == "number") {
        console.log(value.toFixed(2));
    }
}