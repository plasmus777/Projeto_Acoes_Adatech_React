interface FundoImobiliario {
    id: number;
    nome: string;
    precoAtual: number;
    precoCompra: number;
    dataCadastro: string;
    precoMinimo: number;
    precoMaximo: number;
    codigoFii: string;
    rendimentoMensal: number;
    precoVenda: number;
}

export default FundoImobiliario