import cheerio from 'cheerio'
import { type ClassValue, clsx } from 'clsx'
import hljs from 'highlight.js'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatRichText = (richText: string) => {
  const $ = cheerio.load(richText)
  $('pre code').each((_, elm) => {
    const lang = $(elm).attr('class')
    const res = lang
      ? hljs.highlight($(elm).text(), {
          language: lang?.replace(/^language-/, '') || '',
        })
      : hljs.highlightAuto($(elm).text())
    $(elm).html(res.value)
  })
  return $.html()
}
