<template>
  <div>
    <div class="container">
      <h1 class="title">Emote.Land</h1>
      <h6 class="m-0"><span class="highlight">Left Click</span> for 48x48</h6>
      <h6 class="m-0"><span class="highlight">Right Click</span> for Original Size</h6>

      <input v-model="search" class="search-box" placeholder="Search...">

      <div class="row" v-for="(row, i) of chunkedImages" :key="i">
        <div class="two columns" v-for="(image, x) of row" :key="x">

          <div class="image-container" title="Click to copy." @click.left="copy(image)" @click.right.prevent="copy(image, true)">
            <img :src="'emojis/large/' + image.rel" :alt="image.rel">
          </div>
          <div class="image-title">{{image.rel.replace('./', '')}}</div>

        </div>
      </div>

      <div class="credits">
        <div>Created with ❤️ by <a href="https://legendeffects.co.uk">LegendEffects</a></div>
        <div>Contribute on <a href="https://github.com/legendeffects/emote.land">Github</a></div>
      </div>
    </div>

    <transition name="fade-up">
      <div class="alert-container" v-if="alert">
        <div class="alert">{{ alert }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
// https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-265.php
function chunk(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
}

// File Pulling originated from https://stackoverflow.com/questions/54095215/how-to-get-all-the-image-files-in-a-directory-using-vue-js-nuxt-js
export default {
  data() {return {
    images: [],
    search: '',
    alert: null
  }},

  mounted() {
    this.importAll(require.context('../static/emojis/large/', true, /\.png|.gif$/))
  },

  methods: {
    importAll(r) {
      this.images = r.keys().map(key => ({abs: r(key), rel: key}));
    },
    copy(img, large) {
      const baseUrl = (large) ? 'emojis/large/' : 'emojis/';

      navigator.clipboard.writeText(new URL(baseUrl + img.rel, location).href);
      this.sendAlert((large) ? 'Large version copied to clipboard!' : 'Copied to clipboard!');
    },
    sendAlert(msg) {
      this.alert = msg;
      setTimeout(() => {
        this.alert = null;
      }, 3000);
    }
  },
  computed: {
    chunkedImages() {
      const regexp = new RegExp(this.search, 'i')
      const img = this.images.filter(el => regexp.test(el.rel));

      return chunk(img, 6);
    }
  }
}
</script>

<style>
:root {
  --bg-color: #323437;
  --bg-color2: #212224;
  --text-color: #fff;
  --accent-color: #e2b714;
}

body {
  margin: 0;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 2rem;
}

.m-0 {
  margin: 0;
}

.credits {
  margin-top: 2rem;
  font-size: 1rem;
}

.search-box {
  margin-top: 1rem;
  background: var(--bg-color2);
  color: var(--text-color);
  width: 100%;
  border-radius: .5rem;
  padding: .75rem 1rem;
  transition: all .2s ease;
  outline: none;
  border: 1px solid var(--bg-color2);
}
.search-box:focus {
  border: 1px solid var(--accent-color);
}

.container {
  text-align: center;
}

.image-title {
  margin-bottom: 1.5rem;
  font-size: 1rem;
  word-break: break-all;
}
.highlight {
  color: var(--accent-color);
}
.image-container {
  height: 5rem;
  width: 5rem;
  text-align: center;

  margin: 1rem;
  margin-bottom: .5rem;
  padding: .5rem;
  border-radius: 1rem;

  background: var(--bg-color2);
  display: flex;
  cursor: pointer;
}
.image-container img {
  width: 100%;
  margin: auto;
}
.title {
  color: var(--accent-color);
}

.alert-container {
  position: fixed;
  left: 50%;
  bottom: 5vh;
}

.alert {
  position: relative;

  word-break: keep-all;
  padding: 1rem;
  border-radius: 1rem;

  background: var(--bg-color2);
  color: var(--accent-color);

  left: -50%;
}

.fade-up-enter-active, .fade-up-leave-active {
  transition: opacity .5s, transform .2s;
}

.fade-up-enter, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
