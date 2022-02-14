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

const Home: NextPage<homeProps> = ({ links }) => {
  return (
    <>
      <Head>
        <title>👋 Vitto Retrivi</title>
        <meta
          name="description"
          content="A collection of links to my websites and social media profiles"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Background />
        <Avatar
          src={avatar}
          alt="Avatar of Vittorio Retrivi"
          className={styles.avatar}
        />
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
