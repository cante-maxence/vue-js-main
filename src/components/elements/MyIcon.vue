<script setup>
import { computed } from 'vue'

import IconCommunity from '../icons/IconCommunity.vue'
import IconDocumentation from '../icons/IconDocumentation.vue'
import IconEcosystem from '../icons/IconEcosystem.vue'
import IconSupport from '../icons/IconSupport.vue'
import IconTooling from '../icons/IconTooling.vue'

import Fork from '../icons/Fork.vue'
import truck from '../icons/truck.vue'
import arrowLeft from '../icons/arrowLeft.vue'
import arrowRight from '../icons/arrowRight.vue'
import line from '../icons/line.vue'

import fb from '../icons/fb.vue'
import ln from '../icons/ln.vue'
import twitter from '../icons/twitter.vue'
import insta from '../icons/insta.vue'

const props = defineProps({
  name: String,
  color: String
})

const className = computed(() => ({
  ' -orange': props.color === 'orange',
  ' -light-orange': props.color === 'light-orange',
  ' -black': props.color === 'black'
}))

const getIcon = computed(() => {
  switch (props.name) {
    case 'community':
      return IconCommunity
    case 'documentation':
      return IconDocumentation
    case 'ecosystem':
      return IconEcosystem
    case 'support':
      return IconSupport
    case 'fork':
      return Fork
    case 'truck':
      return truck
    case 'arrowLeft':
      return arrowLeft
    case 'arrowRight':
      return arrowRight
    case 'line':
      return line
    case 'fb':
      return fb
    case 'twitter':
      return twitter
    case 'insta':
      return insta
    case 'ln':
      return ln
    default:
      return IconTooling
  }
})
</script>

<template>
  <i class="icon" :class="className">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  align-items: center;
  background: $white;
  border-radius: 100%;
  box-shadow: 0 0 rem(5) 0 $gray;
  display: inline-flex;
  height: rem(50);
  justify-content: center;
  width: rem(50);
  stroke: black;

  &.-orange {
    background-color: $primary-color;
    fill: white;
    stroke: white;
  }
  &.-light-orange {
    background-color: #f5ddc4;
    fill: $primary-color;
    stroke: $primary-color;
    height: 98px;
    width: 98px;
    svg {
      scale: 2.2;
    }
  }
  &.-black {
    background-color: black;
    fill: white;
    stroke: white;
  }
}
</style>