import Cotacao from "../../domain/model/cotacao";

const buscaCotacaoRepository = (axios) => async (moeda, data) => {
  try {
    const response = await axios.get(`/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${moeda}'&@dataCotacao='${data}'&$format=json`);
    console.log(response?.data?.value?.map((cotacao) => new Cotacao(cotacao)) ?? []);
    return response?.data?.value?.map((cotacao) => new Cotacao(cotacao)) ?? [];
  } catch (error) {
    throw error;
  }
};

export default buscaCotacaoRepository;
