const buscaMoedasRepository = (axios) => async () => {
    try {
        const response = await axios.get('/Moedas');
        return response?.data?.value ?? [];
    } catch (error) {
        throw error;
    }
}

export default buscaMoedasRepository;