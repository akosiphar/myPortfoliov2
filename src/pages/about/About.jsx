import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <>
    <div className={styles.heroDiv}>

      <div className={styles.textHolder}>
        <h1 className={styles.h1}>About 
        <span> Me</span> </h1>
        
        <div className={styles.content}>
          <p>Other than being a Full stack developer, 
          <span> I love music, games, and traveling. 
          </span>
          </p>
        </div>
        
      </div>
      <div className={styles.imageHolder}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>

    <div>
      <p className={styles.h1}>Contact Me</p>
    </div>
    </>
  )
}
