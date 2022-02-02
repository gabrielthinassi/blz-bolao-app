import axios from 'axios'
import { useEffect, useState } from 'react'
import Pessoa from '../../model/Pessoa'
import PessoaForm from './pessoaForm'
import PessoaList from './pessoaList'

const BASE_URL = 'http://localhost:3001/api/pessoas'

export default function Pessoas() {

    const [pessoa, setPessoa] = useState<Pessoa>(Pessoa.criarVazio)
    const [pessoas, setPessoas] = useState<Pessoa[]>([])

    async function carregarPessoas(idPessoa: string = '') {
        const resp = await fetch(`${BASE_URL}/${idPessoa}`)
        const json = await resp.json()
        if (idPessoa != '') {
            setPessoa(Pessoa.criarUsandoObj(json))
        } else {
            setPessoas(json)
        }
    }

    useEffect(() => {
        carregarPessoas('')
    }, [])

    async function fExcluir(pessoa: Pessoa) {
        await axios.delete(`${BASE_URL}/${pessoa._id}`)
    }

    async function fGravar(pessoa: Pessoa) {
        const id = pessoa._id ? pessoa._id : ''
        id ? console.log('Alterando a pessoa:', pessoa.nome) : 
            console.log('Adicionando a pessoa:', pessoa.nome)
    }

    function fOnChange(e: any) {
        setPessoa({...pessoa, [e.target?.name]: e.target?.value} as Pessoa)
        console.log('editando a pessoa...', pessoa)
        
        // setPessoa(pessoa)
        // const realizado = !todo.realizado
        // await axios.put(`${BASE_URL}/${todo._id}`, { ...todo, realizado: realizado })
    }

    async function fCancelar() {
        console.log('Cancelando...')
    }

    return (
        <div>
            <PessoaList 
                pessoas={pessoas}
                fExcluir={fExcluir}
                fEditar={fOnChange}
            />
            <PessoaForm 
                pessoa={pessoa}
                fGravar={fGravar}
                fCancelar={fCancelar}
                fOnChange={fOnChange}
            />
        </div>
    )


}