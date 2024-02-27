"use client"

import SectionTitle from "@/app/_components/SectionTitle"
import Sheet from "@/app/_components/Sheet"
import heroImage from "@/public/hero-image.webp"
import * as Tabs from "@radix-ui/react-tabs"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { BiLogoJavascript, BiSolidFileCss, BiSolidFileHtml } from "react-icons/bi"
import { SiAstro, SiNextdotjs } from "react-icons/si"

export default function Home() {
  return (
    <>
      <div className="flex items-center pb-24 pt-20 md:pt-32">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-5">
          <h1 className="text-4xl tracking-wider md:text-[40px]">My Homepage</h1>

          <div className="flex flex-col items-center gap-8">
            {/* <Image
              src={heroImage}
              alt=""
              width={300}
              height={260}
              className="aspect-[2/1.3] rounded-lg object-cover shadow-outerSm"
              placeholder="blur"
            /> */}
            <p className="text-md max-w-xl font-medium md:text-lg">
              新卒で公務員として5年勤務したのち、現在はコンサル会社のコーダーとしてWeb制作業務に携わっています。主にLPやECサイトのページ制作、WordPressで作られたサイトの保守・改修などを行っています。
              <br />
              最近は
              <a
                href="https://astro.build/"
                className="inline-flex gap-1 items-center text-accent px-1"
              >
                Astro
              </a>
              や
              <a
                href="https://nextjs.org/"
                className="inline-flex gap-1 items-center text-accent px-1"
              >
                Next.js
              </a>
              などのJavaScriptフレームワークと
              <a
                href="https://nextjs.org/"
                className="inline-flex gap-1 items-center text-accent px-1"
              >
                microCMS
              </a>
              などのヘッドレスCMSを用いたWebサイト制作の学習に力を入れています。
              <br />
            </p>
          </div>
        </div>
      </div>

      <Sheet>
        <div className="mx-auto max-w-[800px]">
          <section className="text-lg">
            <SectionTitle sub="使用技術">Stack</SectionTitle>

            <div className="py-8">
              <h3 className="text-center">Markup</h3>

              <Tabs.Root
                className="mt-8 flex flex-col rounded-3xl bg-background p-4 shadow-outerSm"
                defaultValue="tab1"
              >
                <Tabs.List
                  className="flex shrink-0 rounded-t-md border-b border-gray-600"
                  aria-label="My skill sets"
                >
                  <Tabs.Trigger
                    className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center gap-2 bg-transparent pb-2 text-sm leading-none tracking-widest first:rounded-tl-md last:rounded-tr-md hover:text-accent/50 data-[state=active]:font-medium data-[state=active]:text-accent data-[state=active]:shadow-[inset_0_0_0_0,0_1px_0_0] sm:px-5 sm:text-base"
                    value="tab1"
                  >
                    <BiSolidFileHtml size="16px" />
                    HTML
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center gap-2 bg-transparent pb-2 text-sm leading-none tracking-widest first:rounded-tl-md last:rounded-tr-md hover:text-accent/50 data-[state=active]:font-medium data-[state=active]:text-accent data-[state=active]:shadow-[inset_0_0_0_0,0_1px_0_0] sm:px-5 sm:text-base"
                    value="tab2"
                  >
                    <BiSolidFileCss size="16px" />
                    CSS
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center gap-2 bg-transparent pb-2 text-sm leading-none tracking-widest first:rounded-tl-md last:rounded-tr-md hover:text-accent/50 data-[state=active]:font-medium data-[state=active]:text-accent data-[state=active]:shadow-[inset_0_0_0_0,0_1px_0_0] sm:px-5 sm:text-base"
                    value="tab3"
                  >
                    <BiLogoJavascript size="16px" />
                    JavaScript
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content
                  tabIndex={-1}
                  className="grow rounded-b-md bg-transparent p-5 text-base"
                  value="tab1"
                >
                  <span className="mt-1 block pb-2 text-sm font-light text-muted">
                    実務経験:2年
                  </span>
                  適切なタグや機能を使用すること、また、Webアクセシビリティを意識したコーディングを心がけています。EJSの知識もあります。
                </Tabs.Content>
                <Tabs.Content
                  tabIndex={-1}
                  className="grow rounded-b-md bg-transparent p-5 text-base"
                  value="tab2"
                >
                  <span className="mt-1 block pb-2 text-sm font-light text-muted">
                    実務経験:2年
                  </span>
                  Sass（SCSS）を利用したスタイリング、BEMやFLOCSSなどを用いた保守性・拡張性の高いCSS設計の知識があります。
                  <br />
                  CSSフレームワークはTailwind CSSが使えます。
                </Tabs.Content>
                <Tabs.Content
                  tabIndex={-1}
                  className="grow rounded-b-md bg-transparent p-5 text-base"
                  value="tab3"
                >
                  <span className="mt-1 block pb-2 text-sm font-light text-muted">
                    実務経験:2年
                  </span>
                  ES6以降のJavaScriptを利用したWebサイト制作の経験、また、レガシーなWebサイトの保守・運用業務でjQueryを利用した経験もあります。
                </Tabs.Content>
              </Tabs.Root>
            </div>

            <div className="py-8">
              <h3 className="text-center">Frameworks</h3>

              <Tabs.Root
                className="mt-8 flex flex-col rounded-3xl bg-background p-4 shadow-outerSm"
                defaultValue="tab1"
              >
                <Tabs.List
                  className="flex shrink-0 rounded-t-md border-b border-gray-600"
                  aria-label="My skill sets"
                >
                  <Tabs.Trigger
                    className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center gap-2 bg-transparent pb-2 text-sm leading-none tracking-widest first:rounded-tl-md last:rounded-tr-md hover:text-accent data-[state=active]:font-medium data-[state=active]:text-accent data-[state=active]:shadow-[inset_0_0_0_0,0_1px_0_0] sm:px-5 sm:text-base"
                    value="tab1"
                  >
                    <SiNextdotjs size="16px" />
                    React(Next.js)
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    className="flex h-[45px] flex-1 cursor-pointer select-none items-center justify-center gap-2 bg-transparent pb-2 text-sm leading-none tracking-widest first:rounded-tl-md last:rounded-tr-md hover:text-accent data-[state=active]:font-medium data-[state=active]:text-accent data-[state=active]:shadow-[inset_0_0_0_0,0_1px_0_0] sm:px-5 sm:text-base"
                    value="tab2"
                  >
                    <SiAstro size="16px" />
                    Astro
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content
                  tabIndex={-1}
                  className="grow rounded-b-md bg-transparent p-5 text-base"
                  value="tab1"
                >
                  <span className="mt-1 block pb-2 text-sm font-light text-muted">
                    実務経験:なし（独学）
                  </span>
                  microCMSなどのヘッドレスCMSをつかったJamstackなWebサイトの制作ができます。
                </Tabs.Content>
                <Tabs.Content
                  tabIndex={-1}
                  className="grow rounded-b-md bg-transparent p-5 text-base"
                  value="tab2"
                >
                  <span className="mt-1 block pb-2 text-sm font-light text-muted">
                    実務経験:なし（独学）
                  </span>
                  microCMS、WordPressをヘッドレスCMSとして利用したWebサイトの制作ができます。
                </Tabs.Content>
              </Tabs.Root>
            </div>

            <div className="py-8">
              <h3 className="text-center">Others</h3>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:grid-rows-2">
                <div className="flex flex-col gap-1 rounded-3xl bg-background px-5 py-6 shadow-outerSm">
                  <p className="font-semibold tracking-wider">Version Control</p>
                  <p className="text-base">Git/GitHub</p>
                </div>
                <div className="flex flex-col gap-1 rounded-3xl bg-background px-5 py-6 shadow-outerSm">
                  <p className="font-semibold tracking-wider">CMS</p>
                  <p className="text-base">microCMS,&ensp;Newt,&ensp;Kuroco</p>
                </div>
                <div className="flex flex-col gap-1 rounded-3xl bg-background px-5 py-6 shadow-outerSm">
                  <p className="font-semibold tracking-wider">Cloud&ensp;Service</p>
                  <p className="text-base">Vercel,&ensp;Netlify,&ensp;Cloudflare&ensp;</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <SectionTitle sub="お問い合せ">Contact</SectionTitle>
            <p className="inline-block">ご用の方は以下よりご連絡ください。</p>

            <div className="flex items-center justify-center gap-4 pt-6">
              <Link
                href="mailto:y.handai1272@gmail.com"
                className="inline-flex w-[120px] items-center justify-center gap-1.5 rounded-md bg-accent/95 py-1.5 text-gray-100 transition-all duration-300 hover:bg-accent/100 hover:underline"
              >
                <span className="inline-flex items-center gap-2">
                  <AiOutlineMail size="14px" />
                  Email
                </span>
              </Link>
            </div>
          </section>
        </div>
      </Sheet>
    </>
  )
}
