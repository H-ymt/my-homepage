'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { fadeUp } from './utils/motion';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export default function RootTemplate({ children }: Props) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        key={pathname}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
