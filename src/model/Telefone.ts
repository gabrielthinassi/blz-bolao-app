export default class Telefone {
    #_id: string
    #numero: string
    #observacao: string

    constructor(numero: string, observacao: string = '', _id: string = null) {
        this.#numero = numero
        this.#observacao = observacao
        this.#_id = _id
    }

    static criarVazio() {
        return new Telefone('')
    }

    static novoPorNumero(numero: string) {
        return new Telefone(numero)
    }
    
    static criarUsandoObj(obj: Telefone): Telefone {
        return new Telefone(obj.numero, obj.observacao, obj._id)
    }

    get _id() {
        return this.#_id
    }

    get numero() {
        return this.#numero
    }

    get observacao() {
        return this.#observacao
    }
}