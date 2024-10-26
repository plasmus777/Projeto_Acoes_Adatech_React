import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi"
import { Link } from "react-router-dom"

export interface ContactCardProps{
    nome: string
    nomeUsuario: string
    imagem: string
    linkedin: string
    github: string
}

function ContactCard({nome, nomeUsuario, imagem, linkedin, github} : ContactCardProps){
    return (
        <div className="flex justify-center max-w-sm m-6 p-6 rounded-md drop-shadow bg-gradient-to-b from-blue-500 to-blue-400">
            <img src={imagem} className="rounded-full m-auto size-32"/>
            <div className="m-4 border-2 border-dashed border-blue-400"/>
            <div className="m-6">
                <p className="text-white text-4xl text-center" title={nome}>{nome}</p>
                <div className="m-4 border-2 border-dashed border-blue-400"/>
                <p className="text-white text-2xl text-center mt-4 truncate max-w-36" title={nomeUsuario}>{nomeUsuario}</p>
                <div className="m-4 border-2 border-dashed border-blue-400"/>
                <div className="flex justify-center text-3xl text-white mt-4 space-x-6">
                    <Link to={linkedin} target="_blank" className="hover:animate-bounce hover:text-gray-300"><BiLogoLinkedin/></Link>
                    <Link to={github} target="_blank" className="hover:animate-bounce hover:text-gray-300"><BiLogoGithub/></Link>
                </div>
            </div>
        </div>
    )
}

export default ContactCard