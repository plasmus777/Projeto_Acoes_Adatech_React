interface Acao {
    id: number;
    nome: string;
    precoAtual: number;
    precoCompra: number;
    dataCadastro: string;
    precoMinimo: number;
    precoMaximo: number;
    codigoNegociacao: string;
    quantidade: number;
    precoVenda: number;
}

export default Acao