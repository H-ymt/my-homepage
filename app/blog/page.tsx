import BlogList from '@/components/BlogList';

export default function Page() {
  return (
    <>
      <section>
        <h1>Tech Blog</h1>
        <div className="max-w-[960px] mx-auto">
          <BlogList />
        </div>
      </section>
    </>
  );
}
