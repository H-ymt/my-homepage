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
  const res = await fetch('https://zenn.dev/api/articles?username=h_ymt&order=latest');
  const data = await res.json();
  const posts: Post[] = data.articles.slice(0, 10);

  return (
    <>
      <ul className="grid place-items-center gap-7 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`https://zenn.dev/${post.path}`}
              target="blank"
              className="inline-flex min-h-[220px] w-[300px] max-w-[320px] flex-col items-center justify-center gap-4 rounded-3xl bg-background p-6 shadow-outerSm transition-all duration-200 hover:scale-[1.02]"
            >
              <span className="text-6xl">{post.emoji}</span>
              <p className="line-clamp-2 overflow-hidden break-all text-left font-medium">
                {post.title}
              </p>
              <p className="text-mutedBlack dark:text-mutedGray mt-2 text-xs tracking-widest">
                <ConvertDate convertDate={post.published_at} />
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
