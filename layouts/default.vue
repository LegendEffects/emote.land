<template>
  <div class="color-text">
    <div class="container">
      <div class="d-flex mb-2 mt-2">
        <div>
          <h1 class="title color-accent font-weight-normal m-0">Emote.Land</h1>
          <div class="color-sub">Now serving {{ emoteCount }} emotes.</div>
        </div>

        <div class="ml-auto text-right text-sm my-auto">
          <h4 class="m-0 font-weight-light"><span class="color-accent">Left Click</span> for 48x48</h4>
          <h4 class="m-0 font-weight-light"><span class="color-accent">Right Click</span> for Original Size</h4>
          <h4 class="m-0 font-weight-light"><span class="color-accent">ESC</span> for Quick Search</h4>
        </div>
      </div>
    </div>

    <Nuxt />

    <div class="container">
      <div class="credits mt-4 pb-2">
        <div>Created with ❤️ by <a href="https://legendeffects.co.uk">LegendEffects</a></div>
        <div>Contribute on <a href="https://github.com/legendeffects/emote.land">Github</a></div>
        <div class="color-sub">(yes, they're emojis, but emoji.land was £1000)</div>
      </div>
    </div>

    <CommandPalette />
    <Alert />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      'emoteCount': 'emotes/size'
    })
  }
}
</script>

<style scoped>
.title {
  font-size: 2.5rem;
}
</style>
