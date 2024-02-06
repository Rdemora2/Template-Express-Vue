import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
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
