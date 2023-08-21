'use client';

import Image from 'next/image';
import Sheet from '@/components/Sheet';

export default function Home() {
  return (
    <Sheet>
      <section>
        <h2 className="pb-8 text-center">About me</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Image
            src="/icon.webp"
            alt=""
            width={140}
            height={140}
            className="[clip-path: circle(50% at 50% 50%);]"
          />
          <p>
            高校卒業後に農林水産省で5年間勤務したのち、コンサル会社のコーダーとしてWeb制作業務に携わっています。
            <br />
            最近はアクセシビリティ（a11y）に考慮したコーディングや、Astro・Next.jsなどのモダンな技術を用いたWeb制作に興味があります。
            <br />
          </p>
        </div>
      </section>
    </Sheet>
  );
}
