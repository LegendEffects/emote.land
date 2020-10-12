<template>
  <div>
    <div class="container">
      <h1 class="title font-weight-normal mb-2 mt-2">Emote.Land</h1>
      <h4 class="m-0 font-weight-light"><span class="highlight">Left Click</span> for 48x48</h4>
      <h4 class="m-0 font-weight-light"><span class="highlight">Right Click</span> for Original Size</h4>

      <input class="search-box mb-4" v-model="search" placeholder="Search..." autofocus>

      <div class="grid">

        <div class="column" v-for="(image, x) of chunkedImages" :key="x">
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
      return this.images.filter(el => new RegExp(this.search, 'i').test(el.rel));
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

/** Utility */
.m-0 {
  margin: 0;
}

.mt-2 {
  margin-top: 1rem;
}
.mt-4  {
  margin-top: 2rem;
}
.mb-2 {
  margin-bottom: 1rem;
}
.mb-4 {
  margin-bottom: 2rem;
}

.font-weight-light {
  font-weight: 400;
}
.font-weight-normal {
  font-weight: 500;
}

.highlight, a:visited {
  color: var(--accent-color);
}

/** Container */
.container {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  text-align: center;
}
@media (min-width: 400px) {
  .container {
    width: 85%;
    padding: 0;
  }
}
@media (min-width: 550px) {
  .container {
    width: 80%;
  }
}

.title {
  color: var(--accent-color);
  font-size: 2.75rem;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.grid .column {
  flex: 0 0 16%;
  margin: 0 .333%;
}

/** Search Box */
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

.credits {
  margin-top: 2rem;
  font-size: 1rem;
}

/** Image Container */
.image-title {
  margin-bottom: 1.5rem;
  font-size: 1rem;
  word-break: break-all;
}
.image-container {
  display: flex;

  height: 5rem;
  width: 5rem;
  padding: .5rem;
  border-radius: 1rem;

  margin: 1rem auto;
  margin-bottom: .5rem;

  text-align: center;

  background: var(--bg-color2);
  cursor: pointer;
}
.image-container img {
  width: 100%;
  margin: auto;
}


/** Alert */
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

/** Transitions */
.fade-up-enter-active, .fade-up-leave-active {
  transition: opacity .5s, transform .2s;
}

.fade-up-enter, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
