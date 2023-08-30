import Link from 'next/link';

interface Post {
  id: number;
  path: string;
  emoji: string;
  title: string;
}

export default async function BlogList() {
  const res = await fetch(
    'https://zenn.dev/api/articles?username=h_ymt&order=latest',
  );
  const data = await res.json();
  const posts: Post[] = data.articles.slice(0, 20);

  return (
    <>
      <ul className="grid gap-2 sm:grid-cols-2 place-items-center items-center justify-center">
        {posts.map((post) => (
          <li
            key={post.id}
            className="max-w-xs p-4 border-2 border-orange-400 dark:border-blue-400 rounded-md"
          >
            <Link
              href={`https://zenn.dev/${post.path}`}
              target="blank"
              className="flex flex-col items-center justify-center gap-3"
            >
              <span className="text-6xl">{post.emoji}</span>
              <h2>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
