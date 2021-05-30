import { getSetting } from '@/api/setting';

export default {
    namespaced: true,
    state: {
        loading: false,
        data: {},
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
        async fetchSetting({ commit }) {
            commit('setLoading', true);
            const resp = await getSetting();
            commit('setData', resp);
            commit('setLoading', false);
            console.log(resp.favicon);
            if (resp.favicon) {
                let link = document.querySelector("link[rel='shortcut icon']");
                if (link) return;
                link = document.createElement('link');
                link.rel = 'shortcut icon';
                link.type = 'images/x-icon';
                link.href = resp.favicon;
                document.querySelector('head').appendChild(link);
            }
        }
    },
}