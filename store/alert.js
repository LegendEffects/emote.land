export const state = () => ({
  message: null,
  timeout: null,
  timeoutInstance: null,
  type: null,

  created_at: null
});

export const getters = {
  exists(state) {
    return state.message !== null;
  },

  getAlert(state) {
    return {
      message: state.message,
      type: state.type,
      timeout: state.timeout
    };
  },

  getMsLeft(state) {
    return (state.created_at.getTime() + state.timeout) - Date.now();
  }
}

export const mutations = {
  setup(state, {message, type, timeout}) {
    state.message = message;
    state.timeout = timeout;
    state.type = type;
  },

  clear(state) {
    state.message = null;
    state.timeout = null;
    state.type = null;
    state.created_at = null;
  },

  setTime(state) {
    state.created_at = new Date();
  },

  setTimeoutInstance(state, instance) {
    state.timeoutInstance = instance;
  }
}

export const actions = {
  post({ commit, state }, {message, type, timeout}) {
    if(state.timeoutInstance !== null) {
      clearTimeout(state.timeoutInstance);
      commit('setTimeoutInstance', null);
    }

    commit('setTime');
    commit('setup', {
      message, type, timeout
    });

    commit('setTimeoutInstance', setTimeout(() => {
      commit('clear');
    }, timeout));
  }
}
