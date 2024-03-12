"use client"

import { BiSolidFileHtml, BiSolidFileCss, BiLogoJavascript } from "react-icons/bi"
import { SiAstro, SiNextdotjs } from "react-icons/si"
import { FaExternalLinkAlt } from "react-icons/fa"
import SectionTitle from "@/app/_components/SectionTitle"
import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./_components/ui/tabs"
import Container from "./_components/Container"
import { Suspense } from "react"
import Loading from "./loading"
import { Button } from "./_components/ui/button"
import { IoLogoGithub } from "react-icons/io"

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Container>
          <div className="flex items-center pb-28">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-5">
              <h1>My Homepage</h1>
              <div className="flex flex-col items-center gap-8">
                <Suspense fallback="loading.." />
                <p className="text-base max-w-xl font-medium">
                  新卒で公務員として5年勤務したのち、現在はコンサル会社のコーダーとしてWeb制作業務に携わっています。主にLPやECサイトのページ制作、WordPressで作られたサイトの保守・改修などを行っています。
                  <br />
                  最近は
                  <a
                    href="https://astro.build/"
                    className="inline-flex gap-1 items-center text-primary px-1"
                  >
                    Astro
                    <FaExternalLinkAlt size="12" />
                  </a>
                  や
                  <a
                    href="https://nextjs.org/"
                    className="inline-flex gap-1 items-center text-primary px-1"
                  >
                    Next.js
                    <FaExternalLinkAlt size="12" />
                  </a>
                  などのJavaScriptフレームワークと
                  <a
                    href="https://nextjs.org/"
                    className="inline-flex gap-1 items-center text-primary px-1"
                  >
                    microCMS
                    <FaExternalLinkAlt size="12" />
                  </a>
                  などのヘッドレスCMSを用いたWebサイト制作の学習に力を入れています。
                  <br />
                </p>
              </div>
            </div>
          </div>

          <section>
            <SectionTitle sub="使用技術">Stack</SectionTitle>

            <h3 className="text-center">Markup</h3>

            <Tabs defaultValue="html">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="html" className="flex items-cener gap-1 font-normal">
                  <BiSolidFileHtml size="15px" />
                  HTML
                </TabsTrigger>
                <TabsTrigger value="css" className="flex items-cener gap-1 font-normal">
                  <BiSolidFileCss size="15px" />
                  CSS
                </TabsTrigger>
                <TabsTrigger value="js" className="flex items-cener gap-1 font-normal">
                  <BiLogoJavascript size="15px" />
                  JavaScript
                </TabsTrigger>
              </TabsList>

              <div className="py-6 px-6 border rounded-lg mt-2 text-sm">
                <TabsContent value="html">
                  <span className="block pb-2 text-xs font-light text-muted-foreground">
                    実務経験:2年
                  </span>
                  適切なタグや機能を使用すること、また、Webアクセシビリティを意識したコーディングを心がけています。EJSの知識もあります。
                </TabsContent>
                <TabsContent value="css">
                  <span className="block pb-2 text-xs font-light text-muted-foreground">
                    実務経験:2年
                  </span>
                  Sass（SCSS）を利用したスタイリング、BEMやFLOCSSなどを用いた保守性・拡張性の高いCSS設計の知識があります。
                  <br />
                  CSSフレームワークはTailwind CSSをよく使用します。
                </TabsContent>
                <TabsContent value="js">
                  <span className="block pb-2 text-xs font-light text-muted-foreground">
                    実務経験:2年
                  </span>
                  ES6以降のJavaScriptを利用したWebサイト制作の経験、また、レガシーなWebサイトの保守・運用業務でjQueryを利用した経験もあります。
                </TabsContent>
              </div>
            </Tabs>

            <div className="py-8">
              <h3 className="text-center">Frameworks</h3>

              <Tabs defaultValue="react">
                <TabsList className="grid grid-cols-2">
                  <TabsTrigger
                    value="react"
                    className="flex items-cener gap-1 font-normal"
                  >
                    <SiNextdotjs size="15px" />
                    React(Next.js)
                  </TabsTrigger>
                  <TabsTrigger
                    value="astro"
                    className="flex items-cener gap-1 font-normal"
                  >
                    <SiAstro size="15px" />
                    Astro
                  </TabsTrigger>
                </TabsList>

                <div className="py-6 px-6 border rounded-lg mt-2 text-sm">
                  <TabsContent value="react">
                    <span className="block pb-2 text-xs font-light text-muted-foreground">
                      実務経験:なし（独学）
                    </span>
                    microCMS,
                    NewtなどのヘッドレスCMSをつかったJamstackなWebサイトの制作ができます。
                  </TabsContent>
                  <TabsContent value="astro">
                    <span className="block pb-2 text-xs font-light text-muted-foreground">
                      実務経験:なし（独学）
                    </span>
                    microCMS,
                    NewtなどのヘッドレスCMSをつかったJamstackなWebサイトの制作ができます。
                  </TabsContent>
                </div>
              </Tabs>
            </div>

            <div className="py-8">
              <h3 className="text-center">Others</h3>

              <div className="grid gap-6 sm:grid-cols-2 sm:grid-rows-2">
                <div className="flex flex-col gap-1 rounded-lg bg-background px-5 py-6 border">
                  <p className="text-base font-semibold">Version Control</p>
                  <p className="text-sm text-muted-foreground">Git/GitHub</p>
                </div>
                <div className="flex flex-col gap-1 rounded-lg bg-background px-5 py-6 border">
                  <p className="text-base font-semibold">CMS</p>
                  <p className="text-sm text-muted-foreground">
                    microCMS,&ensp;Newt,&ensp;WordPress
                  </p>
                </div>
                <div className="flex flex-col gap-1 rounded-lg bg-background px-5 py-6 border">
                  <p className="text-base font-semibold">Cloud&ensp;Service</p>
                  <p className="text-sm text-muted-foreground">
                    Vercel,&ensp;Netlify,&ensp;Cloudflare&ensp;
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <SectionTitle sub="お問い合せ">Contact</SectionTitle>
            <p>ご用の方は以下よりご連絡ください。</p>

            <div className="flex items-center justify-center mt-6 gap-4">
              <Button size="lg" asChild>
                <Link href="mailto:y.handai1272@gmail.com">
                  <span className="inline-flex items-center gap-1">
                    <AiOutlineMail size="14px" />
                    Email
                  </span>
                </Link>
              </Button>

              <Button variant="secondary" size="lg" asChild>
                <Link href="https://github.com/h-ymt" target="_blank">
                  <span className="inline-flex items-center gap-1">
                    <IoLogoGithub size="14px" />
                    Github
                  </span>
                </Link>
              </Button>
            </div>
          </section>
        </Container>
      </Suspense>
    </>
  )
}
