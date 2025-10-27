import type { MarkdownTransformContext } from '@slidev/types'
import { defineTransformersSetup } from '@slidev/types'

function myAutoLinks(ctx: MarkdownTransformContext) {
  ctx.s.replace(
    /(^|[^\("])(https?:\/\/([^\s]+[\w])\/?)/gm,
    (match, prefix, url, display) => {
      //console.log(match, prefix, url, display);
      return `${prefix}[${display}](${url})`
    },
  )
}

function multiLineBullets(ctx: MarkdownTransformContext) {
  ctx.s.replace(
    /(?:- .*?)*(?:(?:\n[^\S\r\n]+[^\S\r\n-]).*)+/g,
    (match) => {
      return match.replace(/\n\s+/g, '<br />')
    }
  )
}

export default defineTransformersSetup(() => {
  return {
    pre: [myAutoLinks, multiLineBullets],
    preCodeblock: [],
    postCodeblock: [],
    post: [],
  }
})