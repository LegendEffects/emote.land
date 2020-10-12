<template>
  <div>
    <div class="container">
      <input class="search-box mb-4" v-model="search" placeholder="Search for a favorited emote..." autofocus>

      <div class="text-center pb-4" v-if="filter(search).length === 0">
        <h1>It's empty here!</h1>
        <NuxtLink class="btn bg-accent glow-accent color-text mt-2" to="/">All Emotes</NuxtLink>
      </div>
      <div class="grid text-center" v-else>
        <ImageDisplay class="column" v-for="(img, x) of filter(search)" :key="x" :image="img" />
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {return {
    search: ''
  }},

  computed: {
    ...mapGetters({
      'filter': 'favorites/filter'
    }),
  }
}
</script>
