import WorksList from '@/components/WorksList';
import { getWorksList } from '../libs/microcms';
import { WORKS_LIST_LIMIT } from '../constants';
import { Suspense } from 'react';

export const revalidate = 60;

export default async function Page() {
  const data = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });

  return (
    <>
      <h1>Works</h1>
      <Suspense
        fallback={
          <div className="flex h-[50vh] items-center justify-center">
            <p className="animate-spin rounded-full h-10 w-10 border-t-[1.3px] border-b-[1.3px] border-orange-400 dark:border-slate-400"></p>
          </div>
        }
      >
        <WorksList articles={data.contents} />
      </Suspense>
    </>
  );
}
