"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Sidebar.module.css";

export interface Icon {
  path: string;
  title: string;
  link: string;
  color?: string;
}

const icons: Icon[] = [
  {
    path: "/icons/js.svg",
    title: "JavaScript",
    link: "/starter/js",
    color: "#fed602",
  },
  {
    path: "/icons/ts.svg",
    title: "TypeScript",
    link: "/starter/ts",
    color: "#1876D1",
  },
  {
    path: "/icons/angular.svg",
    title: "Angular",
    link: "/starter/angular",
    color: "#EF424E",
  },
  {
    path: "/icons/react.svg",
    title: "React",
    link: "/starter/react",
    color: "#80DEEA",
  },
  { path: "/icons/nextjs.svg", title: "Next", link: "/starter/next" },
  {
    path: "/icons/vue.svg",
    title: "Vue",
    link: "/starter/vue",
    color: "#81C784",
  },
  {
    path: "/icons/nuxtjs.svg",
    title: "Nuxt",
    link: "/starter/nuxt",
    color: "#1DE9B6",
  },
  {
    path: "/icons/nestjs.svg",
    title: "Nest",
    link: "/starter/nest",
    color: "#F50157",
  },
  {
    path: "/icons/expressjs.svg",
    title: "Express",
    link: "/starter/express",
  },
];

const Sidebar = () => {
  const saveSidebarData = (icon: Icon) =>
    localStorage.setItem("iconData", JSON.stringify(icon));

  return (
    <aside className={styles.sidebar_container}>
      <div className={styles.sidebar}>
        {icons.map((icon, index) => (
          <Link
            key={index}
            href={icon.link}
            onClick={() => saveSidebarData(icon)}
          >
            <Image
              src={icon.path}
              alt="icon"
              width={40}
              height={40}
              title={icon.title + "starter"}
              className={styles.sidebar_icon}
            />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
