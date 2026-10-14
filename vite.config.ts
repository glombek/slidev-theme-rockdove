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

// QR code links: with `mdc: true`, [text](url){qr=br} puts a `qr` attribute on the
// link. Render those links as the theme's <QrLink> component instead of a plain <a>,
// the same way Slidev turns internal links into <Link>.
// {qr.br} arrives as an attribute literally named "qr.br", which isn't a valid prop,
// so it's folded into qr="br" first.
function qrLinks(md: any) {
  const render = md.renderer.rules.link_open
    ?? ((tokens: any, idx: number, options: any, _env: any, self: any) => self.renderToken(tokens, idx, options))

  md.renderer.rules.link_open = (tokens: any, idx: number, options: any, env: any, self: any) => {
    const token = tokens[idx]
    const dotted = token.attrs?.find(([name]: [string]) => name.startsWith('qr.'))
    if (dotted) {
      token.attrs = token.attrs.filter((attr: [string, string]) => attr !== dotted)
      token.attrSet('qr', dotted[0].slice('qr.'.length))
    }

    if (token.attrGet('qr') != null) {
      token.tag = 'QrLink'
      for (let i = idx + 1; i < tokens.length; i++) {
        if (tokens[i].type === 'link_close') {
          tokens[i].tag = 'QrLink'
          break
        }
      }
    }

    return render(tokens, idx, options, env, self)
  }
}

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^.*internals\/TitleIcon\.vue$/,
        replacement: fileURLToPath(new URL('./overrides/TitleIcon.vue', import.meta.url)),
      },
    ],
  },
  // Slidev's plugin options; not part of Vite's own config type.
  // The hook was renamed from markdownItSetup to markdownSetup in later Slidev 52.x
  // releases, so register both; running qrLinks twice is harmless.
  ...{
    slidev: {
      markdown: {
        markdownItSetup: qrLinks,
        markdownSetup: qrLinks,
      },
    },
  },
})
