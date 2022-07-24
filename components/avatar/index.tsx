import Image from "next/image";
import styles from "./styles.module.css";

interface AvatarProps {
  className?: string;
  src: StaticImageData;
  alt: string;
}

const Avatar = ({ className, src, alt, ...props }: AvatarProps) => {
  return (
    <div className={`${styles.avatar} ${className}`}>
      <Image
        width={150}
        height={150}
        src={src}
        className={styles.image}
        {...props}
        alt={alt}
      />
    </div>
  );
};

export { Avatar };
