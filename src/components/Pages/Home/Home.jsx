import React from "react";

import styles from "./Home.module.css";
import { getImageUrl } from "../../../utils";

export const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Theodore Miller</h1>
        <p className={styles.description}>
        Experienced Sales Engineer specializing in product demos and technical sales support. Known for innovative problem-solving, client retention, and leading high-performing teams.
        <br /><br />Connect to explore how I can drive your business success!
        </p>
        <a href="mailto:TMiller@theodore-miller.com" className={styles.contactBtn}>
          Get in Touch
        </a>
      </div>
      <img src={getImageUrl("home/Headshot.png")} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
