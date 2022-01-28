import axios from 'axios'
import { useEffect, useState } from 'react'

import TodoModel from '../../model/Todo'
import TodoForm from './todoForm'
import TodoList from './todoList'

const BASE_URL = 'http://localhost:3001/api/todos'

export default function Todo() {

    const [todo, setTodo] = useState<TodoModel>(TodoModel.criarVazio())
    const [todos, setTodos] = useState<TodoModel[]>([])

    useEffect(() => {
        fAtualizar(todo.descricao)
    }, [todo, todos])

    async function fAtualizar(descricao = '') {
        const search = descricao ? `&descricao__regex=/${descricao}/` : ''
        await fetch(`${BASE_URL}?sort=-createdAt${search}`)
            .then(res => res.json())
            .then(res => setTodos(res))
    }

    function fBuscar() {
        setTodo(TodoModel.novoPorDescricao(todo.descricao))
    }

    function fOnChange(e) {
        setTodo(TodoModel.novoPorDescricao(e))
    }

    async function fAdicionar() {
        const descricao = todo.descricao
        await axios.post(BASE_URL, { descricao })
            .then(() => fCancelar())
    }

    async function fExcluir(todo: TodoModel) {
        await axios.delete(`${BASE_URL}/${todo._id}`)
    }

    async function fRealizado(todo: TodoModel) {
        const realizado = !todo.realizado
        await axios.put(`${BASE_URL}/${todo._id}`, { ...todo, realizado: realizado })
    }

    function fCancelar() {
        setTodo(TodoModel.criarVazio)
    }

    return (
        //<div className='flex flex-col w-3/6'>
        <div className={`
            flex flex-col w-2/3 rounded-md
            bg-gradient-to-b from-gray-600 via-gray-500 to-gray-500
            dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-600 dark:to-gray-600
        `}>
            <TodoForm
                todo={todo}
                fOnChange={fOnChange}
                fAdicionar={fAdicionar}
                fBuscar={fBuscar}
                fCancelar={fCancelar} />
            <hr className="border-2 border-gray-500 dark:border-gray-400" />
            <TodoList
                todos={todos}
                fRealizado={fRealizado}
                fExcluir={fExcluir} />
        </div>
    )

}
