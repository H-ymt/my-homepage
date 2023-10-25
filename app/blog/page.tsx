import { Suspense } from 'react';
import BlogList from '@/components/BlogList';

export const revalidate = 120;

export default function Page() {
  return (
    <>
      <h1>Tech Blog</h1>
      <Suspense
        fallback={
          <div className="flex h-[50vh] items-center justify-center">
            <p className="animate-spin rounded-full h-10 w-10 border-t-[1.3px] border-b-[1.3px] border-orange-400 dark:border-slate-400"></p>
          </div>
        }
      >
        <BlogList />
      </Suspense>
    </>
  );
}
