import { useState } from "react";
import { usarUsuario } from "../../components/userContext/UserContext";
import { BiLoaderAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const { usuario, autenticarUsuario } = usarUsuario();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [resultado, setResultado] = useState<string>("");
    const [carregando, setCarregando] = useState(false)

    const navigate = useNavigate();

    async function login(e: React.FormEvent) {
        e.preventDefault();
        try {
            setResultado("")
            setCarregando(true)
            autenticarUsuario(email, senha)
            setCarregando(false)
            navigate("/")
            if(usuario != null){
                setResultado("Usuário conectado com sucesso.")
            } else {
                setResultado("Erro ao conectar o usuário.")
            }
        } catch (err) {
            setResultado("Erro ao conectar o usuário.")
            setCarregando(false)
        }
    }

    return (
        <div className="grid grid-cols-1 gap-1 flex-auto justify-center">
            <div className="flex justify-center space-x-8 px-6 py-16">
                <div className="bg-gradient-to-b from-blue-600 to-blue-500 rounded-md drop-shadow p-6">
                    <p className="text-white text-4xl text-center">Conectar Usuário</p>

                    <form onSubmit={login} className="flex flex-col space-y-4 mt-6">
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite o e-mail do usuário..."
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-center"
                        />
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Digite a senha do usuário..."
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-center"
                        />
                        <button
                            type="submit"
                            className="flex items-center justify-center bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 hover:text-gray-200 drop-shadow"
                        >
                            {carregando ? (<BiLoaderAlt size={32} className="animate-spin" />) : (<p>Entrar</p>)}
                        </button>
                    </form>

                    {resultado != "" && resultado == "Usuário conectado com sucesso." ?
                        <p className="text-green-300 mt-4 text-xl">{resultado}</p> :
                        <p className="text-red-300 mt-4 text-xl">{resultado}</p>
                    }

                    <p className="text-white text-xl text-center pt-4">Não tem uma conta? </p>
                    <p className="text-center text-xl text-bold text-purple-900 hover:text-purple-700"><Link to="/register">Cadastre-se</Link></p>
                </div>
            </div>
        </div>
    )
}