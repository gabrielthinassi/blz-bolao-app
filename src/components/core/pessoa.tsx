import axios from 'axios'
import { useEffect, useState } from 'react'
import Pessoa from '../../model/Pessoa'
import PessoaList from './pessoaList'

const BASE_URL = 'http://localhost:3001/api/pessoas'

export default function Pessoas() {

    const [ pessoa, setPessoa ] = useState<Pessoa>()
    const [ pessoas, setPessoas ] = useState<Pessoa[]>([])

    async function carregarPessoas(idPessoa: string = '') {
        const resp = await fetch(`${BASE_URL}/${idPessoa}`)
        const json = await resp.json()
        console.log('json: ', json)
        //const novaPessoa = Pessoa.criarUsandoObj(json)
        //setPessoa(novaPessoa)
        //console.log('pessoa: ', novaPessoa)
        setPessoas(json)
        console.log(pessoas)
    }

    useEffect(() => {
        carregarPessoas('')
    }, [])

    async function fExcluir(pessoa: Pessoa) {
        console.log('deletando a pessoa...')
        // await axios.delete(`${BASE_URL}/${pessoa._id}`)
    }

    async function fRealizado(pessoa: Pessoa) {
        console.log('editando a pessoa...')
        // const realizado = !todo.realizado
        // await axios.put(`${BASE_URL}/${todo._id}`, { ...todo, realizado: realizado })
    }

    return (
        <h1>teste</h1>
        //<PessoaList></PessoaList>
    )
    

}