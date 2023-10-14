'use client';

import { motion } from 'framer-motion';
import { fadeUp } from './utils/motion';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export default function RootTemplate({ children }: Props) {
  const pathname = usePathname();

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      key={pathname}
    >
      {children}
    </motion.div>
  );
}
