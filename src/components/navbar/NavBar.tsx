import { BiBarChartAlt, BiHelpCircle, BiHome, BiLogIn, BiLogOut, BiWallet } from "react-icons/bi"
import { Link } from "react-router-dom"
import { usarUsuario } from "../userContext/UserContext";

function NavBar() {
    const { usuario, desconectarUsuario } = usarUsuario();

    return (
        <>
            <div className="flex justify-between space-x-8 px-6 py-4 grow bg-gradient-to-r from-blue-700 to-blue-500 drop-shadow">
                <div className="flex justify-between space-x-8 items-center">
                    <p className="text-2xl text-white">Projeto Ações Adatech</p>
                </div>
                <div className="flex justify-between space-x-24 items-center">
                    <div className="flex justify-between space-x-8 items-center">
                        <Link to="/" className="flex justify-between space-x-1 items-center">
                            <BiHome size="24" color="white" />
                            <p className="text-2xl text-white">Início</p>
                        </Link>
                        <Link to="/stocks" className="flex justify-between space-x-1 items-center">
                            <BiBarChartAlt size="24" color="white" />
                            <p className="text-2xl text-white">Buscar Ativos</p>
                        </Link>
                        <Link to="/wallet" className="flex justify-between space-x-1 items-center">
                            <BiWallet size="24" color="white" />
                            <p className="text-2xl text-white">Carteira</p>
                        </Link>
                        <Link to="/about" className="flex justify-between space-x-1 items-center">
                            <BiHelpCircle size="24" color="white" />
                            <p className="text-2xl text-white">Sobre</p>
                        </Link>
                    </div>
                    {usuario != null ? (
                        <button onClick={() => desconectarUsuario()} className="flex justify-between space-x-1 items-center">
                            <BiLogOut size="24" color="white" />
                            <p className="text-2xl text-white">Sair</p>
                        </button>
                    ) : (
                        <Link to="/login" className="flex justify-between space-x-1 items-center">
                            <BiLogIn size="24" color="white" />
                            <p className="text-2xl text-white">Entrar</p>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}

export default NavBar