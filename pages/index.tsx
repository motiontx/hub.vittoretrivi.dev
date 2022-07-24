import type { NextPage } from "next";
import Head from "next/head";

import { Link } from "../components/link";
import { Avatar } from "../components/avatar";
import { Background } from "../components/background";

import avatar from "../public/images/avatar_min.png";

import styles from "./styles.module.css";

import type { link } from "../data/links";
import { links } from "../data/links";
interface homeProps {
  links: link[];
}

const itemsToBePreloaded = [
  {
    key: "firasans-regular",
    src: "/fonts/firasans-regular.woff2",
    type: "font/woff2",
  },
  {
    key: "firasans-extrabold",
    src: "/fonts/firasans-extrabold.woff2",
    type: "font/woff2",
  },
];

const preloadedItems = itemsToBePreloaded.map((item) => (
  <link
    as="font"
    crossOrigin="anonymous"
    href={item.src}
    key={item.key}
    type={item.type}
    rel="preload"
  ></link>
));

const Home: NextPage<homeProps> = ({ links }) => {
  return (
    <>
      <Head>
        <title>👋 Vittorio Retrivi</title>
        <meta
          name="description"
          content="Full Stack JavaScript Developer - Currently working with React/Next and Vue/Nuxt"
        />
        <link rel="icon" href="/favicon.png" />
        {preloadedItems}
      </Head>

      <main className={styles.main}>
        <Background />
        <Avatar src={avatar} alt="" className={styles.avatar} />
        <h1 className={styles.title}>Vittorio Retrivi</h1>
        <p className={styles.description}>Full Stack JavaScript Developer</p>
        <ul className={styles.linkList}>
          {links.map(({ href, label }, i) => (
            <li key={i}>
              <Link href={href} className={styles.link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      links,
    },
  };
};

export default Home;
