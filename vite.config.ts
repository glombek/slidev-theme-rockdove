import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// Slidev resolves vite.config from every root (theme, addons, then the user
// project), so a theme can contribute Vite config of its own.
//
// Code-block title icons come from a hard-coded map in
// @slidev/client/internals/TitleIcon.vue. It has no .cs / .cshtml entries and
// isn't configurable — the only supported override is a ~icon-name~ token in
// every title. Aliasing the component lets the theme add languages once, so
// decks just write [Foo.cs] and get the right icon.
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^.*internals\/TitleIcon\.vue$/,
        replacement: fileURLToPath(new URL('./overrides/TitleIcon.vue', import.meta.url)),
      },
    ],
  },
})
