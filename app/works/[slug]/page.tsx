import Article from '@/app/_components/Article'
import { getWorksDetail } from '@/app/libs/microcms'
import { Metadata } from 'next'

type Props = {
  params: {
    slug: string
  }
  searchParams: {
    dk: string
  }
}

export const runtime = 'edge'

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getWorksDetail(params.slug, {
    draftKey: searchParams.dk,
  })

  return {
    title: data.meta?.title,
    description: data.meta?.description,
    twitter: {
      title: data.meta?.title,
      description: data.meta?.description,
    },
  }
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getWorksDetail(params.slug, {
    draftKey: searchParams.dk,
  })

  return (
    <>
      <Article data={data} />
    </>
  )
}
