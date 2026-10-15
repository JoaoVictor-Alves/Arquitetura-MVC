export class EquipamentoModel {
    static #inventario = [];
    #tagPatrimonio;
    #tipoEquipamento;
    #capacidadeRam;

    constructor(tagPatrimonio, tipoEquipamento, capacidadeRam) {
        this.tagPatrimonio = tagPatrimonio;
        this.tipoEquipamento = tipoEquipamento;
        this.capacidadeRam = capacidadeRam;
    }

    set tagPatrimonio(patrimonio) {
        if (patrimonio === '') {
            throw new Error("ERR_TAG_VAZIA");
        }
        this.#tagPatrimonio = patrimonio;
    }

    get tagPatrimonio() {
        return this.#tagPatrimonio;
    }

    set capacidadeRam(ram) {
        if (ram < 8) {
            throw new Error("ERR_RAM_INSUFICIENTE");
        }
        this.#capacidadeRam = ram;
    }

    get capacidadeRam() {
        return this.#capacidadeRam;
    }

    set tipoEquipamento(tipo) {
        this.#tipoEquipamento = tipo;
    }

    get tipoEquipamento() {
        return this.#tipoEquipamento;
    }

    static registrarAtivo(tagPatrimonio, tipoEquipamento, capacidadeRam) {
        const novo = new EquipamentoModel(tagPatrimonio, tipoEquipamento, capacidadeRam);
        this.#inventario.push(novo);
        return novo;
    }

    static listarInventario() {
        return this.#inventario;
    }
}