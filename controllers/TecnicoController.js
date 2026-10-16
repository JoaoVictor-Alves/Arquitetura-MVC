import { Modelo } from "../models/TecnicoModel"

export class controle {

    static processarAdmissão(nomeCompleto, credencialAcesso, turnoTrabalho) {
    
    try {
        const Modelocriado = new Modelo(nomeCompleto, credencialAcesso, turnoTrabalho)
        Modelocriado.contratarTecnico(credencialAcesso, turnoTrabalho)
        console.log(`Sua contratação foi aprovada!`);

    } catch (erro) {
        console.log(`[ERRO INTECEPTADO]  A contratação não pode ser Terminado.`);
        this.contratarTecnico(erro.message)
        console.log(`código de segurança recebido: ${erro.message}`);
    } finally {
        console.log("Contratação concluida com sucesso")
    }
  }
}
