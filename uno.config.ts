import { defineConfig, definePreset } from 'unocss'

export default defineConfig({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  // Code-block title icons added by overrides/TitleIcon.vue. These class names
  // only ever appear as values in that map, so UnoCSS's extractor never sees
  // them as class tokens — without safelisting, the rule is silently omitted
  // and the icon renders as nothing at all.
  safelist: [
    'i-vscode-icons:file-type-csharp',
    'i-vscode-icons:file-type-razor',
    'i-vscode-icons:file-type-xml',
  ],
  // ...
})