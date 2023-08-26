'use client';

import Image from 'next/image';
import Link from 'next/link';
import Sheet from '@/components/Sheet';
import FadeUpMotion from '@/components/FadeUpMotion';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@radix-ui/themes';
import * as Dialog from '@radix-ui/react-dialog';
import { BiSolidFileHtml } from 'react-icons/bi';
import { BiSolidFileCss } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { SiAstro } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';

export default function Home() {
  return (
    <FadeUpMotion>
      <Sheet>
        <div className="max-w-[900px] mx-auto">
          <div className="h-[calc(100dvh-72px)] grid place-items-center">
            <div className="flex flex-col items-center justify-center gap-6 p-12 lg:p-20 bg-gray-100/20 bg-opacity-40 backdrop-blur-xl shadow-sm rounded-2xl">
              <h1>Yamato{`'`}s Portfolio</h1>
              <p className="text-center text-md lg:text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Nobis delectus provident ratione, nam sed sequi accusantium
                cumque illo.
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <Link href="/products">
                  <Button
                    size="4"
                    variant="solid"
                    color="indigo"
                    className="w-[180px]"
                  >
                    Products
                  </Button>
                </Link>

                <Link href="https://github.com/H-ymt" target="_blank">
                  <Button
                    size="4"
                    variant="surface"
                    color="iris"
                    className="w-[180px]"
                  >
                    GitHub
                    <AiFillGithub size="1.2em" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

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
                高校卒業後に農林水産省で5年間勤務したのち、現在はコンサル会社のコーダーとしてWeb制作業務に携わっています。最近は、Astro・Next.jsなどのモダンな技術を用いたWeb制作が好きです。
                <br />
              </p>
            </div>
          </section>

          <section>
            <SectionTitle eng="技術">Skills</SectionTitle>

            <div className="py-8">
              <h3 className="text-center">Markup</h3>
              <div className="flex justify-center gap-6 mt-8">
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button type="button">
                      <BiSolidFileHtml size="48px" />
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="bg-gray-900/30 data-[state=open]:animate-overlayShow fixed inset-0" />
                    <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                      <Dialog.Title>
                        HTML
                        <span className="block mt-1 text-xs text-muted font-light">
                          実務経験:2年
                        </span>
                      </Dialog.Title>
                      <Dialog.Description className="mt-2 text-sm">
                        Webアクセシビリティ（a11y）を考慮したコーディングやEJSの知識があります。
                      </Dialog.Description>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button type="button">
                      <BiSolidFileCss size="48px" />
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="bg-gray-900/30 data-[state=open]:animate-overlayShow fixed inset-0" />
                    <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                      <Dialog.Title>
                        CSS
                        <span className="block mt-1 text-xs text-muted font-light">
                          実務経験：2年
                        </span>
                      </Dialog.Title>
                      <Dialog.Description className="mt-2 text-sm">
                        Sass（SCSS）を利用したスタイリング、BEMやFLOCSSなどを用いた保守性・拡張性の高いCSS設計の知識があります。
                        <br />
                        最近はAstroやNext.jsなどを用いたコンポーネントベースのWeb制作にハマっているのでTailwind
                        CSSを使用する機会も増えました。
                      </Dialog.Description>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button type="button">
                      <BiLogoJavascript size="48px" />
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="bg-gray-900/30 data-[state=open]:animate-overlayShow fixed inset-0" />
                    <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                      <Dialog.Title>
                        JavaScript
                        <span className="block mt-1 text-xs text-muted font-light">
                          実務経験：2年
                        </span>
                      </Dialog.Title>
                      <Dialog.Description className="mt-2 text-sm">
                        ES6以降のJavaScriptを利用したWebサイト制作の経験、また、レガシーなWebサイトの保守・運用業務でjQueryを利用した経験もあります。
                      </Dialog.Description>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>
            </div>

            <div className="py-8">
              <h3 className="pb-6 text-center">Frameworks</h3>
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
