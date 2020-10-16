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
          <div class="d-flex">
            <div>
              <div>Created with ❤️ by <a href="https://legendeffects.co.uk">LegendEffects</a></div>
              <div>Contribute on <a href="https://github.com/legendeffects/emote.land">Github</a></div>
              <div class="color-sub">(yes, they're emojis, but emoji.land was £1000)</div>
            </div>
            <div class="ml-auto my-auto" @click="$refs.themePalette.show()">
              <div class="d-flex">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z" />
                </svg>
                <div class="my-auto ml-1">{{currentTheme}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ThemePalette ref="themePalette" />
    <QuickActions />
    <Alert />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      'emoteCount': 'emotes/size',
      'currentTheme': 'settings/getTheme'
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
