import { type Article } from '@/app/libs/microcms';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: `${data.content}` }}/>
    </main>
  );
}
