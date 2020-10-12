export default ({ app, store }, inject) => {
  inject('alert', (message, type, timeout) => {
    store.dispatch('alert/post', {
      message,
      type: ((type) ? type : 'bg2'),
      timeout: ((timeout) ? timeout : 2500)
    });
  });
}
