<template>
  <CommandPalette ref="palette" :entries="entries" />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {return {
    entries: []
  }},

  created() {
    // Routes
    this.entries.push({
      id: 'switchPage',
      name: 'View all emotes',
      run: () => {
        this.$router.push('/');
      }
    });
    this.entries.push({
      id: 'switchPage',
      name: 'View favorites',
      run: () => {
        this.$router.push('/favorites');
      }
    });

    // Emotes
    const copyEmote = ({ shift }, attributes) => {
      navigator.clipboard.writeText(new URL(`${baseUrl}${(shift) ? 'large/' : ''}${attributes.rel}`, location).href);
      this.$alert((shift) ? 'Large version copied to clipboard!' : 'Copied to clipboard!')
    };

    for(const emote of this.emotes) {
      this.entries.push({
        id: 'showEmote',
        name: `Copy emote ${emote.rel.replace('./', '')}`,
        image: `emojis/large/${emote.rel}`,
        attributes: emote,
        run: copyEmote
      });
    }
  },

  mounted() {
    window.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') {
        this.$refs.palette.toggle();
      }
    })
  },

  computed: {
    ...mapGetters({
      'emotes': 'emotes/all'
    })
  }
}
</script>

<style>

</style>
