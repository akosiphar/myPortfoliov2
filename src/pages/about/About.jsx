import React, { useEffect } from 'react'
import styles from './About.module.css'
import Typewriter from 'typewriter-effect'

//icons
import linkedIn from '../../assets/icons/linkedIn.png'
import mail from '../../assets/icons/mail.png'

export default function About() {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <div className={styles.heroDiv}>

      <div className={styles.textHolder}>
        <h1 className={styles.h1}>
        <Typewriter 
          onInit={(type) => {
            type.typeString("About")
            .typeString('<span style="color:white"> Me </span>')
            .start()
          }}
        />
        </h1>
        
        <div className={styles.content}>
          <p>Other than being a Full stack developer, 
          <span> I love music, games, and traveling. 
          </span>
          </p>
        </div>
        
      </div>
      <div className={styles.imageHolder}>
        <img src='https://images.unsplash.com/photo-1608663003920-757dd225d6c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' />
        <img src='https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
        <img src='https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8' />
        
      </div>
    </div>

    <div>
      <p className={styles.h1}>Contact <span> Me</span></p>
      <p className={styles.h2}>
        You can message me through:
      </p>

      <div className={styles.contactHolder}>
        <div>
          <a className={styles.socialContainer} href='https://www.linkedin.com/in/raphgalag/'>
            <img src={linkedIn} />
            <p>LinkedIn</p>
          </a>
        </div>
        <div>
          <a className={styles.socialContainer}>
            <img src={mail} />
            <p>raphgalag@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}
