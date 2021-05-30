import { getBanner } from '@/api/banner';

export default {
    namespaced: true,
    state: {
        loading: false,
        data: [],
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchBanner({ commit, state }) {
            if (state.data.length) return;
            commit('setLoading', true);
            const resp = await getBanner();
            commit('setData', resp);
            commit('setLoading', false);
        },
    },
};