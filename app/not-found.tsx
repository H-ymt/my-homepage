'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1 className="py-40 text-2xl">404 - Page Not Found 🔍</h1>

      <div className="flex justify-center">
        <Link href="/" className="font-bold">
          Homeへ戻る&ensp;🏃
        </Link>
      </div>
    </div>
  );
}
