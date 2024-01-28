import { Suspense } from "react"
import BlogList from "@/app/_components/BlogList"

export default function Page() {
  return (
    <>
      <h1>Tech Blog</h1>
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
