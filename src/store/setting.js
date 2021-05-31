import { getSetting } from '@/api/setting';
import { titleController } from '@/utils';

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
            if (resp.favicon) {
                let link = document.querySelector("link[rel='shortcut icon']");
                if (link) return;
                link = document.createElement('link');
                link.rel = 'shortcut icon';
                link.type = 'images/x-icon';
                link.href = resp.favicon;
                document.querySelector('head').appendChild(link);
            }
            if (resp.siteTitle) {
                titleController.setSiteTitle(resp.siteTitle);
            }
        }
    },
}