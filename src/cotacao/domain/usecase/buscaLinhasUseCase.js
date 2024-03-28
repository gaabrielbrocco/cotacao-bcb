import moment from "moment";

const buscaLinhasUseCase = (repository) => async (moeda,data) => {
    try {
      const dataFormatada = moment(data, 'DD/MM/YYYY').format('MM-DD-YYYY')
      return await repository(moeda,dataFormatada);
    } catch (error) {
      throw error;
    }
  };
  
  export default buscaLinhasUseCase;
  