import React, { useEffect } from 'react'
import styles from "./Homepage.module.css"
import Typewriter from 'typewriter-effect'
import dArrow from '../../assets/double_arrow_down.png'

//icons 
import html from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'
import js from '../../assets/icons/javascript.png'
import react from '../../assets/icons/react.png'
import mongoDb from '../../assets/icons/mongoDb.png'
import nodeJs from '../../assets/icons/nodeJs.png'
import postman from '../../assets/icons/postman.png'
import restApi from '../../assets/icons/restApi.png'
import express from '../../assets/icons/express.png'
import git from '../../assets/icons/git.png'
import gitlab from '../../assets/icons/gitlab.png'
import webflow from '../../assets/icons/webflow.png'

export default function Homepage() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])

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
        <div className={styles.imageContainer}>
          <img src={html} />
          <img src={css} />
          <img src={js} />
          <img src={express} />
          <img src={nodeJs} />
          <img src={mongoDb} />
          <img src={postman} />
          <img src={restApi} />
          <img src={git} />
          <img src={gitlab} />
          <img src={react} />
          <img src={webflow} />
          
        </div>

      </div>


      <div className={styles.projects}>
          <h2 className={styles.h2}>My <span>Works</span></h2>
          <h3 className={styles.h3}>Personal <span>Projects</span></h3>

          <div className={styles.card}>
            <div className={styles.imageHolder_5} />
            <div className={styles.textHolder}>
              <p className={styles.title}>E-Commerce Website</p>
              <button className={styles.homeBtn} >
                <a target='_blank' href='https://my-e-commerce-32bcm4krn-akosiphar.vercel.app/'>VIEW SITE
                </a>
                <span className={styles.arrow}>{'>'}</span>
              </button>
            </div>
          </div>


          <h3 className={styles.h3}>Using <span>Webflow</span></h3>

          <div className={styles.card}>
            <div className={styles.imageHolder} />
            <div className={styles.textHolder}>
              <p className={styles.title}>INTALIO ESTATES</p>
              <button className={styles.homeBtn} >
                <a target='_blank' href='https://www.intalioestates.ph/'>VIEW SITE
                </a>
                <span className={styles.arrow}>{'>'}</span>
              </button>
            </div>
          </div>


          <div className={styles.card}>
            <div className={styles.imageHolder_2} />
            <div className={styles.textHolder}>
              <p className={styles.title}>Jacinta Enclaves</p>
              <button className={styles.homeBtn} >
                <a target='_blank' href='https://www.jacintaenclaves.com/'>VIEW SITE
                </a>
                <span className={styles.arrow}>{'>'}</span>
              </button>
            </div>
          </div>


          <div className={styles.card}>
            <div className={styles.imageHolder_3} />
            <div className={styles.textHolder}>
              <p className={styles.title}>Weecomm Centre</p>
              <button className={styles.homeBtn} >
                <a target='_blank' href='https://www.weecommcentre.ph/'>VIEW SITE
                </a>
                <span className={styles.arrow}>{'>'}</span>
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imageHolder_4} />
            <div className={styles.textHolder}>
              <p className={styles.title}>Jesus Reigns Christian College</p>
              <button className={styles.homeBtn} >
                <a target='_blank' href='https://www.jrccmanila.edu.ph/'>VIEW SITE
                </a>
                <span className={styles.arrow}>{'>'}</span>
              </button>
            </div>
          </div>
      </div>
    </>
  )
}
