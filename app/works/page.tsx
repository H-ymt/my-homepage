import WorksList from '@/components/WorksList';
import { getWorksList } from '../libs/microcms';
import { WORKS_LIST_LIMIT } from '../constants';

export const revalidate = 60;

export default async function Page() {
  const data = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });

  return (
    <>
      <section>
        <h1>Works</h1>
        <WorksList articles={data.contents} />
      </section>
    </>
  );
}
