import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        usgsHeaderRendered: false
    },
    mutations: {
        changeBooleanStateWhenUSGSHeaderRendered(state) {
            state.usgsHeaderRendered = true
        }
    }
});
