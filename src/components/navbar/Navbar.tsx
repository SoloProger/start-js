"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "../sidebar/Sidebar";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [icon, setIcon] = useState<Icon | null>();

  useEffect(() => {
    setIcon(JSON.parse(localStorage.getItem("iconData") as string) as Icon);
  }, []);

  return (
    <nav className={styles.navbar_wrapper}>
      {icon && (
        <div className={styles.navbar}>
          <Image src={icon.path} alt="logo-js" width={48} height={48} />
          <h2 className={styles.navbar_title}>
            <span style={{ color: icon.color }}>{icon.title}</span> Starter
          </h2>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
