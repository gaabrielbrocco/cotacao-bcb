import { ref, onMounted } from "vue";
import Cotacao from "../domain/model/cotacao";
import { colunas } from "../const/colunas";
import * as echarts from "echarts";
import moment from "moment";

const cotacaoController =
  (buscaCotacaoUseCase, buscaMoedasUseCase, buscaLinhasUseCase) => () => {
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
    const mostraGrafico = ref(false)

    onMounted(async () => {
      moedas.value = await buscaMoedasUseCase();

      const container = document.querySelector("#grafico");
      const chart = echarts.init(container);

      new ResizeObserver(() => chart.resize()).observe(container);
    });

    const buscaDados = async () => {
      try {
        await buscaDias();
        converteValor()
        mostraGrafico.value = true
      } catch (error) {
        console.log(error);
      }
    };

    const converteValor = async () => {
      await new Promise((resolve) => setTimeout(resolve, 200));
      if (!valorDigitado.value) {
        valorConvertido.value = "";
        return;
      } 

      const valorNumerico =
        parseFloat(linhas.value[linhas.value.length - 1].cotacaoCompra) *
        parseFloat(valorDigitado.value);
      valorConvertido.value = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(valorNumerico);
      return valorConvertido.value;
    };

    const buscaDias = async () => {
      const data = dataSelecionada.value.split("/").reverse().join("-");

      const datas = [];

      for (let i = 0; i < 5; i++) {  
        const dataFinal = moment(data, "YYYY-MM-DD");
        datas.push(dataFinal.subtract(i, "years").format("DD/MM/YYYY"));

      }

      const obj = {};

      const retornos = await Promise.all(
        datas.map(
          async (value) =>
            await buscaCotacaoUseCase(moedaSelecionada.value, value)
        )
      );
      for (let i = 0; i < datas.length; i++) {
        for(let j = 0; j < retornos.length; j++) {

          if(retornos[j].some((value) => datas[i] === value.dataHoraCotacao.split(" - ")[0])) {
            obj[datas[i]] = retornos[j];
          }
        }
        
      }

      linhas.value = await buscaLinhasUseCase(
        moedaSelecionada.value,
        dataSelecionada.value
      );

      grafico(obj);
    };

    const grafico = async (obj) => {
      var chartDom = document.getElementById("grafico");
      var myChart = echarts.init(chartDom, "light");
      var option;

      var keys = Object.keys(obj);

      option = {
        color: ["#4CAF50"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        xAxis: [
          {
            type: "category",
            data: keys,
            axisLabel: {
              rotate: 30,
            },
            inverse: true
          },
        ],
        yAxis: {
          type: "value",
          axisTick: {
            alignWithLabel: true,
          },
        },
        series: [
          {
            data: keys.map((value) => {
              return obj[value][0]?.cotacaoCompra;
            }),
            type: "line",
            barWidth: "40%",
            areaStyle: {}
          },
        ],
      };

      option && myChart.setOption(option);
    };

    const limpaCampos = () => {
      valorDigitado.value = null;
      valorConvertido.value = null;
      linhas.value = [];
      mostraGrafico.value = false
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
      valorDigitado,
      limpaCampos,
      mostraGrafico,
    };
  };

export default cotacaoController;
