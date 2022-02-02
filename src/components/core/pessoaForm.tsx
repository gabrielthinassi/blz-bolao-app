import { useState } from "react"
import Pessoa from "../../model/Pessoa"
import { IconeAdd, IconeCancel, IconeSearch } from "../icons"
import Botao from "../template/Botao"
import Input from "../template/Input"

interface PessoaFormProps {
    pessoa: Pessoa
    fGravar?: (pessoa: Pessoa) => void
    fCancelar?: () => void
    fOnChange?: (e: any) => void
}

export default function PessoaForm(props: PessoaFormProps) {
    const _id = props.pessoa?._id
  
    return (
        <div className="flex flex-col w-1/4">
            <input type="text" name="nome" value={props.pessoa?.nome} onChange={e => props.fOnChange(e)} />
            <input type="text" name="tipo" value={props.pessoa?.tipo} onChange={e => props.fOnChange(e)} />
            <h3>{props.pessoa?.nome}</h3>
            <h3>{props.pessoa?.tipo}</h3>
        </div>

        // <div className="w-2/3">
        //     {_id ? (
        //         <Input
        //             somenteLeitura
        //             texto="#ID"
        //             value={_id}
        //         />
        //     ) : false}
        //     <Input 
        //         texto="Nome"
        //         value={props.pessoa?.nome}
        //         onChange={props.fOnChange}
        //     />
        //     <Input
        //         texto="Tipo"
        //         value={props.pessoa?.tipo}
        //         onChange={props.fOnChange}
        //     />
        //     <Input
        //         texto="Status"
        //         value={props.pessoa?.status}
        //         onChange={props.fOnChange}
        //     />
        //     <Input
        //         texto="Observação"
        //         value={props.pessoa?.observacao}
        //         onChange={props.fOnChange}
        //     />
        //     <div className="flex justify-end mt-7">
        //         <Botao cor="blue" className="mr-2"
        //             // onClick={() => props.fGravar?.(new Cliente(nome, +idade, id))}>
        //             onClick={() => props.fGravar(props.pessoa)}>
        //             {_id ? 'Alterar' : 'Adicionar'}
        //         </Botao>
        //         <Botao onClick={props.fCancelar}>
        //             Cancelar
        //         </Botao>
        //     </div>
        // </div>
    )
}