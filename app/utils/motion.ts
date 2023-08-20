'use client';

export const fadeUp = {
  hidden: { opacity: 0, translateY: 15 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.4,
    },
  },
};
