export default class Email {
    #_id: string
    #email: string
    #observacao: string

    constructor(email: string, observacao: string = '', _id: string = null) {
        this.#email = email
        this.#observacao = observacao
        this.#_id = _id
    }

    static criarVazio() {
        return new Email('')
    }

    static novoPorEmail(email: string) {
        return new Email(email)
    }

    static criarUsandoObj(obj: Email): Email {
        return new Email(obj.email, obj.observacao, obj._id)
    }

    get _id() {
        return this.#_id
    }

    get email() {
        return this.#email
    }

    get observacao() {
        return this.#observacao
    }
}