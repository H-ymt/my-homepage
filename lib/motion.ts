type AnimationConfig = {
  hidden: {
    y?: number
    x?: number
    scale?: number
    opacity: number
  }
  visible: {
    y?: number
    x?: number
    scale?: number
    opacity: number
    transition: {
      duration: number
      delay?: number
      staggerChildren?: number
      ease?: string
    }
  }
  hover?: {
    scale: number
    transition: {
      duration: number
    }
  }
  tap?: {
    scale: number
    transition: {
      duration: number
    }
  }
}

export const circleMotion: AnimationConfig = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'linear' } },
  hover: { scale: 1.1, transition: { duration: 0.4 } },
  tap: { scale: 0.9, transition: { duration: 0.2 } },
}

export const slideBlock = (y: number, delay: number): AnimationConfig => ({
  hidden: { y: y, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, delay: delay } },
})

export const slideInline = (x: number, delay: number): AnimationConfig => ({
  hidden: { x: x, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3, delay: delay } },
})

export const fadeUpStaggerAnimation = (
  yHidden = 30,
  yVisible = 0,
  opacityHidden = 0,
  opacityVisible = 1,
  duration = 0.3,
  staggerChildren = 0.1,
): AnimationConfig => ({
  hidden: { y: yHidden, opacity: opacityHidden },
  visible: {
    y: yVisible,
    opacity: opacityVisible,
    transition: { duration, staggerChildren },
  },
})
