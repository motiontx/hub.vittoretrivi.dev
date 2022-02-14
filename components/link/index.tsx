import styles from "./styles.module.css";

interface arrowProps {
  className?: string;
}

const Arrow = ({ className }: arrowProps) => {
  return (
    <span className={`${styles.arrow} ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        stroke="#a8c0a5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14m-7-7 7 7-7 7" />
      </svg>
    </span>
  );
};

interface linkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

const Link = ({ className, href, children, ...props }: linkProps) => {
  return (
    <a
      className={`${styles.link} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Arrow className={styles.arrowLeft} />
      {children}
      <Arrow className={styles.arrowRight} />
    </a>
  );
};

export { Link };
