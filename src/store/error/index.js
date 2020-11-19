const state = {
    error: [],
    loading: false,
};

const getters = {
    getErrors(state) {
        return state.error;
    },
    getLoading(state) {
        return state.loading;
    },
};

const mutations = {
    setLoading(state,durum){
        state.loading = durum;
    },
    clearError(state){
        state.error = [];
    },
    addError(state,payload){
        state.error.push(payload);
    }
};

const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
};
