import BlogList from '@/app/_components/BlogList'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function Page() {
  return (
    <>
      <h1>Tech Blog</h1>
      <p className="pb-10">
        遭遇したエラーやバグの解決方法、使用した技術の振り返りなど、学んだ知見をより深めるため
        <a
          href="https://zenn.dev/"
          className="inline-flex gap-1 items-center text-primary px-1"
        >
          Zenn
          <FaExternalLinkAlt size="12" />
        </a>
        に技術ブログを投稿しています。
      </p>

      <BlogList />
    </>
  )
}
