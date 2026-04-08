import { useEffect, useState } from "react";

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(target: number, duration: number = 1200, delay: number = 0): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let rafId: number;
    let delayTimer: ReturnType<typeof setTimeout>;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.floor(easeOutCubic(progress) * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    delayTimer = setTimeout(() => {
      rafId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(delayTimer);
      cancelAnimationFrame(rafId);
    };
  }, [target, duration, delay]);

  return value;
}
