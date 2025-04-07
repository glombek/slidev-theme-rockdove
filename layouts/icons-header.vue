<script setup lang="ts">
const props = defineProps({
  cols: {
    type: Number,
    default: 3
  }
})
</script>
<template>
    <div
      class="slidev-layout icons" 
      :style="{'--icons-columns': props.cols}"
    >
      <slot />
      <div class="icons-wrapper">
        <slot name="icons" />
      </div>
      <slot name="footer" />
    </div>
</template>