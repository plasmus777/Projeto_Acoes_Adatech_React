import { Link } from "react-router-dom"
import { usarUsuario } from "../../components/userContext/UserContext"

function Home(){
    const { usuario } = usarUsuario()
    
    return (
        <>
            <div className="grid grid-cols-1 gap-1 flex-auto justify-center">
                <div className="flex justify-center space-x-8 px-6 py-16">
                    <div className="flex justify-center space-x-6">
                        <div className="bg-gradient-to-b from-blue-600 to-blue-500 rounded-md drop-shadow p-6">
                            <p className="text-white text-4xl text-center">Sistema de Gerência de Ativos Financeiros</p>
                            <div className="m-4 border-2 border-dashed border-blue-400"/>
                            <p className="text-white text-2xl mt-12">Cadastre e gerencie ações, fundos imobiliários e rendas fixas dentro de uma carteira individual.</p>
                            <p className="text-white text-xl mt-12">Observação: é necessário criar uma conta de usuário para vincular aos registros.</p>
                        </div>

                        <div className="bg-gradient-to-b from-blue-600 to-blue-500 rounded-md drop-shadow p-6 place-content-center grid grid-cols-1 gap-6">
                            {usuario != null &&
                                <Link to="/wallet" className="text-white text-4xl bg-blue-700 rounded-md drop-shadow p-6 hover:bg-blue-800 hover:text-gray-200 drop-shadow">Cadastrar Ativo</Link>
                            }
                            {usuario == null &&
                                <Link to="/register" className="text-white text-4xl bg-blue-700 rounded-md drop-shadow p-6 hover:bg-blue-800 hover:text-gray-200 drop-shadow">Cadastrar Usuário</Link>
                            }
                        </div>
                    </div>
                </div>

                <div className="flex-col justify-center bg-gradient-to-b from-blue-600 to-blue-500 rounded-md drop-shadow mx-16 mb-16 p-6">
                    <p className="text-white text-3xl text-center">Requisitos</p>
                    <div className="m-4 border-2 border-dashed border-blue-400"/>
                    <p className="text-white text-xl mt-12">Para que o website funcione adequadamente, é necessário executar um servidor local da aplicação em Spring Boot na porta local 8080.</p>
                    <p className="text-white text-xl mt-12">Caso não tenha feito isso, siga as instruções de instalação/execução presentes no <Link className="text-bold text-purple-900 hover:text-purple-700" to="https://github.com/plasmus777/Projeto_Acoes_Adatech" target="_blank">GitHub do projeto</Link>.</p>
                </div>
            </div>
        </>
    )
}

export default Home