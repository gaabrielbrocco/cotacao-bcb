const buscaMoedasUseCase = (repository) => async () => {
    try {
      return await repository();
    } catch (error) {
      throw error;
    }
  };
  
  export default buscaMoedasUseCase;
  