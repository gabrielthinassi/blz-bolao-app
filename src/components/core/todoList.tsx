import { IconeCheck, IconeTrash } from "../icons";
import TodoModel from '../../model/Todo'

interface TodoListProps {
    todos?: TodoModel[]
    fRealizado?: (todo: TodoModel) => void
    fExcluir?: (todo: TodoModel) => void
}

export default function TodoList(props: TodoListProps) {

    const renderizaLinhas = () => {
        const list = props.todos || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>
                    <button
                        className={`
                            h-5 w-5 m-2 pr-6 rounded-md
                            text-gray-400 hover:text-green-600
                            ${todo.realizado ? 'text-green-600' : 'text-gray-400'}
                        `}
                        onClick={() => props.fRealizado(todo)}>
                        {IconeCheck}
                    </button>
                </td>
                <td className={todo.realizado ? 'line-through' : ''}>
                    {todo.descricao}
                    <button
                        className={`
                            h-5 w-5 m-2 rounded-md
                            text-gray-400 hover:text-red-400
                        `}
                        onClick={() => props.fExcluir(todo)}>
                        {IconeTrash(3)}
                    </button>
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className="table-auto justify-center items-center">
                <tbody className="table-auto justify-center items-center">
                    {renderizaLinhas()}
                </tbody>
            </table>
        </div>
    )
}