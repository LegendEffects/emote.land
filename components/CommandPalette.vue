<template>
  <div class="command-palette-container d-flex" v-if="visible" @click.self="visible = false">
    <div
      class="command-palette d-flex flex-column bg-bg mx-auto"
      v-on:keydown.up.prevent="up()"
      v-on:keydown.down.prevent="down()"
      v-on:keydown.enter.prevent="execute"
    >

      <input class="search" v-model="search" placeholder="Type to search..." ref="searchBox" autofocus>
      <div class="suggestions" ref="suggestions">
        <div v-for="(suggestion, i) of suggestions" :key="i" class="entry text-sm px-2 py-1 color-sub" :class="{'selected': selected === i}">
          <img v-if="suggestion.image !== undefined" :src="suggestion.image">
          <div class="name">{{suggestion.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const baseUrl = 'emojis/';
import { mapGetters } from 'vuex'

export default {
  data() {return {
    visible: false,

    search: '',
    selected: 0,
    entries: [],

    inputs: {
      up: false,
      down: false
    }
  }},

  created() {
    // Routes
    this.entries.push({
      id: 'switchPage',
      name: 'View all emotes',
      run: () => {
        this.$router.push('/');
      }
    })
    this.entries.push({
      id: 'switchPage',
      name: 'View favorites',
      run: () => {
        this.$router.push('/favorites');
      }
    })

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
        this.toggle();
      }
    })
  },

  methods: {
    // Navigate
    down() {
      if(this.selected + 1 >= this.suggestions.length) {
        this.selected = 0;
      } else {
        this.selected++;
      }
      this.updateScroll();
    },
    up() {
      if(this.selected - 1 < 0) {
        this.selected = this.suggestions.length - 1;
      } else {
        this.selected--;
      }
      this.updateScroll();
    },
    execute(e) {
      const selected = this.suggestions[this.selected];
      if(selected === undefined) {
        return;
      }

      if(selected.run) {
        selected.run({
          shift: e.shiftKey,
          ctrl: e.ctrlKey,
          repeat: e.repeat
        }, selected.attributes);
      }

      this.close();
    },

    // Toggle Visibility
    close() {
      this.visible = false;
    },
    show() {
      this.visible = true;

      this.$nextTick(() => {
        this.$refs.searchBox.focus();
      });
    },
    toggle() {
      if(this.visible) {
        return this.close();
      }
      return this.show();
    },

    // Update Scroll
    updateScroll() {
      this.$nextTick(() => {
        const suggestions = this.$refs.suggestions;

        let selected = suggestions.getElementsByClassName('selected');
        if(selected.length === 0) return;
        selected = selected[0];

        selected.scrollIntoView({
          block: 'center'
        });
      })
    }
  },

  computed: {
    ...mapGetters({
      'emotes': 'emotes/all'
    }),
    suggestions() {
      return this.entries.filter(el => new RegExp(this.search, 'i').test(el.name));
    }
  }
}
</script>

<style lang="scss" scoped>
.command-palette-container {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, .5);
}
.command-palette {
  z-index: 3;
  width: 700px;
  margin-top: 3rem;
  max-height: 85vh;

  &>.search {
    background: transparent;

    box-shadow: none;
    border: none;
    outline: none;

    padding: 1rem;
    font-size: 1rem;
    color: var(--accent-color);
  }

  .suggestions {
    overflow-y: auto;

    .entry {
      display: flex;
      cursor: pointer;

      &.selected {
        background: var(--accent-color);
      }

      &:hover {
        background: var(--sub-color);
        color: var(--text-color);
      }

      .name {
        margin: auto 0;
        margin-left: 1rem;
      }

      img {
        width: 32px;
      }
    }
  }
}
</style>
