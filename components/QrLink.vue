<script setup lang="ts">
// A link with a QR code for its URL. Markdown links become this component when they carry
// a `qr` attribute (see vite.config.ts):
//   [text](url){qr}          code inline, after the link
//   [text](url){qr=block}    code on its own line under the link
//   [text](url){qr=br}       code pinned to a slide corner: tl, tr, bl or br
//   {qr.br} works too, and {qr=block qr-size=220px} sets the size.
import { computed } from 'vue'
import { encode, renderSVG } from 'uqr'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  href: string
  qr?: string
  qrSize?: string
}>()

const positions = ['inline', 'block', 'tl', 'tr', 'bl', 'br']

const position = computed(() => positions.includes(props.qr ?? '') ? props.qr : 'inline')

const size = computed(() => {
  if (!props.qrSize)
    return undefined
  return /^\d+$/.test(props.qrSize) ? `${props.qrSize}px` : props.qrSize
})

// Low error correction: a projected code never gets damaged, so fewer, bigger modules scan better.
// No border in the SVG: the quiet zone is CSS padding, on the sides each position needs.
const options = { ecc: 'L', border: 0 } as const
const svg = computed(() => renderSVG(props.href, options))
const modules = computed(() => encode(props.href, options).size)

const style = computed(() => ({
  '--qr-modules': modules.value,
  ...size.value ? { '--qr-size': size.value } : {},
}))
</script>

<template>
  <span class="qr-link" :class="`qr-link--${position}`" :style="style">
    <a :href="href" v-bind="$attrs"><slot /></a>
    <span class="qr-link__code" aria-hidden="true" v-html="svg" />
  </span>
</template>

<style>
/* Always dark on a light tile, even on dark slides: some phone scanners struggle with inverted codes.
   --qr-size is the code itself; the quiet zone is padding of one module (--qr-module) added
   around it, on the sides each position sets. */
.qr-link {
  --qr-module: calc(var(--qr-size) / var(--qr-modules));
}

.qr-link__code {
  display: inline-block;
  box-sizing: content-box;
  width: var(--qr-size);
  line-height: 0;
  background: #fff;
  border-radius: 4px;
}

.qr-link__code svg {
  display: block;
  width: 100%;
  height: auto;
}

.qr-link--inline {
  --qr-size: 3em;
}

.qr-link--inline .qr-link__code {
  margin-left: 0.4em;
  padding-inline: var(--qr-module);
  vertical-align: middle;
}

/* Only the code breaks onto its own line; the link stays inline with whatever precedes it,
   such as an icon in a bio list. */
.qr-link--block {
  --qr-size: 200px;
}

.qr-link--block .qr-link__code {
  display: block;
  margin-top: 0.5em;
  padding-block: var(--qr-module);
}

/* Corners: position: fixed resolves against the slide, because Slidev scales each slide with a
   transform, and a transformed ancestor is the containing block for fixed descendants. */
.qr-link--tl,
.qr-link--tr,
.qr-link--bl,
.qr-link--br {
  --qr-size: 120px;
}

.qr-link--tl .qr-link__code,
.qr-link--tr .qr-link__code,
.qr-link--bl .qr-link__code,
.qr-link--br .qr-link__code {
  position: fixed;
  z-index: 10;
  padding: var(--qr-module);
  /* Stays clear of the finder patterns with a one-module quiet zone at the default size */
  border-radius: 8px;
}

.qr-link--tl .qr-link__code { top: 0.5rem; left: 0.5rem; }
.qr-link--tr .qr-link__code { top: 0.5rem; right: 0.5rem; }
.qr-link--bl .qr-link__code { bottom: 0.5rem; left: 0.5rem; }
.qr-link--br .qr-link__code { bottom: 0.5rem; right: 0.5rem; }
</style>
