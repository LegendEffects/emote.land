<template>
  <div>
    <div class="container">
      <input class="search-box mb-4" v-model="search" placeholder="Search for an emote..." autofocus>

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
      'filter': 'emotes/filter'
    }),
  }
}
</script>

<style>
:root {
  --bg-color: #323437;
  --bg-color2: #212224;
  --sub-color: #646669;
  --text-color: #fff;
  --accent-color: #e2b714;
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
</style>
