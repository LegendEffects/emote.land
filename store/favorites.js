export const state = () => ({
  version: 1,
  favorites: []
});

export const getters = {
  all: state => {
    return state.favorites
  },

  has: state => obj => {
    return state.favorites.find(val => val.rel === obj.rel) !== undefined;
  },

  filter: state => search => {
    return state.favorites.filter(el => new RegExp(search, 'i').test(el.rel));
  }
}

export const mutations = {
  addFavorite(state, obj) {
    state.favorites.push(obj);
  },

  setFavorites(state, arr) {
    state.favorites = arr;
  }
}

export const actions = {
  toggle({ commit, dispatch, getters }, obj) {
    if(getters.has(obj)) {
      dispatch('remove', obj);
      return false;
    }

    commit('addFavorite', obj);
    return true;
  },

  remove({ getters, commit }, obj) {
    commit('setFavorites', getters.all.filter(el => (el.rel !== obj.rel)));
  }
}
