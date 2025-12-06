'use client';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
};

export default function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = "", 
  direction = 'up',
  fullWidth = false
}: FadeInProps) {
  const ref = useRef(null);
  // once: true 表示只播放一次，margin: "-50px" 表示元素进入屏幕 50px 后才触发
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration: duration, 
        delay: delay, 
        ease: [0.25, 0.46, 0.45, 0.94] // 优化的缓动曲线
      } 
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={{ width: fullWidth ? '100%' : 'auto' }}
    >
      {children}
    </motion.div>
  );
}
