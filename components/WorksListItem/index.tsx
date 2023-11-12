import { Article } from '@/app/libs/microcms';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  works: Article;
};

export default function WorksListItem({ works }: Props) {
  return (
    <li className="grid grid-rows-[subgrid] w-full border-none rounded-3xl group hover:scale-[1.02] transition-[transform] duration-300">
      <Link href={`/works/${works.id}`} className="">
        {works.thumbnail ? (
          <Image
            src={works.thumbnail?.url + '?w=1000&h=530'}
            alt=""
            width={works.thumbnail?.width}
            height={works.thumbnail?.height}
            className="min-w-[296px] h-[60%] object-cover rounded-lg shadow-outerXs group-hover:shadow-outerSm"
            sizes="(min-width: 640px) 296px, 100vw"
            loading="eager"
          />
        ) : (
          <Image src="" alt="No Image" width={800} height={800} />
        )}

        <dl className="inline-flex flex-col gap-2 mt-3 pl-2">
          <dt className="text-base font-semibold overflow-ellipsis line-clamp-2">
            {works.title}
          </dt>
          <dd className="flex flex-wrap gap-2.5">
            {works.category.map((data: any) => (
              <div
                key={data.id}
                className="py-1.5 px-2 text-xs font-medium rounded-sm bg-accent/50"
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
