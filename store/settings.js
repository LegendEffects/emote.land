const themes = ["8008", "9009", "aether", "alpine", "bento", "bingsu", "bliss", "botanical", "bushido", "cafe", "camping", "carbon", "cyberspace", "dark", "deku", "dollar", "dots", "dracula", "dualshot", "froyo", "future_funk", "graen", "gruvbox_dark", "gruvbox_light", "hammerhead", "honey", "ishtar", "joker", "laser", "light", "lil_dragon", "lime", "list.json", "luna", "mashu", "matcha_moccha", "matrix", "menthol", "metaverse", "metropolis", "miami", "miami_nights", "milkshake", "mint", "mizu", "modern_dolch", "monokai", "mr_sleeves", "ms_cupcakes", "nausea", "nautilus", "nebula", "night_runner", "nord", "norse", "oblivion", "olive", "olivia", "pastel", "pulse", "red_dragon", "red_samurai", "retro", "retrocast", "rgb", "serika", "serika_dark", "shadow", "shoko", "solarized_dark", "solarized_light", "strawberry", "striker", "superuser", "sweden", "taro", "terminal", "terra", "vaporwave", "voc", "watermelon", "wavez"];

export const state = () => ({
  version: 1,
  theme: 'serika-dark'
});

export const getters = {
  getTheme: state => {
    return state.theme;
  },
  getAllThemes: state => {
    return themes;
  }
}

export const mutations = {
  setTheme(state, theme) {
    state.theme = theme;
  }
}
