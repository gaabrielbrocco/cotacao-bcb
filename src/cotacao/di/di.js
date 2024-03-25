import axiosInstance from "./axios";

import buscaCotacaoRepository from "../data/repository/buscaCotacaoRepository";
import buscaCotacaoUseCase from "../domain/usecase/buscaCotacaoUseCase";
import buscaMoedasUseCase from "../domain/usecase/buscaMoedasUseCase";
import cotacaoController from "../controller/cotacaoController";
import buscaMoedasRepository from "../data/repository/buscaMoedasRepository";

const instance = axiosInstance;

const buscaCotacaoRepositoryImpl = buscaCotacaoRepository(instance)
const buscaMoedasRepositoryImpl = buscaMoedasRepository(instance)
const buscaCotacaoUseCaseImpl = buscaCotacaoUseCase(buscaCotacaoRepositoryImpl)
const buscaMoedasUseCaseImpl = buscaMoedasUseCase(buscaMoedasRepositoryImpl)
const cotacaoControllerImpl = cotacaoController(buscaCotacaoUseCaseImpl, buscaMoedasUseCaseImpl)


export { cotacaoControllerImpl };