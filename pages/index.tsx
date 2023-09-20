import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Link } from "../components/link";
import { Avatar } from "../components/avatar";
import { Background } from "../components/background";
import { GithubLogo } from "../components/icons/github";

import avatar from "../public/images/avatar_min.png";

import styles from "./styles.module.css";

import type { link, projectLink } from "../data/links";
import { links, projects } from "../data/links";

interface homeProps {
  links: link[];
  projects: projectLink[];
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
  const [projectsViewActive, setProjectsViewActive] = useState(false);

  return (
    <>
      <Head>
        <title>👋 Vittorio Retrivi</title>
        <meta
          name="description"
          content="Full Stack JavaScript Developer - Currently working with React/Next and Vue/Nuxt."
        />
        <meta name="author" content="Vittorio Retrivi" />
        <meta name="theme-color" content="#004e92" />
        <link rel="icon" href="/favicon.png" />
        {preloadedItems}
      </Head>

      <main className={styles.main}>
        <Background />
        <Avatar src={avatar} alt="" className={styles.avatar} />
        <h1 className={styles.title}>Vittorio Retrivi</h1>
        <p className={styles.description}>Full Stack JavaScript Developer</p>
        <div
          className={`${styles.linksContainer} ${
            projectsViewActive && styles.projectsViewActive
          }`}
        >
          <ul className={`${styles.linkList} ${styles.mainLinkList}`}>
            {links.map(({ href, label, type }, i) => (
              <li key={i}>
                <Link
                  href={href}
                  className={styles.link}
                  variant={type === "highlighted" ? "quaternary" : "primary"}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                className={styles.link}
                onClick={() => setProjectsViewActive(!projectsViewActive)}
              >
                Projects
              </Link>
            </li>
          </ul>
          <div className={styles.projectsLinkList}>
            <ul className={styles.linkList}>
              {projects.map(({ label, href, repo }, i) => (
                <li key={i}>
                  <Link href={href} className={styles.link}>
                    {label}
                  </Link>
                  <Link
                    href={repo}
                    className={styles.githubLink}
                    variant="tertiary"
                  >
                    <GithubLogo width={24} height={24} />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className={styles.link}
                  onClick={() => setProjectsViewActive(!projectsViewActive)}
                  variant="secondary"
                >
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      links,
      projects,
    },
  };
};

export default Home;
