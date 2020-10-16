function setTheme(theme) {
  document.body.setAttribute('theme', theme);
}

export default ({ store }) => {
  const bodyMutationObserver = new window.MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if(mutation.type === 'attributes') {
        store.commit('settings/setTheme', document.body.getAttribute('theme'));
      }
    });
  });

  bodyMutationObserver.observe(document.body, {attributes: true});

  window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
    setTheme(e.matches);
  });

  setTheme(store.state.settings.theme);
}
