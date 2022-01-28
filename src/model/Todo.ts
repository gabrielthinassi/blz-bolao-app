export default class Todo {
    #_id: string
    #descricao: string
    #realizado: boolean
    #createdAt: Date

    constructor(descricao: string, realizado: boolean = false, createdAt: Date = new Date(), _id: string = null) {
        this.#descricao = descricao
        this.#realizado = realizado
        this.#createdAt = createdAt
        this.#_id = _id
    }

    static criarVazio() {
        return new Todo('')
    }

    static novoPorDescricao(descricao: string) {
        return new Todo(descricao)
    }

    get _id() {
        return this.#_id
    }

    get descricao() {
        return this.#descricao
    }

    get realizado() {
        return this.#realizado
    }

    get createdAt() {
        return this.#createdAt
    }
}