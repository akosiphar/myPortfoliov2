import React from 'react'
import styles from "./Homepage.module.css"
import Typewriter from 'typewriter-effect'
import dArrow from '../../assets/double_arrow_down.png'
export default function Homepage() {
  return (
    <>
      <div className={styles.mainDiv}>
      
          <h1 className={styles.home}>
          <Typewriter 
            onInit={(type) => {
              type.typeString("Hi! I'm ")
              .typeString("<span style='color:lightBlue'>Raphaelo Galag,</span>")
              .typeString("<br><span style='color:white'>a Full Stack Developer.</span")
              .start()
            }}
          />
          </h1>
          <div className={styles.arrowDown}>
            <img src={dArrow} />
          </div>
      </div>
      
      <div className={styles.skillSet}>
        <h2 className={styles.h2}>Skill <span>Set</span></h2>

      </div>


      <div className={styles.projects}>
          <h2 className={styles.h2}>Selected <span>Works</span></h2>

          <div className={styles.card}>
            <div className={styles.imageHolder} />
            <div className={styles.textHolder}>
              <p className={styles.title}>INTALIO ESTATES</p>
              <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.
              </p>
              <button className={styles.homeBtn}>VIEW SITE
              <span className={styles.arrow}>{'>'}</span></button>
            </div>
          </div>


          <div className={styles.card}>
            <div className={styles.imageHolder} />
            <div className={styles.textHolder}>
              <p className={styles.title}>JRCC</p>
              <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.
              </p>
              <button className={styles.homeBtn}>VIEW SITE</button>
            </div>
          </div>


          <div className={styles.card}>
            <div className={styles.imageHolder} />
            <div className={styles.textHolder}>
              <p className={styles.title}>Jacinta Enclaves</p>
              <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.
              </p>
              <button className={styles.homeBtn}>VIEW SITE</button>
            </div>
          </div>
      </div>
    </>
  )
}
