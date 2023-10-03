<script setup>
import { computed } from "vue"
const props = defineProps({
  href: String,
  size: String,
  variant: String
})
/* J'ai corrigé cette partie après le cours avec une gestion des classes beaucoup plus simple. 
J'avais oublié qu'on pouvait mettre des objets dans le className */
const className = computed(() => ({
  ' -orange': props.variant === 'orange',
  ' -white': props.variant === 'white',

}))
</script>
<template>
  <a v-if="href" :href="href" class="button" :class="className">
    <slot></slot>
  </a>
  <button v-else class="button" :class="className">
    <slot>
      <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 21L11 11L1 1"  stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  background-color: $white;
  border: none;
  border-radius: rem(15);
  display: inline-block;
  color: $primary-color;
  font-size: $regular-font-size;
  font-weight: 600;
  padding: rem(33) rem(67);
  text-decoration: none;
  word-wrap: break-word;

  &.-orange {
    background-color: $primary-color;
    ;
    color: $white;
  }
}
</style>