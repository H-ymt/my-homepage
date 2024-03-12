import BlogList from "@/app/_components/BlogList"
import { Suspense } from "react"
import { FaExternalLinkAlt } from "react-icons/fa"

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
      <Suspense
        fallback={
          <div className="flex h-[50vh] items-center justify-center">
            <p className="h-10 w-10 animate-spin rounded-full border border-b-[1.3px] border-t-[1.3px] border-accent" />
          </div>
        }
      >
        <BlogList />
      </Suspense>
    </>
  )
}
