'use client';

import { motion } from 'framer-motion';

export default function FadeIn({
      children,
      className,
      delay = 0,
      duration = 0.4,
      direction = 'up', // 'up', 'down', 'left', 'right', 'none'
      fullWidth = false,
      ...props
}) {
      const directions = {
            up: { y: 20, x: 0 },
            down: { y: -20, x: 0 },
            left: { y: 0, x: 20 },
            right: { y: 0, x: -20 },
            none: { y: 0, x: 0 },
      };

      const initial = {
            opacity: 0,
            ...directions[direction],
      };

      const animate = {
            opacity: 1,
            y: 0,
            x: 0,
      };

      return (
            <motion.div
                  initial={initial}
                  animate={animate}
                  transition={{
                        duration: duration,
                        delay: delay,
                        ease: [0.21, 0.47, 0.32, 0.98], // Custom premium ease
                  }}
                  className={className}
                  style={{ width: fullWidth ? '100%' : 'auto' }}
                  {...props}
            >
                  {children}
            </motion.div>
      );
}
