<script>
export default {
  data() {
    return {
      percent: 0
    }
  },
  methods: {
    handleScroll() {
      let scrollTop = window.scrollY
      let scrollBottom = scrollTop + window.innerHeight

      let offsetTop = this.$refs.container.offsetTop
      let elementHeight = this.$refs.container.offsetHeight

      let percent = ((scrollBottom - offsetTop) / elementHeight) * 100

      this.percent = Math.round(percent)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<template>
  <div ref="container" class="backgroundScroll">
    <div class="backgroundScroll__content">
      <p>Section Scroll : {{ percent }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.backgroundScroll {
  background: $black;
  color: $white;
  height: 2000px;

  &__content {
    left: 0;
    position: sticky;
    top: 0;
    width: 100%;
  }
}
</style>
