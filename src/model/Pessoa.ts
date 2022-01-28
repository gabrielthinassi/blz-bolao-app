import Email from "./Email"
import Endereco from "./Endereco"
import Telefone from "./Telefone"

export default class Pessoa {
    #_id: string
    #nome: string
    #tipo: string
    #status: string
    #observacao: string
    #enderecos: Endereco[]
    #telefones: Telefone[]
    #emails: Email[]
    
    constructor(
        nome: string,
        tipo: string,
        status: string,
        observacao: string = '',
        enderecos: Endereco[],
        telefones: Telefone[],
        emails: Email[],
        _id: string = null)
    {
        this.#nome = nome
        this.#tipo = tipo
        this.#status = status
        this.#observacao = observacao
        this.#enderecos = enderecos
        this.#telefones = telefones
        this.#emails = emails
        this.#_id = _id
    }

    static criarVazio() {
        return new Pessoa('','','','',[],[],[])
    }

    static criarUsandoObj(obj: Pessoa): Pessoa {
        const enderecos = obj.enderecos.map(resp => Endereco.criarUsandoObj(resp))
        const telefones = obj.telefones.map(resp => Telefone.criarUsandoObj(resp))
        const emails = obj.emails.map(resp => Email.criarUsandoObj(resp))
        return new Pessoa(obj.nome, obj.tipo, obj.status, obj.observacao, enderecos, telefones, emails, obj._id)
    }

    get _id() {
        return this.#_id
    }

    get nome() {
        return this.#nome
    }
    
    get tipo() {
        return this.#tipo
    }
    
    get status() {
        return this.#status
    }

    get observacao() {
        return this.#observacao
    }
    
    get enderecos() {
        return this.#enderecos
    }

    get telefones() {
        return this.#telefones
    }

    get emails() {
        return this.#emails
    }
}