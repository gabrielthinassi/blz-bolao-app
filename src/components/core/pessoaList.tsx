import { IconeEdit, IconeTrash } from "../icons";
import Pessoa from '../../model/Pessoa'

interface PessoaProps {
    pessoas: Pessoa[]
    fEditar?: (pessoa: Pessoa) => void
    fExcluir?: (pessoa: Pessoa) => void
}

export default function PessoaList(props: PessoaProps) {

    const renderizaLinhas = () => {
        const list = props.pessoas || []
        return list.map((pessoa, i) => (
            <tr key={pessoa._id} 
                className={`
                    ${i % 2 === 0 ? 'bg-gray-600 dark:bg-slate-500' : 'bg-gray-500 dark:bg-slate-400'}
                `}>
                <td className="text-left p-2">{pessoa.nome}</td>
                <td className="text-left p-2">{pessoa.tipo}</td>
                <td className="text-left p-2">{pessoa.status}</td>
                <td className="text-left p-2">{pessoa.observacao}</td>
                <td className="flex">
                    <button
                        className={`
                            h-5 w-5 m-2 rounded-md
                            text-gray-800 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-600
                        `}
                        onClick={() => props.fEditar(pessoa)}>
                        {IconeEdit(6)}
                    </button>
                    <button
                        className={`
                            h-5 w-5 m-2 rounded-md
                            text-gray-800 hover:text-red-400 dark:text-gray-300 dark:hover:text-red-400
                        `}
                        onClick={() => props.fExcluir(pessoa)}>
                        {IconeTrash(6)}
                    </button>
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className="w-full rounded-xl overflow-hidden">
                <thead className={`
                    text-gray-800 bg-gradient-to-r from-slate-400 to-slate-500
                    dark:text-gray-200 dark:from-slate-600 dark:to-slate-800
                `}>
                    <tr>
                        <th className="text-left p-4">Nome</th>
                        <th className="text-left p-4">Tipo</th>
                        <th className="text-left p-4">Status</th>
                        <th className="text-left p-4">Observação</th>
                        <th className="text-left p-4">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizaLinhas()}
                </tbody>
            </table>
        </div>
    )
}