import { useState } from "react";
import Relatorio from "../../model/Relatorio";
import axios from "axios";
import { BiLoaderAlt, BiSearch } from "react-icons/bi";

function Stocks(){
    const [codigo, setCodigo] = useState("");
    const [resultado, setResultado] = useState<Relatorio | null>(null);
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false)

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setCarregando(true)
            setErro("");
            const resposta = await axios.get<Relatorio>(`http://localhost:8080/api/v1/relatorios/${codigo}`);
            setResultado(resposta.data);
            setCarregando(false)
        } catch (err) {
            setErro("Erro ao buscar dados da API. Tente novamente.");
            setCarregando(false)
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 gap-1 flex-auto justify-center">
                <div className="flex justify-center space-x-8 px-6 py-16">
                    <div className="bg-gradient-to-b from-blue-600 to-blue-500 rounded-md drop-shadow p-6">
                        <div className="flex justify-center items-center space-x-4">
                            <BiSearch size={32} color="white" />
                            <p className="text-white text-4xl text-center">Buscar Ativos Financeiros</p>
                        </div>
                        <div className="m-4 border-2 border-dashed border-blue-400"/>
                        <p className="text-white text-2xl mt-12">Por favor, digite o código do ativo a ser pesquisado:</p>

                        <form onSubmit={handleSearch} className="flex flex-col space-y-4 mt-6">
                            <input
                                type="text"
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                                placeholder="Digite o código do ativo..."
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-center"
                            />
                            <button
                                type="submit"
                                className="flex items-center justify-center bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 hover:text-gray-200"
                            >
                                {carregando ? (<BiLoaderAlt size={32} className="animate-spin"/>) : (<p>Buscar</p>)}
                            </button>
                        </form>

                        {erro && <p className="text-red-500 mt-4">{erro}</p>}

                        {resultado && (
                            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                            <h2 className="text-xl font-bold">Resposta:</h2>
                            <p><strong>Código de Negociação:</strong> {resultado.codigoNegociacao}</p>
                            <p><strong>Código de Exibição:</strong> {resultado.codigoExibicao}</p>
                            <p><strong>Descrição:</strong> {resultado.descricao}</p>
                            <p><strong>Tipo:</strong> {resultado.tipo}</p>
                            <p><strong>Preço Atual:</strong> {resultado.precoAtual} $</p>
                            <p><strong>Alteração:</strong> {resultado.alteracao} $</p>
                            <p><strong>Porcentagem de Alteração:</strong> {resultado.porcentagemAlteracao} %</p>
                            <p><strong>Maior Preço Diário:</strong> {resultado.maiorPrecoDiario} $</p>
                            <p><strong>Menor Preço Diário:</strong> {resultado.menorPrecoDiario} $</p>
                            <p><strong>Preço de Abertura:</strong> {resultado.precoAbertura} $</p>
                            <p><strong>Preço de Fechamento Anterior:</strong> {resultado.precoFechamentoAnterior} $</p>
                            <p><strong>Timestamp:</strong> {new Date(resultado.timestamp * 1000).toLocaleString()}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stocks