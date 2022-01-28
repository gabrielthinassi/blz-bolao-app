export default class Endereco {
    #_id: string
    #cep: string
    #rua: string
    #numero: string
    #bairro: string
    #cidade: string
    #uf: string
    #observacao: string

    constructor(
        cep: string,
        rua: string,
        numero: string,
        bairro: string,
        cidade: string,
        uf: string,
        observacao: string = '',
        _id: string = null)
    {
        this.#cep = cep
        this.#rua = rua
        this.#numero = numero
        this.#bairro = bairro
        this.#cidade = cidade
        this.#uf = uf   
        this.#observacao = observacao
        this.#_id = _id
    }

    static vazio() {
        return new Endereco('','','','','','')
    }

    static criarUsandoObj(obj: Endereco): Endereco {
        return new Endereco(obj.cep, obj.rua, obj.numero, obj.bairro, obj.cidade, obj.uf, obj.observacao, obj._id)
    }

    get _id() {
        return this.#_id
    }

    get cep() {
        return this.#cep
    }
    
    get rua() {
        return this.#rua
    }
    
    get numero() {
        return this.#numero
    }
    
    get bairro() {
        return this.#bairro
    }
    
    get cidade() {
        return this.#cidade
    }
    
    get uf() {
        return this.#uf
    }

    get observacao() {
        return this.#observacao
    }
}