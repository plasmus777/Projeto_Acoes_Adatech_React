interface Relatorio {
    codigoNegociacao: string;
    codigoExibicao: string;
    descricao: string;
    tipo: string;
    precoAtual: number;
    alteracao: number;
    porcentagemAlteracao: number;
    maiorPrecoDiario: number;
    menorPrecoDiario: number;
    precoAbertura: number;
    precoFechamentoAnterior: number;
    timestamp: number;
}

export default Relatorio