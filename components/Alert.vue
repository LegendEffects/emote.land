<template>
  <transition name="fade-up">
    <div class="alert-container" v-if="exists">
      <div class="alert color-text glow-accent" :class="`bg-${alert.type}`">
        {{ alert.message }}
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      exists: 'alert/exists',
      alert: 'alert/getAlert',
      msLeft: 'alert/getMsLeft'
    })
  }
}
</script>

<style lang="scss" scoped>
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
</style>
