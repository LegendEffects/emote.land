<template>
  <CommandPalette ref="palette" :entries="entries" />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {return {
    entries: []
  }},

  created() {
    const switchTheme = (_, attribute) => {
      this.setTheme(attribute);
    }

    for(const theme of this.themes) {
      this.entries.push({
        id: 'changeTheme',
        name: theme,
        attributes: theme,
        run: switchTheme
      });
    }
  },

  computed: {
    ...mapGetters({
      'themes': 'settings/getAllThemes'
    })
  },
  methods: {
    ...mapMutations({
      'setStoreTheme': 'settings/setTheme'
    }),
    setTheme(theme) {
      this.setStoreTheme(theme);
      document.body.setAttribute('theme', theme);
    },
    show() {
      this.$refs.palette.show();
    }
  }
}
</script>

<style>

</style>
