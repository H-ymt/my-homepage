import Link from 'next/link';
import ConvertDate from '../ConvertDate';

interface Post {
  id: number;
  path: string;
  emoji: string;
  title: string;
  published_at: string;
}

export default async function BlogList() {
  const res = await fetch(
    'https://zenn.dev/api/articles?username=h_ymt&order=latest',
    { next: { revalidate: 120 } },
  );
  const data = await res.json();
  const posts: Post[] = data.articles.slice(0, 10);

  return (
    <>
      <ul className="grid gap-7 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-items-center">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`https://zenn.dev/${post.path}`}
              target="blank"
              className="inline-flex flex-col items-center justify-center gap-4 w-[300px] min-h-[220px] max-w-[320px] p-6 bg-background shadow-outerSm rounded-3xl hover:scale-[1.02] duration-200 transition-all"
            >
              <span className="text-6xl">{post.emoji}</span>
              <p className="text-left font-medium line-clamp-2 overflow-hidden break-all">
                {post.title}
              </p>
              <p className="mt-2 text-xs text-mutedBlack dark:text-mutedGray tracking-widest">
                <ConvertDate convertDate={post.published_at} />
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
