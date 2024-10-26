import { BiLogoGithub } from "react-icons/bi"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            <div className="flex justify-center space-x-8 px-6 py-8 grow bg-gradient-to-b from-gray-600 to-gray-700 drop-shadow">
                <div className="flex justify-between space-x-8 items-center">
                    <p className="text-xl text-white">Projeto Ações Adatech - 2024</p>
                    <Link to="https://github.com/plasmus777/Projeto_Acoes_Adatech" target="_blank" className="hover:animate-bounce hover:text-gray-300"><BiLogoGithub size="32" color="white"/></Link>
                </div>
            </div> 
        </>
        )
}

export default Footer