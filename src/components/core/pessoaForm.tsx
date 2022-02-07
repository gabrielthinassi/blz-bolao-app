import { useState } from "react"
import Pessoa from "../../model/Pessoa"
import { IconeLocation, IconeMail, IconePhone, IconeUser } from "../icons"
import Input from "../template/Input"

interface PessoaFormProps {
    pessoa: Pessoa
    fGravar?: (pessoa: Pessoa) => void
    fCancelar?: () => void
    fOnChange?: (e: any) => void
}

export default function PessoaForm(props: PessoaFormProps) {
    const _id = props.pessoa?._id

    const [aba, setAba] = useState<'principal' | 'enderecos' | 'telefones' | 'emails'>('principal')

    return (
        // <div className="flex flex-col w-1/4">
        //     <input type="text" name="nome" value={props.pessoa?.nome} onChange={e => props.fOnChange(e)} />
        //     <input type="text" name="tipo" value={props.pessoa?.tipo} onChange={e => props.fOnChange(e)} />
        //     <h3>{props.pessoa?.nome}</h3>
        //     <h3>{props.pessoa?.tipo}</h3>
        // </div>

        <div className="flex bg-gradient-to-br from-slate-500 to-slate-700 rounded-3xl p-5">
            <div className="flex flex-col px-5">
                <button
                    onClick={() => setAba('principal')}
                    className="flex font-bold p-2 mb-10 rounded-3xl bg-slate-700 hover:bg-slate-600">
                    {IconeUser()} Principal
                </button>
                <button
                    onClick={() => setAba('enderecos')}
                    className="flex font-bold p-2 mb-10 rounded-3xl bg-slate-700 hover:bg-slate-600">
                    {IconeLocation()} Endereços
                </button>
                <button
                    onClick={() => setAba('telefones')}
                    className="flex font-bold p-2 mb-10 rounded-3xl bg-slate-700 hover:bg-slate-600">
                    {IconePhone()} Telefones
                </button>
                <button
                    onClick={() => setAba('emails')}
                    className="flex font-bold p-2 mb-10 rounded-3xl bg-slate-700 hover:bg-slate-600">
                    {IconeMail()} E-mails
                </button>
            </div>

            <div className="flex flex-col w-1/4 pl-5">
                {_id ? (
                    <span className="text-xl pb-5 font-bold">ID: {props.pessoa?._id}</span>
                ) : false}
                <Input
                    name="nome"
                    texto="Nome"
                    value={props.pessoa?.nome}
                    onChange={e => props.fOnChange(e)}
                />
                <Input
                    name="tipo"
                    texto="Tipo"
                    value={props.pessoa?.tipo}
                    onChange={e => props.fOnChange(e)}
                />
                <Input
                    name="status"
                    texto="Status"
                    value={props.pessoa?.status}
                    onChange={e => props.fOnChange(e)}
                />
                <Input
                    name="observacao"
                    texto="Observação"
                    value={props.pessoa?.observacao}
                    onChange={e => props.fOnChange(e)}
                />
            </div>
            <div className="flex flex-col w-1/4 pl-5">
                <Input
                    name="enderecos.cep"
                    texto="CEP"
                    value={props.pessoa?.enderecos[0]?.cep}
                    onChange={e => props.fOnChange(e)}
                />
                <Input
                    name="enderecos.rua"
                    texto="Rua"
                    value={props.pessoa?.enderecos[0]?.rua}
                    onChange={e => props.fOnChange(e)}
                />
                <Input
                    name="enderecos.numero"
                    texto="Número"
                    value={props.pessoa?.enderecos[0]?.numero}
                    onChange={e => props.fOnChange(e)}
                />
                <Input
                    name="enderecos.bairro"
                    texto="Bairro"
                    value={props.pessoa?.enderecos[0]?.bairro}
                    onChange={e => props.fOnChange(e)}
                />
                <Input
                    name="enderecos.cidade"
                    texto="Cidade"
                    value={props.pessoa?.enderecos[0]?.cidade}
                    onChange={e => props.fOnChange(e)}
                />
                <Input
                    name="enderecos.uf"
                    texto="UF"
                    value={props.pessoa?.enderecos[0]?.uf}
                    onChange={e => props.fOnChange(e)}
                />
                <Input
                    name="enderecos.observacao"
                    texto="Observação"
                    value={props.pessoa?.enderecos[0]?.observacao}
                    onChange={e => props.fOnChange(e)}
                />
            </div>
            <div className="flex flex-col w-1/4 pl-5">
                <Input
                    name="telefones.numero"
                    texto="Número"
                    value={props.pessoa?.telefones[0]?.numero}
                    onChange={e => props.fOnChange(e)}
                />
                <Input
                    name="telefones.observacao"
                    texto="Observação"
                    value={props.pessoa?.telefones[0]?.observacao}
                    onChange={e => props.fOnChange(e)}
                />
            </div>
            <div className="flex flex-col w-1/4 pl-5">
            <Input
                    name="emails.numero"
                    texto="E-mail"
                    value={props.pessoa?.emails[0]?.email}
                    onChange={e => props.fOnChange(e)}
                />
                <Input
                    name="emails.observacao"
                    texto="Observação"
                    value={props.pessoa?.emails[0]?.observacao}
                    onChange={e => props.fOnChange(e)}
                />
            </div>

            <div className="flex flex-col justify-end mt-7">
                <button
                    className={`
                        bg-gradient-to-br from-blue-300 to-blue-400
                        text-gray-700 dark:text-gray-200 font-bold px-4 py-2 m-2 rounded-md
                    `}
                    onClick={() => props.fGravar(props.pessoa)}>
                    {_id ? 'Alterar' : 'Adicionar'}
                </button>
                <button
                    className={`
                        bg-gradient-to-br from-red-300 to-red-400
                        text-gray-700 dark:text-gray-200 font-bold px-4 py-2 m-2 rounded-md
                    `}
                    onClick={props.fCancelar}>
                    Cancelar
                </button>
                {/* onClick={() => props.fGravar?.(new Cliente(nome, +idade, id))}> */}
            </div>
        </div>


    )
}