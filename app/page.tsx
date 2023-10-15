'use client';

import Image from 'next/image';
import Link from 'next/link';
import Sheet from '@/components/Sheet';
import SectionTitle from '@/components/SectionTitle';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import { BiSolidFileHtml } from 'react-icons/bi';
import { BiSolidFileCss } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { SiAstro } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { PiArrowSquareInLight } from 'react-icons/pi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

export default function Home() {
  return (
    <>
      <div className="flex items-center h-[calc(100dvh-72px)]">
        <div className="flex flex-col items-center justify-center max-w-xl mx-auto px-5">
          <h1 className="text-4xl md:text-[40px] tracking-wider">Portfolio</h1>

          <div className="flex flex-col items-center gap-8">
            <Image
              src="/icon.webp"
              alt=""
              width={384}
              height={208}
              className="rounded-lg"
            />
            <p className="text-md md:text-lg font-medium max-w-xl">
              新卒で公務員として5年勤務したのち、今はコンサル会社のコーダーとしてWeb制作業務に携わっています。
              <br />
              最近は、Astro・Next.jsなどの技術を用いたJamstackサイトの制作が好きです。
              <br />
            </p>
          </div>
        </div>
      </div>

      <Sheet>
        <div className="max-w-[800px] mx-auto">
          <section className="text-lg">
            <SectionTitle eng="使用技術">Skills</SectionTitle>

            <div className="py-8">
              <h3 className="text-center">Markup</h3>

              <Tabs.Root className="flex flex-col mt-8" defaultValue="tab1">
                <Tabs.List
                  className="shrink-0 flex border border-gray-600 rounded-t-md"
                  aria-label="My skill sets"
                >
                  <Tabs.Trigger
                    className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center gap-2 text-base leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-orange-400 dark:hover-text-blue-400 data-[state=active]:text-orange-400 dark:data-[state=active]:text-blue-400 data-[state=active]:font-medium data-[state=active]:shadow-[inset_0_-1px_0_0,0_2px_0_0] cursor-pointer"
                    value="tab1"
                  >
                    <BiSolidFileHtml size="16px" />
                    HTML
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center gap-2 text-base leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-orange-400 dark:hover-text-blue-400 data-[state=active]:text-orange-400 dark:data-[state=active]:text-blue-400 data-[state=active]:font-medium data-[state=active]:shadow-[inset_0_-1px_0_0,0_2px_0_0] cursor-pointer"
                    value="tab2"
                  >
                    <BiSolidFileCss size="16px" />
                    CSS
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center gap-2 text-base leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-orange-400 dark:hover-text-blue-400 data-[state=active]:text-orange-400 dark:data-[state=active]:text-blue-400 data-[state=active]:font-medium data-[state=active]:shadow-[inset_0_-1px_0_0,0_2px_0_0] cursor-pointer"
                    value="tab3"
                  >
                    <BiLogoJavascript size="16px" />
                    JavaScript
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content
                  className="border border-gray-600 border-t-0 text-base grow p-5 bg-transparent rounded-b-md"
                  value="tab1"
                >
                  <span className="block mt-1 pb-2 text-sm text-muted font-light">
                    実務経験:2年
                  </span>
                  Webアクセシビリティを考慮したコーディング、EJSの知識があります。
                </Tabs.Content>
                <Tabs.Content
                  className="border border-gray-600 border-t-0 text-base grow p-5 bg-transparent rounded-b-md"
                  value="tab2"
                >
                  <span className="block mt-1 pb-2 text-sm text-muted font-light">
                    実務経験:2年
                  </span>
                  Sass（SCSS）を利用したスタイリング、BEMやFLOCSSなどを用いた保守性・拡張性の高いCSS設計の知識があります。
                  <br />
                  CSSフレームワークはTailwind CSSが使えます。
                </Tabs.Content>
                <Tabs.Content
                  className="border border-gray-600 border-t-0 text-base grow p-5 bg-transparent rounded-b-md"
                  value="tab3"
                >
                  <span className="block mt-1 pb-2 text-sm text-muted font-light">
                    実務経験:2年
                  </span>
                  ES6以降のJavaScriptを利用したWebサイト制作の経験、また、レガシーなWebサイトの保守・運用業務でjQueryを利用した経験もあります。
                </Tabs.Content>
              </Tabs.Root>
            </div>

            <div className="py-8">
              <h3 className="text-center">Frameworks</h3>

              <Tabs.Root className="flex flex-col mt-8" defaultValue="tab1">
                <Tabs.List
                  className="shrink-0 flex border border-gray-600 rounded-t-md"
                  aria-label="My skill sets"
                >
                  <Tabs.Trigger
                    className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center gap-2 text-base leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-orange-400 dark:hover-text-blue-400 data-[state=active]:text-orange-400 dark:data-[state=active]:text-blue-400 data-[state=active]:font-medium data-[state=active]:shadow-[inset_0_-1px_0_0,0_2px_0_0] cursor-pointer"
                    value="tab1"
                  >
                    <SiNextdotjs size="16px" />
                    React(Next.js)
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    className="bg-transparent px-5 h-[45px] flex-1 flex items-center justify-center gap-2 text-base leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-orange-400 dark:hover-text-blue-400 data-[state=active]:text-orange-400 dark:data-[state=active]:text-blue-400 data-[state=active]:font-medium data-[state=active]:shadow-[inset_0_-1px_0_0,0_2px_0_0] cursor-pointer"
                    value="tab2"
                  >
                    <SiAstro size="16px" />
                    Astro
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content
                  className="border border-gray-600 border-t-0 text-base grow p-5 bg-transparent rounded-b-md"
                  value="tab1"
                >
                  <span className="block mt-1 pb-2 text-sm text-muted font-light">
                    実務経験:なし（独学のみ）
                  </span>
                  microCMSなどのヘッドレスCMSをつかったJamstackなWebサイトの制作ができます。
                </Tabs.Content>
                <Tabs.Content
                  className="border border-gray-600 border-t-0 text-base grow p-5 bg-transparent rounded-b-md"
                  value="tab2"
                >
                  <span className="block mt-1 pb-2 text-sm text-muted font-light">
                    実務経験:なし（独学のみ）
                  </span>
                  microCMS、WordPressをヘッドレスCMSとして利用したWebサイトの制作ができます。
                </Tabs.Content>
              </Tabs.Root>
            </div>

            <div className="py-8">
              <h3 className="text-center">Others</h3>

              <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-6 mt-8">
                <div className="flex flex-col gap-1 p-4 border border-gray-600 rounded-lg">
                  <h4 className="font-semibold">バージョン管理</h4>
                  <p className="text-base">Git/GitHub</p>
                </div>
                <div className="flex flex-col gap-1 p-4 border border-gray-600 rounded-lg">
                  <h4 className="font-semibold">CMS</h4>
                  <p className="text-base">
                    microCMS,&ensp;Wordpress,&ensp;Newt,&ensp;Kuroco
                  </p>
                </div>
                <div className="flex flex-col gap-1 p-4 border border-gray-600 rounded-lg">
                  <h4 className="font-semibold">Cloud&ensp;Service</h4>
                  <p className="text-base">
                    Vercel,&ensp;Netlify,&ensp;Cloudflare&ensp;
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <SectionTitle eng="お問い合せ">Contact</SectionTitle>
            <p className="inline-block">ご用の方は以下よりご連絡ください。</p>

            <div className="flex items-center justify-center gap-4 pt-6">
              <Link
                href="mailto:y.handai1272@gmail.com"
                className="inline-flex items-center justify-center gap-1.5 w-[120px] py-1.5 bg-orange-500 hover:bg-orange-600 checked:bg-orange-600 dark:bg-blue-700 dark:hover:bg-blue-800 dark:checked:bg-blue-800 text-gray-100 rounded-md transition-all duration-300"
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-2"
                >
                  <AiOutlineMail size="14px" />
                  Email
                </button>
              </Link>

              <Link
                href="https://twitter.com/Hy1272"
                target="blank"
                className="inline-flex items-center justify-center gap-2 w-[120px] py-1.5 bg-twitter/80 hover:bg-twitter/100 checked:bg-twitter/100 text-gray-100 rounded-md transition-all duration-300"
              >
                <AiOutlineTwitter size="14px" />
                <button type="button" className="">
                  Twitter
                </button>
              </Link>
            </div>
          </section>
        </div>
      </Sheet>
    </>
  );
}
