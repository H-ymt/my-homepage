import WorksList from '@/app/_components/WorksList';
import { getWorksList } from '../libs/microcms';
import { WORKS_LIST_LIMIT } from '../constants';
import { Suspense } from 'react';

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
            <p className="h-10 w-10 animate-spin rounded-full border-b-[1.3px] border-t-[1.3px] border-accent"></p>
          </div>
        }
      >
        <WorksList articles={data.contents} />
      </Suspense>
    </>
  );
}
