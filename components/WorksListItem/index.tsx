import { Article } from '@/app/libs/microcms';
import Image from 'next/image';
import Link from 'next/link';
import Category from '../Category';

type Props = {
  works: Article;
};

export default function WorksListItem({ works }: Props) {
  return (
    <li className="inline-block w-full border-none rounded-3xl group ">
      <Link href={`/works/${works.id}`} className="">
        {works.thumbnail ? (
          <Image
            src={works.thumbnail?.url}
            alt=""
            width={works.thumbnail?.width}
            height={works.thumbnail?.height}
            className="rounded-xl shadow-lg border border-orange-50 dark:border-gray-50/10"
          />
        ) : (
          <Image src="" alt="No Image" width={800} height={800} />
        )}

        <dl className="inline-flex flex-col gap-2 mt-3 pl-2">
          <dt className="text-lg font-semibold">{works.title}</dt>
          <dd className="flex flex-wrap gap-2.5">
            {works.category.map((data: any) => (
              <div
                key={data.id}
                className="py-1.5 px-2 text-xs font-medium rounded-sm bg-orange-300 dark:bg-gray-700 bg-opacity-50 dark:text-primaryLight"
              >
                {data.name}
              </div>
            ))}
          </dd>
        </dl>
      </Link>
    </li>
  );
}
