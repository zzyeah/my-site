import { getProjects } from '@/api/project';

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
        },
    },
    actions: {
        async fetchProject({ state, commit }) {
            if (state.data.length) return;
            commit('setLoading', true);
            const resp = await getProjects();
            commit('setData', resp);
            commit('setLoading', false);
        }
    },
}