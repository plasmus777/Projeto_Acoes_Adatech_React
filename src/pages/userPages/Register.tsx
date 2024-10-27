import { useState } from "react";
import axios from "axios";
import { BiLoaderAlt } from "react-icons/bi";
import { usarUsuario } from "../../components/userContext/UserContext";

export default function Register() {
    const { autenticarUsuario } = usarUsuario();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [resultado, setResultado] = useState<string>("");
    const [carregando, setCarregando] = useState(false)

    async function cadastrarUsuario(e: React.FormEvent) {
        e.preventDefault();
        try {
            setResultado("")
            setCarregando(true)
            const resposta = await axios.post(`http://localhost:8080/api/v1/usuarios`, { nome, email, senha });
            if (resposta.status === 201) {
                setResultado("Usuário cadastrado com sucesso.")
                setCarregando(false)
                autenticarUsuario(email, senha);
            }
        } catch (err) {
            setResultado("Erro ao cadastrar usuário.")
            setCarregando(false)
        }
    };

    return (
        <div className="grid grid-cols-1 gap-1 flex-auto justify-center">
            <div className="flex justify-center space-x-8 px-6 py-16">
                <div className="bg-gradient-to-b from-blue-600 to-blue-500 rounded-md drop-shadow p-6">
                    <p className="text-white text-4xl text-center">Cadastrar Usuário</p>

                    <form onSubmit={cadastrarUsuario} className="flex flex-col space-y-4 mt-6">
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite o nome do usuário..."
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-center"
                        />
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
                            {carregando ? (<BiLoaderAlt size={32} className="animate-spin" />) : (<p>Cadastrar</p>)}
                        </button>
                    </form>

                    {resultado != "" && resultado == "Usuário cadastrado com sucesso." ?
                        (<p className="text-green-300 mt-4 text-xl">{resultado}</p>

                        ) :
                        <p className="text-red-300 mt-4 text-xl">{resultado}</p>
                    }
                </div>
            </div>
        </div>
    )
}