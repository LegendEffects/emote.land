<template>
  <div>
    <div class="image-container" @click.prevent.left.exact="copy(false)" @click.prevent.exact.right="copy(true)" @click.prevent.shift="favorite()" @dblclick.prevent="favorite()">
      <img class="m-auto" :src="`emojis/large/${image.rel}`" :alt="image.rel">
    </div>
    <div class="image-title" :class="{'color-accent': isFavorited}">{{ image.rel.replace('./', '') }}</div>
  </div>
</template>

<script>
const baseUrl = 'emojis/';

export default {
  props: ['image'],
  methods: {
    copy(large) {
      navigator.clipboard.writeText(new URL(`${baseUrl}${(large) ? 'large/' : ''}${this.image.rel}`, location).href);

      this.$alert((large) ? 'Large version copied to clipboard!' : 'Copied to clipboard!');
    },
    favorite() {
      this.$favorites.toggle(this.image).then(added => {
        this.$alert(added ? 'Added to favorites.' : 'Removed from favorites.');
      });
    }
  },
  computed: {
    isFavorited() {
      return this.$favorites.has(this.image);
    }
  }
}
</script>

<style lang="scss" scoped>
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

  img {
    width: 100%;
  }

  overflow: hidden;
}
</style>
