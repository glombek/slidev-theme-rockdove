<template>
  <div class="slidev-layout quote">
    <div class="my-auto">
      <blockquote class="big-quote">
        <slot />
        <cite class="big-quote-cite">
          <slot name="cite" />
        </cite>
      </blockquote>
    </div>
  </div>
</template>
