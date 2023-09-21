import { Article } from '@/app/libs/microcms';
import Image from 'next/image';
import Link from 'next/link';
import Category from '../Category';

type Props = {
  works: Article;
};

export default function WorksListItem({ works }: Props) {
  return (
    <li className="inline-block border-none rounded-3xl group ">
      <Link href={`/works/${works.id}`} className="">
        {works.thumbnail ? (
          <Image
            src={works.thumbnail?.url}
            alt=""
            width={works.thumbnail?.width}
            height={works.thumbnail?.height}
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        ) : (
          <Image src="" alt="No Image" width={800} height={800} />
        )}

        <dl className="inline-flex flex-col gap-2 mt-4 pl-2">
          <dt className="text-lg font-semibold">{works.title}</dt>
          <dd className="flex gap-2.5">
            {works.category.map((data: any) => (
              <div
                key={data.id}
                className="py-1.5 px-2 text-sm rounded-sm bg-orange-300 dark:bg-gray-700 bg-opacity-50 dark:text-primaryLight"
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
