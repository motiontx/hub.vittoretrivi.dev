import { useEffect, useRef } from "react";
import { animate } from "./animate";
import styles from "./styles.module.css";

const Background = () => {
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
    <div id="background" ref={background} className={styles.background}>
      <canvas id="canvas" ref={canvas} className={styles.canvas} />
      <div className={styles.overlay} />
    </div>
  );
};

export { Background };
