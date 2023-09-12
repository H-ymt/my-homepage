'use client';

import Image from 'next/image';
import Link from 'next/link';
import Sheet from '@/components/Sheet';
import SectionTitle from '@/components/SectionTitle';
import * as Dialog from '@radix-ui/react-dialog';
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
    <Sheet>
      <section className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-10 md:gap-12 px-6 py-12 sm:p-12 lg:p-20 bg-orange-200/60 dark:bg-blue-200/30 bg-opacity-40 backdrop-blur-xl shadow-sm rounded-3xl">
          <h1 className="text-4xl md:text-[40px] tracking-wider">Portfolio</h1>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/icon.webp"
              alt=""
              width={180}
              height={180}
              className="clip-path-perfectCircle"
            />
            <p className="text-md md:text-lg font-medium max-w-xl">
              新卒で公務員として5年勤務したのち、今はコンサル会社のコーダーとしてWeb制作業務に携わっています。
              <br />
              最近は、Astro・Next.jsなどの技術を用いたJamstackサイトの制作が好きです。夢はWebアプリ開発に携わる仕事をすることです。
              <br />
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[900px] mx-auto">
        <section className="text-lg">
          <SectionTitle eng="使用技術">Skills</SectionTitle>

          <div className="py-8">
            <h3 className="text-center">Markup</h3>
            <div className="flex justify-center gap-6 md:gap-10 mt-8">
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button type="button" className="flex items-center gap-1">
                    <BiSolidFileHtml size="22px" />
                    HTML
                    <PiArrowSquareInLight size="16px" />
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="z-30 bg-gray-900/30 dark:bg-gray-900/80 data-[state=open]:animate-overlayShow fixed inset-0" />
                  <Dialog.Content className="z-40 dark:text-primaryDark data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
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
                  <button type="button" className="flex items-center gap-1">
                    <BiSolidFileCss size="22px" />
                    CSS
                    <PiArrowSquareInLight size="16px" />
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="z-30 bg-gray-900/30 dark:bg-gray-900/80 data-[state=open]:animate-overlayShow fixed inset-0" />
                  <Dialog.Content className="z-40 dark:text-primaryDark data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
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
                  <button type="button" className="flex items-center gap-1">
                    <BiLogoJavascript size="22px" />
                    JavaScript
                    <PiArrowSquareInLight size="16px" />
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="z-30 bg-gray-900/30 dark:bg-gray-900/80 data-[state=open]:animate-overlayShow fixed inset-0" />
                  <Dialog.Content className="z-40 dark:text-primaryDark data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
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
            <h3 className="text-center">Frameworks</h3>

            <div className="flex justify-center gap-6 md:gap-10 mt-8">
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button type="button" className="flex items-center gap-1">
                    <SiNextdotjs size="22px" />
                    React(Next.js)
                    <PiArrowSquareInLight size="16px" />
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="z-30 bg-gray-900/30 dark:bg-gray-900/80 data-[state=open]:animate-overlayShow fixed inset-0" />
                  <Dialog.Content className="z-40 dark:text-primaryDark data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title>
                      React(Next.js)
                      <span className="block mt-1 text-xs text-muted font-light">
                        実務経験:なし（独学のみ）
                      </span>
                    </Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm">
                      microCMSなどのヘッドレスCMSをつかったWebサイトの制作ができます。
                      <br />
                      WordPressでつくられた自社サイトのコーポレートサイトを、趣味で勝手にリニューアルしてみたり、作りたいものを気ままに作っています。
                    </Dialog.Description>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button type="button" className="flex items-center gap-1">
                    <SiAstro size="22px" />
                    Astro
                    <PiArrowSquareInLight size="16px" />
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="z-30 bg-gray-900/30 dark:bg-gray-900/80 data-[state=open]:animate-overlayShow fixed inset-0" />
                  <Dialog.Content className="z-40 dark:text-primaryDark data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title>
                      Astro
                      <span className="block mt-1 text-xs text-muted font-light">
                        実務経験:なし（独学のみ）
                      </span>
                    </Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm">
                      microCMS、WordPressをヘッドレスCMSとして利用したWebサイトの制作ができます。
                    </Dialog.Description>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </div>

          <div className="py-8">
            <h3 className="text-center">Others</h3>
            <p className="text-center mt-8">
              Git{`(`}GitHub{`)`}
              &ensp;/&ensp;Vercel&ensp;/&ensp;Netlify&ensp;/&ensp;Cloudflare&ensp;/&ensp;microCMS&ensp;/&ensp;Wordpress&ensp;/&ensp;Newt&ensp;/&ensp;Kuroco
            </p>
          </div>
        </section>

        <section className="text-center">
          <SectionTitle eng="お問い合せ">Contact</SectionTitle>
          <p className="inline-block">ご用の方は以下よりご連絡ください。</p>

          <div className="flex items-center justify-center gap-4 pt-6">
            <Link
              href="mailto:y.handai1272@gmail.com"
              className="inline-flex items-center justify-center gap-1.5 w-[120px] py-1 bg-orange-500 dark:bg-blue-700 text-white rounded-md"
            >
              <button type="button" className="inline-flex items-center gap-2">
                <AiOutlineMail size="14px" />
                Email
              </button>
            </Link>

            <Link
              href="https://twitter.com/Hy1272"
              target="blank"
              className="inline-flex items-center justify-center gap-2 w-[120px] py-1 bg-twitter text-white rounded-md"
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
  );
}
