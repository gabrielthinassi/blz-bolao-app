export default class Pessoa {
    #_id: string
    #nome: string
    #tipo: string

    constructor(nome: string, tipo: string, _id: string = null) {
        this.#nome = nome
        this.#tipo = tipo
    }

    static criarVazio() {
        return new Pessoa('', '')
    }

    get _id() {
        return this.#_id
    }

    get nome() {
        return this.#nome
    }

    set nome(value: string) {
        this.#nome = value
    }

    get tipo() {
        return this.#tipo
    }

    set tipo(value: string) {
        this.#tipo = value
    }
}