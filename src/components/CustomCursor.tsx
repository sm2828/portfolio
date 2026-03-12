import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const loop = () => {
      setPosition({ ...posRef.current });
      rafRef.current = requestAnimationFrame(loop);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest('a, button, [data-hover]');
      setIsHovering(!!hoverable);
    };

    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', checkHover);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot cursor */}
      <div
        className="custom-cursor"
        style={{
          left: position.x,
          top: position.y,
          width: isClicking ? 6 : 8,
          height: isClicking ? 6 : 8,
          borderRadius: '50%',
          backgroundColor: '#00f5ff',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.1s, height 0.1s',
        }}
      />
      {/* Ring cursor */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: position.x - (isHovering ? 20 : 14),
          y: position.y - (isHovering ? 20 : 14),
          width: isHovering ? 40 : 28,
          height: isHovering ? 40 : 28,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 28, mass: 0.5 }}
        style={{
          borderRadius: '50%',
          border: '1px solid #00f5ff',
        }}
      />
    </>
  );
}
