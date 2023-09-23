import { type Article } from '@/app/libs/microcms';
import { formatRichText } from '@/app/utils/formatRichText';
import Image from 'next/image';
import Link from 'next/link';
import { PiArrowSquareInLight } from 'react-icons/pi';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main className="flex flex-col max-w-xl mx-auto">
      <h1 className="text-2xl">{data.title}</h1>
      {data.thumbnail && (
        <Image
          src={data.thumbnail?.url}
          alt=""
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
          className="rounded-xl shadow-lg border border-orange-50 dark:border-gray-50/10"
        />
      )}

      <div className="flex flex-col gap-3 p-3">
        <div
          dangerouslySetInnerHTML={{
            __html: `${formatRichText(data.content)}`,
          }}
          className="w-full text-left break-all"
        />

        <ul className="flex flex-col gap-2 text-xs">
          <li className="flex gap-2 items-center">
            <span className="py-1.5 px-2 font-medium rounded-sm bg-orange-400 dark:bg-gray-700 bg-opacity-50 dark:text-primaryLight">
              WEBSITE
            </span>
            <Link
              href={data.url}
              className="flex gap-1 items-center text-twitter hover:underline underline-offset-2"
            >
              {data.url}
              <PiArrowSquareInLight size="20px" />
            </Link>
          </li>

          <li className="flex gap-2 items-center">
            <span className="py-1.5 px-2 font-medium rounded-sm bg-orange-400 dark:bg-gray-700 bg-opacity-50 dark:text-primaryLight">
              Stack
            </span>

            <div className="flex flex-wrap gap-1.5 items-start">
              {data.category.map((data: any) => (
                <span key={data.id}>{data.name},</span>
              ))}
            </div>
          </li>
        </ul>

        <Link
          href="/works"
          className="inline-flex items-center w-fit mt-6 ml-auto py-2 px-4 text-sm bg-orange-400/70 hover:bg-orange-400 dark:bg-slate-600 dark:hover:bg-slate-700 rounded-md transition-all duration-300"
        >
          一覧へ戻る
        </Link>
      </div>
    </main>
  );
}
