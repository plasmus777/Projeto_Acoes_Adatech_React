import { useState } from "react";
import Relatorio from "../../model/Relatorio";
import axios from "axios";
import { BiArrowBack, BiLoaderAlt, BiSearch } from "react-icons/bi";
import { usarUsuario } from "../../components/userContext/UserContext";
import Popup from "../../components/popup/Popup";
import { BsSave } from "react-icons/bs";
import AcaoDTO from "../../model/dto/AcaoDTO";
import RendaFixaDTO from "../../model/dto/RendaFixaDTO";
import FundoImobiliarioDTO from "../../model/dto/FundoImobiliarioDTO";

function Stocks() {
    const { usuario, autenticarUsuario } = usarUsuario()
    const [codigo, setCodigo] = useState("")
    const [resultado, setResultado] = useState<Relatorio | null>(null)
    const [erro, setErro] = useState("")
    const [erroAdicionar, setErroAdicionar] = useState("")
    const [carregando, setCarregando] = useState(false)
    const [carregandoAdicionar, setCarregandoAdicionar] = useState(false)
    const [popupAdicionarCarteira, setPopupAdicionarCarteira] = useState(false)

    const [informacoes, setInformacoes] = useState({
        precoCompra: 0,
        precoMinimo: 0,
        precoMaximo: 0,
        quantidade: 0,
        rendimentoMensal: 0,
        taxaRetorno: 0,
        dataVencimento: ''
    });

    const [tipoSelecionado, setTipoSelecionado] = useState<number>(1);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInformacoes({
            ...informacoes,
            [name]: name === 'dataVencimento' ? value : parseFloat(value) || 0
        });
    };

    const handleSeletor = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTipoSelecionado(parseInt(event.target.value, 10));
    };

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


    async function botaoAdicionarParaCarteira() {
        if (popupAdicionarCarteira) {
            setPopupAdicionarCarteira(false)
        } else {
            setPopupAdicionarCarteira(true)
        }
    }

    async function adicionarParaCarteira(tipo: number, precoCompra: number, precoMinimo: number, precoMaximo: number,
        quantidade: number,
        rendimentoMensal: number,
        taxaRetorno: number, dataVencimento: string) {
        try {
            setCarregandoAdicionar(true)
            setErroAdicionar("")
            if (resultado != null && usuario != null) {
                switch (tipo) {
                    case 1:
                        const acao: AcaoDTO = {
                            nome: resultado.codigoExibicao,
                            precoAtual: resultado.precoAtual,
                            precoCompra: precoCompra,
                            dataCadastro: new Date().toISOString().split('.')[0],
                            precoMinimo: precoMinimo,
                            precoMaximo: precoMaximo,
                            codigoNegociacao: resultado.codigoNegociacao,
                            quantidade: quantidade,
                            precoVenda: (resultado.precoAtual * quantidade),
                            usuarioEmail: usuario.email
                        }
                        const r1 = await axios.post(`http://localhost:8080/api/v1/acoes`, acao);
                        console.log(r1.status.toString)
                        break;
                    case 2:
                        const fundoImobiliario: FundoImobiliarioDTO = {
                            nome: resultado.codigoExibicao,
                            precoAtual: resultado.precoAtual,
                            precoCompra: resultado.precoAtual,
                            dataCadastro: new Date().toISOString().split('.')[0],
                            precoMinimo: precoMinimo,
                            precoMaximo: precoMaximo,
                            codigoFii: resultado.codigoNegociacao,
                            rendimentoMensal: rendimentoMensal,
                            precoVenda: (resultado.precoAtual * quantidade),
                            usuarioEmail: usuario.email
                        }
                        const r2 = await axios.post(`http://localhost:8080/api/v1/fundosimobiliarios`, fundoImobiliario);
                        console.log(r2.status.toString)
                        break;
                    case 3:
                        const rendaFixa: RendaFixaDTO = {
                            nome: resultado.codigoExibicao,
                            precoAtual: resultado.precoAtual,
                            precoCompra: resultado.precoAtual,
                            dataCadastro: new Date().toISOString().split('.')[0],
                            precoMinimo: precoMinimo,
                            precoMaximo: precoMaximo,
                            codigo: resultado.codigoNegociacao,
                            taxaRetorno: taxaRetorno,
                            dataVencimento: new Date(dataVencimento).toISOString().split('.')[0],
                            precoVenda: (resultado.precoAtual * quantidade),
                            usuarioEmail: usuario.email
                        }
                        const r3 = await axios.post(`http://localhost:8080/api/v1/rendasfixas`, rendaFixa);
                        console.log(r3.status.toString)
                        break;
                    default:
                        setErroAdicionar("O tipo de ativo é inválido.")
                }
            }
            if (usuario != null) autenticarUsuario(usuario.email, usuario.senha);
            setCarregandoAdicionar(false)
        } catch (err) {
            setErroAdicionar("Erro ao adicionar o ativo à carteira. Tente novamente. " + err);
            setCarregandoAdicionar(false)
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 gap-1 flex-auto justify-center">
                <div className="flex justify-center space-x-8 px-6 py-16">
                    <div className="bg-gradient-to-b from-blue-600 to-blue-500 rounded-md drop-shadow p-6">
                        <div className="flex justify-center items-center space-x-4">
                            <BiSearch size={32} color="white" />
                            <p className="text-white text-4xl text-center">Buscar Ativos Financeiros</p>
                        </div>
                        <div className="m-4 border-2 border-dashed border-blue-400" />
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
                                {carregando ? (<BiLoaderAlt size={32} className="animate-spin" />) : (<p>Buscar</p>)}
                            </button>
                        </form>

                        {erro && <p className="text-red-500 mt-4">{erro}</p>}

                        {resultado && !carregando && (
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

                        {usuario != null && resultado && !carregando &&
                            <div className="flex flex-col space-y-4 mt-6">
                                <button onClick={botaoAdicionarParaCarteira} className=" bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 hover:text-gray-200">
                                    {carregandoAdicionar ? (<BiLoaderAlt size={32} className="animate-spin" />) : (<p>Adicionar à minha carteira</p>)}
                                </button>
                            </div>}

                        {erroAdicionar && <p className="text-red-500 mt-4">{erroAdicionar}</p>}
                    </div>
                </div>
                <Popup estaAberto={popupAdicionarCarteira} aoFechar={() => setPopupAdicionarCarteira(false)}>
                    <p className="text-black text-xl mt-4">Para adicionar o ativo"{codigo}" à sua carteira, selecione o tipo de ativo e complemente as informações abaixo:</p>

                    <input
                        name="precoCompra"
                        type="number"
                        value={informacoes.precoCompra}
                        onChange={handleChange}
                        placeholder="Digite o preço de compra..."
                        defaultValue={resultado?.precoAtual}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-center"
                    />
                    <input
                        name="precoMinimo"
                        type="number"
                        value={informacoes.precoMinimo}
                        onChange={handleChange}
                        placeholder="Digite o preço mínimo..."
                        defaultValue={resultado?.precoAtual}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-center"
                    />
                    <input
                        name="precoMaximo"
                        type="number"
                        value={informacoes.precoMaximo}
                        onChange={handleChange}
                        placeholder="Digite o preço máximo..."
                        defaultValue={resultado?.precoAtual}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-center"
                    />
                    <select value={tipoSelecionado} onChange={handleSeletor} defaultValue={1}>
                        <option value={1}>Ação</option>
                        <option value={2}>Fundo Imobiliário</option>
                        <option value={3}>Renda Fixa</option>
                    </select>
                    {tipoSelecionado == 1 && <input
                        name="quantidade"
                        type="number"
                        value={informacoes.quantidade}
                        onChange={handleChange}
                        placeholder="Digite a quantidade de ações..."
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-center"
                    />}
                    {tipoSelecionado == 2 && <input
                        name="rendimentoMensal"
                        type="number"
                        value={informacoes.rendimentoMensal}
                        onChange={handleChange}
                        placeholder="Digite o rendimento mensal..."
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-center"
                    />}
                    {tipoSelecionado == 3 && (<><input
                        name="taxaRetorno"
                        type="number"
                        value={informacoes.taxaRetorno}
                        onChange={handleChange}
                        placeholder="Digite a taxa de retorno..."
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-center"
                    />
                        <input
                            name="dataVencimento"
                            type="date"
                            value={informacoes.dataVencimento}
                            onChange={handleChange}
                            placeholder="Digite a data de vencimento..."
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-center"
                        />
                    </>)}

                    <div className="flex justify-center items-center space-x-16 mt-6">
                        <button className="flex justify-between space-x-1 items-center bg-green-700 hover:bg-green-800 rounded-md drop-shadow p-4" onClick={() => adicionarParaCarteira(tipoSelecionado, informacoes.precoCompra, informacoes.precoMinimo, informacoes.precoMaximo, informacoes.quantidade, informacoes.rendimentoMensal, informacoes.taxaRetorno, informacoes.dataVencimento)}>
                            <BsSave size={24} color="white" />
                            <p className="text-white text-xl">Adicionar à carteira</p>
                        </button>
                        <button className="flex justify-between space-x-1 items-center bg-blue-700 hover:bg-blue-800 rounded-md drop-shadow p-4" onClick={() => setPopupAdicionarCarteira(false)}>
                            <BiArrowBack size={24} color="white" />
                            <p className="text-white text-xl">Não</p>
                        </button>
                    </div>
                </Popup>
            </div>
        </>
    )
}

export default Stocks