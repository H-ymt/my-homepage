import { WORKS_LIST_LIMIT } from '@/app/constants';
import { getWorksList } from '@/app/libs/microcms';
import WorksList from '@/app/_components/WorksList';

type Props = {
  params: {
    current: string;
  };
};

export const runtime = 'edge';
export const revalidate = 60;

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    offset: WORKS_LIST_LIMIT * (current - 1),
  });

  return (
    <>
      <WorksList articles={data.contents} />
    </>
  );
}
