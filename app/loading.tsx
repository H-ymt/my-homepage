export default function Loading() {
  return (
    <main className="grid place-items-center w-full h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-400 dark:border-slate-400"></div>
      </div>
    </main>
  );
}
