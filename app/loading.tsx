export default function Loading() {
  return (
    <main className="grid place-items-center w-full h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-[1.3px] border-b-[1.3px] border-accent"></div>
      </div>
    </main>
  );
}
