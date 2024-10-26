import Acao from "./Acao";
import FundoImobiliario from "./FundoImobiliario";
import RendaFixa from "./RendaFixa";

interface Usuario {
    nome: string;
    email: string;
    senha: string;
    acoesFavoritas: Acao[];
    fundosImobiliariosFavoritos: FundoImobiliario[];
    rendasFixasFavoritas: RendaFixa[];
}

export default Usuario