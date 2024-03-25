import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata",
});

export default axiosInstance