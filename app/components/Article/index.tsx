import { type Article, Category } from '@/lib/microcms'
import { formatRichText } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  data: Article
}

export default function ArticleComponent({ data }: Props) {
  const linkProps = {
    className: 'flex gap-1 items-center text-twitter hover:underline underline-offset-2',
    target: '_blank',
    rel: 'noopener noreferrer',
  }

  return (
    <main className="mx-auto flex max-w-xl flex-col">
      <h1 className="pb-8 text-left text-2xl md:text-center">{data.title}</h1>
      {data.thumbnail && (
        <Image
          src={data.thumbnail?.url}
          alt="サムネイル画像"
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
          className="aspect-[1/0.7] rounded-xl object-cover"
          loading="eager"
        />
      )}

      <div className="flex flex-col gap-3 p-3">
        <div className="w-full break-all text-left">
          <div
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{
              __html: `${formatRichText(data.content)}`,
            }}
            className="w-full break-all text-left text-sm [&>h4]:font-semibold [&>h4]:pt-3 [&>h4]:pb-1"
          />
        </div>

        <ul className="flex flex-col gap-4 text-xs py-4">
          <li className="flex items-center gap-4">
            <span className="bg-muted min-w-[80px] rounded-md px-2 py-2.5 text-center font-medium">
              WEBSITE
            </span>
            <Link href={data.url} {...linkProps}>
              {data.url}
            </Link>
          </li>

          <li className="flex items-center gap-4">
            <span className="bg-muted min-w-[80px] rounded-md px-2 py-2.5 text-center font-medium">
              STACK
            </span>

            <div className="flex flex-wrap items-start gap-1.5">
              {data.category.map((category: Category) => (
                <span key={category.id}>{category.name},</span>
              ))}
            </div>
          </li>

          <li className="flex items-center gap-4">
            <span className="bg-muted min-w-[80px] rounded-md px-2 py-2.5 text-center font-medium">
              SOURCE
            </span>
            <Link href={data.source} {...linkProps}>
              {data.source}
            </Link>
          </li>
        </ul>

        <Link
          href="/work"
          className="ml-auto mt-6 inline-flex w-fit items-center rounded-md bg-accent/50 px-4 py-2 text-sm transition-all duration-300 hover:bg-accent/60"
        >
          一覧へ戻る
        </Link>
      </div>
    </main>
  )
}
