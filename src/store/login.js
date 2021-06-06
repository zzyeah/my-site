import * as userApi from '../api/login';
function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

export default {
    namespaced: true,
    state: {
        loading: false,
        userInfo: null,
        msg: '',
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setUserInfo(state, payload) {
            state.userInfo = payload;
        },
        setMsg(state, payload) {
            state.msg = payload;
        }
    },
    getters: {
        status(state) {
            if (state.loading) {
                return "loading";
            } else if (state.userInfo) {
                return "login";
            } else {
                return "unlogin";
            }
        },
    },
    actions: {
        async login({ commit }, payload) {
            commit('setLoading', true);
            const resp = await userApi.login(payload.loginId, payload.loginPwd);
            commit('setLoading', false);
            commit('setUserInfo', resp);
            return resp;
        },
        async logout({ commit }) {
            commit('setLoading', true);
            const resp = await userApi.logout();
            commit('setMsg', resp);
            commit('setUserInfo', null);
            commit('setLoading', false);
            await delay(1000);
            commit('setMsg', null);
        },
        async whoAmI({ commit }) {
            commit('setLoading', true);
            const resp = await userApi.whoAmI();
            commit('setLoading', false);
            commit('setUserInfo', resp);
        }
    }
}