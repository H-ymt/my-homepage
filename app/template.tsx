'use client';

import { usePathname } from 'next/navigation';
import { pageTransition } from './utils/motion';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="hidden"
        key={pathname}
      >
        {children}
      </motion.div>
      console.log(router);
    </AnimatePresence>
  );
}
