import moment from "moment";

const buscaCotacaoUseCase = (repository) => async (moeda, data) => {
  try {
    const dataFormatada = moment(data, "DD/MM/YYYY").format("MM-DD-YYYY");
    const objRetorno = await repository(moeda, dataFormatada);
    var a = []

    objRetorno.forEach(function (objeto) {
      if (objeto.tipoBoletim === "Fechamento PTAX") {
        var cotacao = {
          "dataHoraCotacao": objeto.dataHoraCotacao,
          "cotacaoCompra": objeto.cotacaoCompra, 
          "cotacaoVenda": objeto.cotacaoVenda, 
          "tipoBoletim": objeto.tipoBoletim,
        };
        return a.push(cotacao);
      }
    });
  
    return a;
  } catch (error) {
    throw error;
  }
};

export default buscaCotacaoUseCase;