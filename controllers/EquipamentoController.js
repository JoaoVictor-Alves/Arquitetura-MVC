import { EquipamentoModel } from "../models/EquipamentoModel.js";

export class EquipamentoController {
    
    static processarEntradaEquipamento(tagPatrimonio, tipoEquipamento, capacidadeRam) {
        try {
            const equipamentoCriado = EquipamentoModel.registrarAtivo(tagPatrimonio, tipoEquipamento, capacidadeRam);
            
            console.log("\nEquipamento cadastrado com sucesso!");
            
        } catch (erro) {
            console.log("\n[ERRO INTERCEPTADO]: A operação não pode ser concluída.");
            console.log("ERRO QUE FOI INTECEPTADO:", erro.message);
        } finally {
            console.log("Operação encerrada com segurança.\n");
        }
    }

    static consultarCatalogo() {
        const inventario = EquipamentoModel.listarInventario();
        console.log("\n--- CATÁLOGO DE EQUIPAMENTOS ---");
        if (inventario.length === 0) {
            console.log("Nenhum equipamento cadastrado no inventário.");
        } else {
            console.log(inventario);
        }
        console.log("--------------------------------\n");
    }
}