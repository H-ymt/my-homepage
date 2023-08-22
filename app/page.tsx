'use client';

import Image from 'next/image';
import Sheet from '@/components/Sheet';
import FadeUpMotion from '@/components/FadeUpMotion';

export default function Home() {
  return (
    <Sheet>
      <FadeUpMotion>
        <section>
          <h2 className="pb-8 text-center">About me</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Image
              src="/icon.webp"
              alt=""
              width={140}
              height={140}
              className="clip-path"
            />
            <p>
              高校卒業後に農林水産省で5年間勤務したのち、コンサル会社のコーダーとしてWeb制作業務に携わっています。
              <br />
              最近はWebアクセシビリティ（a11y）に配慮したコーディング方法や、Astro・Next.jsなどのモダンな技術を用いたWeb制作に興味があります。
              <br />
            </p>
          </div>
        </section>
      </FadeUpMotion>
    </Sheet>
  );
}
