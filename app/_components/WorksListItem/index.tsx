import { Article } from '@/app/libs/microcms';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  works: Article;
};

export default function WorksListItem({ works }: Props) {
  return (
    <li className="group grid w-full grid-rows-[subgrid] rounded-3xl border-none transition-[transform] duration-300 hover:scale-[1.02]">
      <Link href={`/works/${works.id}`} className="">
        {works.thumbnail ? (
          <Image
            src={works.thumbnail?.url + '?w=1000&h=530'}
            alt=""
            width={works.thumbnail?.width}
            height={works.thumbnail?.height}
            className="aspect-[1/0.8] h-[60%] min-w-[296px] rounded-lg object-cover shadow-outerXs group-hover:shadow-outerSm"
            sizes="(min-width: 640px) 296px, 100vw"
            loading="eager"
          />
        ) : (
          <Image src="" alt="No Image" width={800} height={800} />
        )}

        <dl className="mt-3 inline-flex flex-col gap-2 pl-2">
          <dt className="line-clamp-2 overflow-ellipsis text-base font-semibold">
            {works.title}
          </dt>
          <dd className="flex flex-wrap gap-2.5">
            {works.category.map((data: { id: string; name: string }) => (
              <div
                key={data.id}
                className="rounded-sm bg-accent/50 px-2 py-1.5 text-xs font-medium"
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
