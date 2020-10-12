export const state = () => ({
  emotes: []
});

export const getters = {
  all: state => {
    return state.emotes;
  },

  size: state => {
    return state.emotes.length;
  },

  filter: state => search => {
    return state.emotes.filter(el => new RegExp(search, 'i').test(el.rel));
  }
}

export const mutations = {
  setEmotes(state, emotes) {
    state.emotes = emotes;
  }
}

export const actions = {
  async nuxtClientInit({ commit }) {
    // File Pulling originated from https://stackoverflow.com/questions/54095215/how-to-get-all-the-image-files-in-a-directory-using-vue-js-nuxt-js
    const r = require.context('../static/emojis/large/', true, /\.png|.gif$/);

    commit('setEmotes', r.keys().map(key => ({
      abs: r(key),
      rel: key
    })));
  }
}
