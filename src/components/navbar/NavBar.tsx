import { BiBarChartAlt, BiHelpCircle, BiHome, BiSolidBarChartAlt2, BiSolidBarChartSquare, BiUserCircle, BiWallet } from "react-icons/bi"
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
                    <Link to="/users" className="flex justify-between space-x-1 items-center">
                        <BiUserCircle size="24" color="white" />
                        <p className="text-2xl text-white">Login</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavBar