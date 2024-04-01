import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Orb.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a self taught frontend developer and have experience in building responsive, aesthetic, and engaging websites and apps!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Artist</h3>
              <p>
                I have a Bachelor's Degree in Fine Art and have extensive knowledge and experience working on creative solutions for novel and challenging problems!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
                I have great experience and know-how when it comes to designing elegant and creative UI/UX, drawing from my background in Art & Design, I strive to create useful, engaging, and aesthetic user experiences!
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};