'use client';

export const pageTransition = {
  hidden: {
    opacity: 0,
    y: '15px',
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: '-15px',
    transition: {
      duration: 0.5,
    },
  },
};
