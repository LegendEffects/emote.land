<template>
  <div>
    <div class="container">
      <input class="search-box mb-4" v-model="search" placeholder="Search for a favorited emote..." autofocus>

      <div class="grid text-center">
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
