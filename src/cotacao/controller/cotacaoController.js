import { ref, onMounted } from "vue";
import Cotacao from "../domain/model/cotacao";
import { colunas } from "../const/colunas";

const cotacaoController = (buscaCotacaoUseCase, buscaMoedasUseCase) => () => {
  const moedas = ref([]);
  const moedaSelecionada = ref(null);
  const dataSelecionada = ref("");
  const modelCotacao = ref(new Cotacao({}));
  const itemsPorPagina = ref(5);
  const colunasTabela = ref(colunas);
  const linhas = ref([]);
  const totalItens = ref(0);
  const valorConvertido = ref(null);
  const valorDigitado = ref(null);

  onMounted(async () => {
    moedas.value = await buscaMoedasUseCase();
  });

  const buscaDados = async () => {
    try {
      linhas.value = await buscaCotacaoUseCase(
        moedaSelecionada.value,
        dataSelecionada.value
      );
      totalItens.value = linhas.value.length;
    } catch (error) {
      console.log(error);
    }
  };

  const converteValor = async () => {
    await new Promise(resolve => setTimeout(resolve, 200)) 
    if(!valorDigitado.value) {
      valorConvertido.value = ""
      return
    }
    const valorNumerico = parseFloat(linhas.value[linhas.value.length - 1].cotacaoCompra) * parseFloat(valorDigitado.value);
    valorConvertido.value = new Intl.NumberFormat('pt-br',{
      style: "currency",
      currency: "BRL",
    }).format(valorNumerico);
    return valorConvertido.value;
  };

  return {  
    moedas,
    moedaSelecionada,
    dataSelecionada,
    modelCotacao,
    buscaDados,
    itemsPorPagina,
    colunasTabela,
    linhas,
    totalItens,
    valorConvertido,
    converteValor,
    valorDigitado
  };
};

export default cotacaoController;
