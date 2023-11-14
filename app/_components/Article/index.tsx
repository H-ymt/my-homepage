import { Category, type Article } from '@/app/libs/microcms';
import { formatRichText } from '@/app/utils/formatRichText';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  const linkProps = {
    className: 'flex gap-1 items-center text-twitter hover:underline underline-offset-2',
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <main className="flex flex-col max-w-xl mx-auto">
      <h1 className="text-2xl pb-8 text-left md:text-center">{data.title}</h1>
      {data.thumbnail && (
        <Image
          src={data.thumbnail?.url}
          alt="ポートフォリオのサムネイル画像"
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
          className="rounded-xl shadow-outerXs"
        />
      )}

      <div className="flex flex-col gap-3 p-3">
        <div
          dangerouslySetInnerHTML={{
            __html: `${formatRichText(data.content)}`,
          }}
          className="w-full text-left break-all"
        />

        <ul className="flex flex-col gap-4 text-xs">
          <li className="flex gap-4 items-center">
            <span className="min-w-[80px] text-center py-2.5 px-2 font-medium rounded-md shadow-outerXs">
              WEBSITE
            </span>
            <Link href={data.url} {...linkProps}>
              {data.url}
            </Link>
          </li>

          <li className="flex gap-4 items-center">
            <span className="min-w-[80px] text-center py-2.5 px-2 font-medium rounded-md shadow-outerXs">
              STACK
            </span>

            <div className="flex flex-wrap gap-1.5 items-start">
              {data.category.map((category: Category) => (
                <span key={category.id}>{category.name},</span>
              ))}
            </div>
          </li>

          <li className="flex gap-4 items-center">
            <span className="min-w-[80px] text-center py-2.5 px-2 font-medium rounded-md shadow-outerXs">
              SOURCE
            </span>
            <Link href={data.source} {...linkProps}>
              {data.source}
            </Link>
          </li>
        </ul>

        <Link
          href="/works"
          className="inline-flex items-center w-fit mt-6 ml-auto py-2 px-4 text-sm bg-accent/50 hover:bg-accent/60 rounded-md transition-all duration-300"
        >
          一覧へ戻る
        </Link>
      </div>
    </main>
  );
}
