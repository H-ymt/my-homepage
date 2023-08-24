'use client';

import Image from 'next/image';
import Sheet from '@/components/Sheet';
import FadeUpMotion from '@/components/FadeUpMotion';
import SectionTitle from '@/components/SectionTitle';
import * as HoverCard from '@radix-ui/react-hover-card';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiAstro } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';

export default function Home() {
  return (
    <FadeUpMotion>
      <Sheet>
        <div className="max-w-[960px] mx-auto">
          <section>
            <SectionTitle eng="私について">About me</SectionTitle>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Image
                src="/icon.webp"
                alt=""
                width={180}
                height={180}
                className="clip-path-perfectCircle"
              />
              <p>
                高校卒業後に農林水産省で5年間勤務したのち、コンサル会社のコーダーとしてWeb制作業務に携わっています。最近はWebアクセシビリティ（a11y）に配慮したコーディング方法や、Astro・Next.jsなどのモダンな技術を用いたWeb制作に興味があります。
                <br />
              </p>
            </div>
          </section>

          <section>
            <SectionTitle eng="技術">Skills</SectionTitle>

            <h3 className="py-6 text-center">Markup</h3>
            <div className="flex justify-center gap-8">
              <HoverCard.Root>
                <HoverCard.Trigger asChild>
                  <a
                    className="inline-block cursor-pointer rounded-full outline-none focus:shadow-[0_0_0_2px_white]"
                    rel="noreferrer noopener"
                  >
                    <FaHtml5 size="32px" />
                  </a>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                  <HoverCard.Content
                    className="z-50 bg-blue-200 data-[side=top]:animate-slideDownAndFade rounded-md w-80 p-4"
                    sideOffset={5}
                  >
                    <div className="flex flex-col gap-[7px]">
                      <div className="flex flex-col gap-[4px]">
                        <div>
                          <div className="text-mauve12 m-0 text-md font-medium leading-[1.5]">
                            HTML
                          </div>
                        </div>
                        <div className="text-mauve12 m-0 text-sm leading-[1.5]">
                          アクセシビリティ（WCAG）を意識したコーディングで良質なUI/UXを意識したサイト作りを心がけています。
                        </div>
                      </div>
                    </div>

                    <HoverCard.Arrow className="fill-white text-white" />
                  </HoverCard.Content>
                </HoverCard.Portal>
              </HoverCard.Root>
            </div>
          </section>

          <section>
            <SectionTitle eng="お問い合せ">Contact</SectionTitle>
          </section>
        </div>
      </Sheet>
    </FadeUpMotion>
  );
}
