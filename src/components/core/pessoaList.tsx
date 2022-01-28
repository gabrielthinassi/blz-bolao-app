import { IconeEdit, IconeTrash } from "../icons";
import Pessoa from '../../model/Pessoa'

interface PessoaProps {
    pessoas?: Pessoa[]
    fEditar?: (pessoa: Pessoa) => void
    fExcluir?: (pessoa: Pessoa) => void
}

export default function PessoaList(props: PessoaProps) {

    const renderizaLinhas = () => {
        const list = props.pessoas || []
        return list.map(pessoa => (
            <tr key={pessoa._id}>
                <td>{pessoa.nome}</td>
                <td>{pessoa.tipo}</td>
                <td>{pessoa.status}</td>
                <td>{pessoa.observacao}</td>
                <td>
                    <button onClick={() => props.fEditar(pessoa)}>
                        {IconeEdit(6)}
                    </button>
                    <button
                        className={`
                            h-5 w-5 m-2 rounded-md
                            text-gray-400 hover:text-red-400
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
            <table className="table-auto justify-center items-center">
                <thead>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Status</th>
                    <th>Observação</th>
                    <th>Ações</th>
                </thead>
                <tbody className="table-auto justify-center items-center">
                    {renderizaLinhas()}
                </tbody>
            </table>
        </div>
    )
}