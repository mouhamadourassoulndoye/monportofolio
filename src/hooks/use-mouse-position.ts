// ============================================================
// Custom Hooks — useMousePosition
// ============================================================

'use client';

import { useState, useEffect, RefObject } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(containerRef?: RefObject<HTMLElement | null>) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      } else {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }
    };

    const target = containerRef?.current || window;
    target.addEventListener('mousemove', handleMouseMove as EventListener);

    return () => {
      target.removeEventListener('mousemove', handleMouseMove as EventListener);
    };
  }, [containerRef]);

  return mousePosition;
}
