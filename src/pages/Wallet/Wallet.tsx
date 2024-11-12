import { Link } from "react-router-dom"
import { usarUsuario } from "../../components/userContext/UserContext"
import { BiDownArrow, BiLogIn, BiUpArrow, BiUserPlus } from "react-icons/bi"
import StockCard from "../../components/stockCard/StockCard"
import { useState } from "react"
import axios from "axios"

export default function Wallet() {
    const { usuario, autenticarUsuario } = usarUsuario()

    const [response, setResponse] = useState("")

    const [acoes, setAcoes] = useState(false)
    const [fundosImobiliarios, setFundosImobiliarios] = useState(false)
    const [rendasFixas, setRendasFixas] = useState(false)

    /*
    const [listaAcoes, setListaAcoes] = useState<Acao[]>([]);
    const [listaFundosImobiliarios, setListaFundosImobiliarios] = useState<FundoImobiliario[]>([]);
    const [listaRendasFixas, setListaRendasFixas] = useState<RendaFixa[]>([]);
    */

    const handleDelete = async (id: number, tipo: number) => {
        try {
            switch (tipo) {
                case 1:
                    setResponse(await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/acoes/${id}`));
                    //setListaAcoes((prev) => prev.filter((acao) => acao.id !== id));
                    break;
                case 2:
                    setResponse(await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/fundosimobiliarios/${id}`));
                    //setListaFundosImobiliarios((prev) => prev.filter((fii) => fii.id !== id));
                    break;
                case 3:
                    setResponse(await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/rendasfixas/${id}`));
                    //setListaRendasFixas((prev) => prev.filter((renda) => renda.id !== id));
                    break;
            }
            if (usuario != null) autenticarUsuario(usuario.email, usuario.senha);
        } catch (error) {
            console.error("Erro ao apagar ativo financeiro:", error);
        }
    };

    function toggleAcoes() {
        if (acoes) {
            setAcoes(false)
        } else {
            setAcoes(true)
        }
    }

    function toggleFundosImobiliarios() {
        if (fundosImobiliarios) {
            setFundosImobiliarios(false)
        } else {
            setFundosImobiliarios(true)
        }
    }

    function toggleRendasFixas() {
        if (rendasFixas) {
            setRendasFixas(false)
        } else {
            setRendasFixas(true)
        }
    }

    return (
        <div className="grid grid-cols-1 gap-1 flex-auto justify-center">
            <div className="flex justify-center space-x-8 px-6 py-16">
                {usuario == null ?
                    (
                        <div className="bg-gradient-to-b from-blue-600 to-blue-500 rounded-md drop-shadow p-6">
                            <p className="text-white text-4xl text-center">Opa! Uma conta é necessária para acessar essa página.</p>
                            <div className="m-4 border-2 border-dashed border-blue-400" />
                            <div className="flex justify-center space-x-16 mt-4">
                                <Link to="/register" className="flex justify-between space-x-1 items-center bg-blue-700 p-4 rounded-md drop-shadow hover:bg-blue-800">
                                    <BiUserPlus size="32" color="white" />
                                    <p className="text-2xl text-white">Cadastrar-se</p>
                                </Link>
                                <Link to="/login" className="flex justify-between space-x-1 items-center bg-blue-700 p-4 rounded-md drop-shadow hover:bg-blue-800">
                                    <BiLogIn size="32" color="white" />
                                    <p className="text-2xl text-white">Entrar</p>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-gradient-to-b from-blue-600 to-blue-500 rounded-md drop-shadow p-6">
                            <p className="text-white text-4xl text-center">Minha Carteira - {usuario.nome}</p>
                            <div className="m-4 border-2 border-dashed border-blue-400" />
                            <div className="bg-gradient-to-b from-blue-700 to-blue-600 rounded-md drop-shadow p-6 mt-12">
                                <button className="flex justify-between items-center space-x-4" onClick={toggleAcoes}>
                                    <p className="text-white text-4xl text-center">Ações</p>
                                    {acoes ?
                                        <BiUpArrow size={32} color="white" /> :
                                        <BiDownArrow size={32} color="white" />}
                                </button>
                                {acoes && <div className="grid grid-cols-5 gap-4 bg-white rounded-md drop-shadow p-6 mt-6">
                                    {usuario.acoesFavoritas.map((acao) => (
                                        <StockCard
                                            tipo={1}
                                            id={acao.id}
                                            codigo={acao.codigoNegociacao}
                                            nome={acao.nome}
                                            precoAtual={acao.precoAtual}
                                            precoCompra={acao.precoCompra}
                                            dataCadastro={acao.dataCadastro}
                                            precoMinimo={acao.precoMinimo}
                                            precoMaximo={acao.precoMaximo}
                                            quantidade={acao.quantidade}
                                            rendimentoMensal={0}
                                            taxaRetorno={0}
                                            dataVencimento={""}
                                            handleDelete={() => handleDelete(acao.id, 1)} />
                                    ))}
                                </div>}
                            </div>
                            <div className="bg-gradient-to-b from-blue-700 to-blue-600 rounded-md drop-shadow p-6 mt-12">
                                <button className="flex justify-between items-center space-x-4" onClick={toggleFundosImobiliarios}>
                                    <p className="text-white text-4xl text-center">Fundos Imobiliários</p>
                                    {fundosImobiliarios ?
                                        <BiUpArrow size={32} color="white" /> :
                                        <BiDownArrow size={32} color="white" />}
                                </button>
                                {fundosImobiliarios && <div className="grid grid-cols-5 gap-4 bg-white rounded-md drop-shadow p-6 mt-6">
                                    {usuario.fundosImobiliariosFavoritos.map((fundoImobiliario) => (
                                        <StockCard
                                            tipo={1}
                                            id={fundoImobiliario.id}
                                            codigo={fundoImobiliario.codigoFii}
                                            nome={fundoImobiliario.nome}
                                            precoAtual={fundoImobiliario.precoAtual}
                                            precoCompra={fundoImobiliario.precoCompra}
                                            dataCadastro={fundoImobiliario.dataCadastro}
                                            precoMinimo={fundoImobiliario.precoMinimo}
                                            precoMaximo={fundoImobiliario.precoMaximo}
                                            quantidade={0}
                                            rendimentoMensal={fundoImobiliario.rendimentoMensal}
                                            taxaRetorno={0}
                                            dataVencimento={""}
                                            handleDelete={() => handleDelete(fundoImobiliario.id, 1)} />
                                    ))}
                                </div>}

                            </div>
                            <div className="bg-gradient-to-b from-blue-700 to-blue-600 rounded-md drop-shadow p-6 mt-12">
                                <button className="flex justify-between items-center space-x-4" onClick={toggleRendasFixas}>
                                    <p className="text-white text-4xl text-center">RendasFixas</p>
                                    {rendasFixas ?
                                        <BiUpArrow size={32} color="white" /> :
                                        <BiDownArrow size={32} color="white" />}
                                </button>
                                {rendasFixas && <div className="grid grid-cols-5 gap-4 bg-white rounded-md drop-shadow p-6 mt-6">
                                    {usuario.rendasFixasFavoritas.map((rendaFixa) => (
                                        <StockCard
                                            tipo={1}
                                            id={rendaFixa.id}
                                            codigo={rendaFixa.codigo}
                                            nome={rendaFixa.nome}
                                            precoAtual={rendaFixa.precoAtual}
                                            precoCompra={rendaFixa.precoCompra}
                                            dataCadastro={rendaFixa.dataCadastro}
                                            precoMinimo={rendaFixa.precoMinimo}
                                            precoMaximo={rendaFixa.precoMaximo}
                                            quantidade={0}
                                            rendimentoMensal={0}
                                            taxaRetorno={rendaFixa.taxaRetorno}
                                            dataVencimento={rendaFixa.dataVencimento}
                                            handleDelete={() => handleDelete(rendaFixa.id, 1)} />
                                    ))}
                                </div>}
                            </div>
                        </div>
                    )
                }
            </div>
            {response != null && response != "" &&
                <p className="text-white text-2xl text-center">{response}</p>}
        </div>
    )
}