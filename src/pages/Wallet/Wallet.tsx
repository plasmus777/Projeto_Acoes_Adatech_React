import { Link } from "react-router-dom"
import { usarUsuario } from "../../components/userContext/UserContext"
import { BiLogIn } from "react-icons/bi"

export default function Wallet() {
const { usuario } = usarUsuario()

    return (
        <div className="grid grid-cols-1 gap-1 flex-auto justify-center">
            <div className="flex justify-center space-x-8 px-6 py-16">
                {usuario == null ? 
                    (
                        <div className="bg-gradient-to-b from-blue-600 to-blue-500 rounded-md drop-shadow p-6">
                            <p className="text-white text-4xl text-center">Opa! Uma conta é necessária para acessar essa página.</p>
                            <div className="m-4 border-2 border-dashed border-blue-400"/>
                            <div className="flex justify-center space-x-16 mt-4">
                                <Link to="/register" className="flex justify-between space-x-1 items-center bg-blue-700 p-4 rounded-md drop-shadow hover:bg-blue-800">
                                    <BiLogIn size="32" color="white" />
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
                            <div className="m-4 border-2 border-dashed border-blue-400"/>
                            <div className="bg-gradient-to-b from-blue-700 to-blue-600 rounded-md drop-shadow p-6 mt-12">
                                <p className="text-white text-4xl text-center">Ações</p>
                                <div className="m-4 border-2 border-dashed border-blue-400"/>
                            </div>
                            <div className="bg-gradient-to-b from-blue-700 to-blue-600 rounded-md drop-shadow p-6 mt-12">
                                <p className="text-white text-4xl text-center">Fundos Imobiliários</p>
                                <div className="m-4 border-2 border-dashed border-blue-400"/>
                            </div>
                            <div className="bg-gradient-to-b from-blue-700 to-blue-600 rounded-md drop-shadow p-6 mt-12">
                                <p className="text-white text-4xl text-center">Rendas Fixas</p>
                                <div className="m-4 border-2 border-dashed border-blue-400"/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}