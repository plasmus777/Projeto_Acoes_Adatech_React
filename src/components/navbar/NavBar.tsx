import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
            <div className="flex justify-between space-x-8 px-6 py-4 grow bg-gradient-to-r from-blue-700 to-blue-500 drop-shadow">
                <div className="flex justify-between space-x-8 items-center">
                    <p className="text-2xl text-white">Projeto Ações Adatech</p>
                </div>
                <div className="flex justify-between space-x-24 items-center">
                    <div className="flex justify-between space-x-8 items-center">
                        <Link to="/"><p className="text-2xl text-white">Início</p></Link>
                        <Link to="/stocks"><p className="text-2xl text-white">Carteira</p></Link>
                        <Link to="/about"><p className="text-2xl text-white">Sobre</p></Link>
                    </div>
                    <div className="flex justify-between space-x-8 items-center">
                        <Link to="/users"><p className="text-2xl text-white">Login</p></Link>
                    </div>
                </div>
            </div> 
        </>
        )
}

export default NavBar