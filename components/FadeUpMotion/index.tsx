'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { fadeUp } from '../../app/utils/motion';

type Props = {
  children: React.ReactNode;
};

export default function FadeUpMotion({ children }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="motion"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
