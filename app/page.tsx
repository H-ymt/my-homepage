'use client'

import { circleMotion, fadeUpStaggerAnimation, slideInline } from '@/lib/motion'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import { Button } from './components/ui/button'
import { BIO } from './constants'

export default function Home() {
  return (
    <>
      <div className="flex items-center pb-28">
        <div className="mx-auto flex flex-col items-center justify-center px-5">
          <motion.button
            type="button"
            variants={circleMotion}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            tabIndex={-1}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
            className="w-24 h-24 border-none rounded-full bg-primary mb-12"
            aria-hidden="true"
          />

          <motion.div
            variants={slideInline(-100, 0.2)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-8"
          >
            <p className="max-w-xl text-muted-foreground hover:[&>a]:underline">
              コンサル会社のコーダーとしてWeb制作業務に携わっており、主にLPやECサイトのページ制作、WordPressで作られたサイトの保守・改修などを行っています。
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
          </motion.div>
        </div>
      </div>

      <section>
        <h2>Biography</h2>
        <motion.div
          variants={fadeUpStaggerAnimation()}
          initial="hidden"
          whileInView="visible"
          className="border-l-border pt-2 pb-5 grid gap-7 border-l-2"
        >
          {BIO.map(item => (
            <motion.div
              variants={fadeUpStaggerAnimation()}
              key={item.id}
              className="flex flex-col pl-4 gap-1"
            >
              <p className="text-sm text-muted-foreground">{item?.date}</p>
              <p className="text-foreground">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="text-center py-12">
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
      </div>
    </>
  )
}
