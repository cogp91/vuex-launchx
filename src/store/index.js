import { buildDirectiveArgs } from '@vue/compiler-core';
import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0,
    color: ''
  },
  getters: {
    cuadrado(state){
      return state.contador * state.contador;
    }
  },
  mutations: { // we use commit for mutations (store.commit(''))
    subirContador(state, random){
      state.contador += random;
    },
    bajarContador(state, random){
      state.contador -= random;
    },
    colorChange(state, color){
      state.color = color;
    }
  },
  actions: { // we use dispatch for actions (store.dispatch('')) 
    // we can use async in actions but not in mutations
    async subirContador({commit}){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      commit('subirContador', results)
    },

    async bajarContador({commit}){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      commit('bajarContador', results)
    },

    colorChange({commit}, color){
      commit('colorChange', color);
    }
  },
  modules: {
  }
})
