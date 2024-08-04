import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styles from "./About.module.css";
import { getImageUrl } from "../../../utils";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/TC148.png")}
          alt="Just Me"
          className={styles.aboutImage}
        />        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/client_relationships.png")} alt="Client Relationships" className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Client Relationships</h3>
              <p>
              Dedicated to building strong client relationships and enhancing client retention, ensuring exceptional service and business growth.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/solutions.png")} alt="Innovative Solutions" className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Innovative Solutions</h3>
              <p>
              Excels in delivering cutting-edge product demonstrations and technical support, driving success through innovative problem-solving.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/leadership.png")} alt="Leadership" className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Leadership</h3>
              <p>
              Proven expertise in leading high-performing teams and providing strategic vision to enhance technical sales and support initiatives.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
