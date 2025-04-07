<script setup lang="ts">
const props = defineProps({
  cols: {
    type: Number,
    default: 4
  }
})
</script>
<template>
    <div
      class="slidev-layout icons" 
      :style="{'--icons-columns': props.cols}"
    >
      <div class="icons-wrapper">
        <slot />
      </div>
    </div>
</template>