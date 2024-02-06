import { createStore } from 'vuex';

export default createStore({
  state: {
    jwtToken: null,
  },
  mutations: {
    setJwtToken(state, token) {
      state.jwtToken = token;
    },
    clearJwtToken(state) {
      state.jwtToken = null;
    },
  },
  actions: {
    saveToken({ commit }, token) {
      commit('setJwtToken', token);
    },
    clearToken({ commit }) {
      commit('clearJwtToken');
    },
  },
  getters: {
    getToken: state => state.jwtToken,
  },
});
