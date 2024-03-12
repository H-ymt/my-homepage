export default function Loading() {
  return (
    <main className="grid h-screen w-full place-items-center">
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-b-[1.3px] border-t-[1.3px] border-accent" />
      </div>
    </main>
  )
}
