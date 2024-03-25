import { ref, onMounted } from "vue";
import Cotacao from "../domain/model/cotacao";
import { colunas } from "../const/colunas";

const cotacaoController = (buscaCotacaoUseCase, buscaMoedasUseCase) => () => {
  const moedas = ref([]);
  const moedaSelecionada = ref(null);
  const dataSelecionada = ref("");
  const modelCotacao = ref(new Cotacao({}));
  const itemsPorPagina = ref(5);
  const colunasTabela = ref(colunas)
  const linhas = ref([])
  const totalItens = ref(0)

  onMounted(async () => {
    moedas.value = await buscaMoedasUseCase();
  });

  const buscaDados = async () => {
    try {
        linhas.value = await buscaCotacaoUseCase(moedaSelecionada.value,dataSelecionada.value)
        totalItens.value = linhas.value.length
    } catch (error) {
        console.log(error);
    }
  }

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
  };
};

export default cotacaoController;
