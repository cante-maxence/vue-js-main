<script setup>
import { computed } from "vue"
const props = defineProps({
    variant: String
})
/* J'ai corrigé cette partie après le cours avec une gestion des classes beaucoup plus simple. 
J'avais oublié qu'on pouvait mettre des objets dans le className */
// const className = computed(() => ({
//     ' -variant': props.size === 'variant'
// }))
</script>
<template>
    <div class="couverts" :class="className">
        <svg width="404" height="505" viewBox="0 0 404 505" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M107 80.0001C73.4 -28.7999 36.3333 59.3333 22 106C22 128 4.00001 133.5 4.00001 177C4.00001 220.5 2.50001 245.5 4.00001 273.5C5.50001 301.5 29 317.5 50 317.5H143.5L156 502.5H233.5C233.5 445 238.8 327.5 260 317.5C286.5 305 293.5 293.5 313.5 285C333.5 276.5 356.5 262 361.5 234.5C366.5 207 391.5 168 400.5 149.5C409.5 131 340 32.5 327.5 13.5C315 -5.5 292.5 39.5 285 48.5C277.5 57.5 289 84.0001 299 115C309 146 297 203.5 299 216C300.6 226 256 208.5 233.5 198.5V122C233.5 117.5 251.5 44.5 251.5 39.5C251.5 34.5 204 8.00001 199 3.50001C194 -0.999992 157.5 43.5 156 48.5C154.8 52.5 161.167 73.8334 164.5 84.0001C165.167 95.5 166.1 134.5 164.5 198.5C162.9 262.5 125.5 232.5 107 209.5V80.0001Z"
                stroke="black" stroke-width="5" /> 
        </svg>
        </div>
</template>

<style lang="scss" scoped>
.couverts {
    background-color: $primary-color;
    border-radius: rem(25);
    padding: rem(14) rem(29);

    // &.-variant {
    //     border-radius: rem(25);
    //     padding: rem(14) rem(29);
    //     font-weight: 400;
    // }
}</style>