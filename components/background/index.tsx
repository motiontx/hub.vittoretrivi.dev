import { useEffect, useRef } from "react";
import { animate } from "./animate";
import styles from "./styles.module.css";

interface backgroundProps {
  className?: string;
}

const Background = ({ className }: backgroundProps) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const background = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateFunction =
      canvas.current &&
      background.current &&
      animate(canvas.current, background.current);
    animateFunction && animateFunction();
  }, []);

  return (
    <div
      id="background"
      ref={background}
      className={`${styles.background} ${className}`}
    >
      <canvas id="canvas" ref={canvas} className={styles.canvas} />
      <div className={styles.overlay} />
    </div>
  );
};

export { Background };
