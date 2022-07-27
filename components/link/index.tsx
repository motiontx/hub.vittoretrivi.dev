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
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

const linkVariants = {
  primary: styles.linkPrimary,
  secondary: styles.linkSecondary,
  tertiary: styles.linkTertiary,
} as const;

const Link = ({
  className,
  href,
  onClick,
  variant = "primary",
  children,
  ...props
}: linkProps) => {
  const Tag = onClick ? "button" : "a";

  return (
    <Tag
      className={`${styles.link} ${linkVariants[variant]} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      onClick={onClick}
    >
      <Arrow className={styles.arrowLeft} />
      {children}
      <Arrow className={styles.arrowRight} />
    </Tag>
  );
};

export { Link };
