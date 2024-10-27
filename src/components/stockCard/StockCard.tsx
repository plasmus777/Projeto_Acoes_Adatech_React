import { BiDetail, BiEditAlt, BiTrash } from "react-icons/bi";

export interface StockCardProps {
    tipo: number

    codigo: string;
    nome: string;
    precoAtual: number;
    precoCompra: number;
    dataCadastro: string;
    precoMinimo: number;
    precoMaximo: number;

    quantidade: number;

    rendimentoMensal: number;

    taxaRetorno: number;
    dataVencimento: string;
}

export default function StockCard({ tipo, codigo, nome, precoAtual, precoCompra, dataCadastro, precoMinimo, precoMaximo, quantidade, rendimentoMensal, taxaRetorno, dataVencimento }: StockCardProps) {
    return (
        <div>
            <div className="bg-gradient-to-b from-blue-800 to-blue-700 rounded-md drop-shadow p-6">
                <p className="text-white text-4xl text-center">{codigo}</p>
                <div className="m-4 border-2 border-dashed border-blue-400" />
                <p className="text-white text-xl mt-4">Nome: {nome}</p>
                <p className="text-white text-xl mt-4">Preço Atual: {precoAtual} $</p>
                <p className="text-white text-xl mt-4">Preço Compra: {precoCompra} $</p>
                <p className="text-white text-xl mt-4">Data de Cadastro: {new Date(dataCadastro).toLocaleString()}</p>
                <p className="text-white text-xl mt-4">Preço Mínimo: {precoMinimo} $</p>
                <p className="text-white text-xl mt-4">Preço Máximo: {precoMaximo} $</p>

                {tipo == 1 &&
                    <p className="text-white text-xl mt-4">Quantidade: {quantidade}</p>
                }

                {tipo == 2 &&
                    <p className="text-white text-xl mt-4">Rendimento Mensal: {rendimentoMensal} $</p>
                }

                {tipo == 3 &&
                    <>
                        <p className="text-white text-xl mt-4">Taxa de Retorno: {taxaRetorno} %</p>
                        <p className="text-white text-xl mt-4">Data de Vencimento: {new Date(dataVencimento).toLocaleString()}</p>
                    </>
                }
            </div>
            <div className="flex justify-between bg-blue-300 rounded-md drop-shadow p-2">
                <BiTrash size={24} color="red"/>
                <BiDetail size={24} color="white"/>
                <BiEditAlt size={24} color="white"/>
            </div>
        </div>
    )
}