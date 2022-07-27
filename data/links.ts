interface link {
  href: string;
  label: string;
}

interface projectLink extends link {
  repo: string;
}

const links: link[] = [
  {
    href: "https://github.com/motiontx",
    label: "GitHub",
  },
  {
    href: "https://cv.vittoretrivi.dev",
    label: "CV",
  },
  {
    href: "https://linkedin.com/in/vittorio-retrivi",
    label: "LinkedIn",
  },
  {
    href: "mailto:vittorioretrivi@gmail.com",
    label: "vittorioretrivi@gmail.com",
  },
];

const projects: projectLink[] = [
  {
    label: "Clamp Calculator",
    href: "https://clamp.vittoretrivi.dev/",
    repo: "https://github.com/motiontx/training-projects",
  },
  {
    label: "Little Experiments",
    href: "https://motiontx.github.io/little-experiments/",
    repo: "https://github.com/motiontx/little-experiments",
  },
  {
    label: "Time in a New Tab",
    href: "https://chrome.google.com/webstore/detail/new-tab-clock/jpnkmoigeebdmkodlhmeljgkpgphjnai",
    repo: "https://github.com/motiontx/chrome-extension-clock",
  },
];

export type { link, projectLink };
export { links, projects };
