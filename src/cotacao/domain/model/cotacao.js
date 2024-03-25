import dayjs from "dayjs";

class Cotacao {
    constructor({
        paridadeCompra = 0,
        paridadeVenda = 0,
        cotacaoCompra = 0,
        cotacaoVenda = 0,
        dataHoraCotacao = "",
        tipoBoletim = "",
    }) {
        this.paridadeCompra = paridadeCompra;
        this.paridadeVenda = paridadeVenda;
        this.cotacaoCompra = cotacaoCompra;
        this.cotacaoVenda = cotacaoVenda;
        this.dataHoraCotacao = dataHoraCotacao ? dayjs(dataHoraCotacao).format("DD/MM/YYYY - HH:mm:ss") : ""
        this.tipoBoletim = tipoBoletim;
    }
}
export default Cotacao;