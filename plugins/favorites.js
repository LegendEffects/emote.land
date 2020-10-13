export default ({ store }, inject) => {
  inject('favorites', {
    toggle: (img) => {
      return store.dispatch('favorites/toggle', img);
    },
    remove: (img) => {
      return store.dispatch('favorites/remove', img);
    },
    has: (img) => {
      return store.getters['favorites/has'](img);
    }
  });
}
