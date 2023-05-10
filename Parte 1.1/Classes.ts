`
    Modificadores de acesso:
        public
        private
        readonly 
        protected

    static

`;


class Product {

    private tipo: string = "Produto";

    get tipoProduto(): string {
        return this.tipo;
    }
}