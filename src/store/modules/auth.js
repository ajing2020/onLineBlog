import auth from "@/api/auth";

const state = {
  user: null,
  isLogin: false
};
const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin
};
const mutations = {
  setUser(state, payload) {
    state.user = payload.user;
  },
  setLogin(state, payload) {
    state.isLogin = payload.isLogin;
  }
};
const actions = {
  login({ commit }, { username, password }) {
    return auth.login({ username, password }).then(res => {
      commit("setUser", { user: res.data });
      commit("setLogin", { isLogin: true });
    });
  },

  async register({ commit }, { username, password }) {
    let res = await auth.register({ username, password });
    commit("setUser", { user: res.data });
    commit("setLogin", { isLogin: true });
    return res.data;
  },

  async logout({ commit }) {
    await auth.logout();
    commit("setUser", { user: null });
    commit("setLogin", { isLogin: false });
  },

  async checkLogin({ commit, state }) {
    //判断当前状态是否登录
    if (state.isLogin) {
      return true;
    }
    //发请求查看是否登录
    let res = await auth.getInfo();
    // 设定返回之后的登录状态
    commit("setLogin", { isLogin: res.isLogin });
    // 再次进行判断
    if (!res.isLogin) {
      return false;
    }
    commit("setUser", { user: res.data });
    return true;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
