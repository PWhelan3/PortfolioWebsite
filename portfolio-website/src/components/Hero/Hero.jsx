import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hey, I'm Peter</h1>
            <p className={styles.description}>I am a Frontend Developer and Art & Design Graduate. </p>
            <a href="mailto:pwhelanstudio@gmail.com" className={styles.contactBtn}>Contact Me!</a>
        </div>
        <img src={getImageUrl("123.JPG")} alt="Hero Of Me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
