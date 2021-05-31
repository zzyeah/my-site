import { getAbout } from '@/api/about';

export default {
    namespaced: true,
    state: {
        loading: false,
        data: '',
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        },
    },
    actions: {
        async fetchAbout({ state, commit }) {
            if (state.data) return;
            commit('setLoading', true);
            const resp = await getAbout();
            commit('setData', resp);
            commit('setLoading', false);
        }
    },
}