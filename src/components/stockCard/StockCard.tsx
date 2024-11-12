import { BiArrowBack, BiDetail, BiEditAlt, BiTrash } from "react-icons/bi";
import Popup from "../popup/Popup";
import { useState } from "react";

export interface StockCardProps {
    tipo: number

    id: number;
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

    handleDelete: (id: number, tipo: number) => void;
}

export default function StockCard({ tipo, id, codigo, nome, precoAtual, precoCompra, dataCadastro, precoMinimo, precoMaximo, quantidade, rendimentoMensal, taxaRetorno, dataVencimento, handleDelete }: StockCardProps) {
    const [popupDeletarAberto, setPopupDeletarAberto] = useState(false);
    const abrirPopupDeletar = () => setPopupDeletarAberto(true);
    const fecharPopupDeletar = () => setPopupDeletarAberto(false);

    /*
    const [popupRelatorioAberto, setPopupRelatorioAberto] = useState(false);
    const abrirPopupRelatorio = () => setPopupRelatorioAberto(true);
    const fecharPopupRelatorio = () => setPopupRelatorioAberto(false);

    const [popupEditarAberto, setPopupEditarAberto] = useState(false);
    const abrirPopupEditar = () => setPopupEditarAberto(true);
    const fecharPopupEditar = () => setPopupEditarAberto(false);
    */

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
                <button onClick={abrirPopupDeletar}>
                    <BiTrash size={24} color="red" />
                </button>
                <BiDetail size={24} color="white" />
                <BiEditAlt size={24} color="white" />
            </div>

            <Popup estaAberto={popupDeletarAberto} aoFechar={fecharPopupDeletar}>
                <p className="text-black text-xl mt-4">Deseja apagar o ativo "{codigo}"? Essa ação é irreversível.</p>
                <div className="flex justify-center items-center space-x-16 mt-6">
                    <button className="flex justify-between space-x-1 items-center bg-red-700 hover:bg-red-800 rounded-md drop-shadow p-4" onClick={() => handleDelete(id, tipo)}>
                        <BiTrash size={24} color="white" />
                        <p className="text-white text-xl">Sim</p>
                    </button>
                    <button className="flex justify-between space-x-1 items-center bg-blue-700 hover:bg-blue-800 rounded-md drop-shadow p-4" onClick={fecharPopupDeletar}>
                        <BiArrowBack size={24} color="white" />
                        <p className="text-white text-xl">Não</p>
                    </button>
                </div>
            </Popup>
        </div>
    )
}