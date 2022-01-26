import { IconeAdd, IconeCancel, IconeSearch } from "../icons"
import TodoModel from '../../model/Todo'

interface TodoFormProps {
    todo: TodoModel
    fBuscar?: () => void
    fAdicionar?: () => void
    fCancelar?: () => void
    fOnChange?: (e) => void
}

export default function TodoForm(props: TodoFormProps) {

    const fOnKeyUp = (e: any) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.fBuscar() : props.fAdicionar()
        } else if (e.key === 'Escape') {
            props.fCancelar()
        }
    }

    return (
        <div role='form' className="flex justify-center px-5 py-2 text-lg">
            <input id='descricao'
                className="h-8 w-full pl-3 mr-4 rounded-md focus:bg-gray-100"
                placeholder='Adicione uma tarefa ...'
                value={props.todo.descricao}
                onChange={e => props.fOnChange(e.target.value)}
                onKeyUp={fOnKeyUp}></input>

            <button
                className="h-5 w-5 m-1 rounded-md hover:text-blue-500"
                onClick={props.fAdicionar}
            > {IconeAdd} </button>
            <button
                className="h-5 w-5 m-1 rounded-md hover:text-gray-500"
                onClick={props.fBuscar}
            > {IconeSearch} </button>
            <button
                className="h-5 w-5 m-1 rounded-md hover:text-yellow-500"
                onClick={props.fCancelar}
            > {IconeCancel} </button>
        </div>
    )
}