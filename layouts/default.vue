<template>
  <div class="color-text">
    <div class="container">
      <div class="d-flex mb-2 mt-2 flex-wrap">
        <div class="d-flex flex-column">
          <div class="d-flex">
            <h1 class="title color-accent font-weight-normal m-0 my-auto">Emote.Land</h1>

            <div class="ml-4 my-auto d-flex navbar">

              <NuxtLink to="/" class="d-flex nav-item">
                <svg style="width:24px; height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                </svg>
              </NuxtLink>
              <NuxtLink to="/favorites" class="d-flex ml-2 nav-item">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                </svg>
              </NuxtLink>

            </div>

          </div>
          <div class="color-sub">Now serving {{ emoteCount }} emotes.</div>
        </div>


        <div class="ml-auto text-right text-sm my-auto">
          <h4 class="m-0 font-weight-light"><span class="color-accent">Left Click</span> for 48x48</h4>
          <h4 class="m-0 font-weight-light"><span class="color-accent">Right Click</span> for Original Size</h4>
          <h4 class="m-0 font-weight-light"><span class="color-accent">Shift Click</span> to Favorite</h4>
          <h4 class="m-0 font-weight-light"><span class="color-accent">ESC</span> for Quick Search</h4>
        </div>
      </div>
    </div>

    <Nuxt />

    <div class="mt-auto">
      <div class="container">
        <div class="credits py-4">
          <div>Created with ❤️ by <a href="https://legendeffects.co.uk">LegendEffects</a></div>
          <div>Contribute on <a href="https://github.com/legendeffects/emote.land">Github</a></div>
          <div class="color-sub">(yes, they're emojis, but emoji.land was £1000)</div>
        </div>
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

<style lang="scss" scoped>
.title {
  font-size: 2.5rem;
}

.navbar .nav-item {
  padding: .15rem;
  border-radius: .25rem;
  transition: .25s ease;

  &:focus {
    background: var(--bg-color2);
    outline: none;
  }
}
</style>
