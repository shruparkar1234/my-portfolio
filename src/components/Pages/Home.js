import React from 'react';
import styles from '../../styles/home.module.css';
import Lottie from 'react-lottie';
import codingAnimation from '../lotties/computeGirl.json';
import resume from '../docs/resumee.pdf';

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: codingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.text}>Hi I'm Shrushti</div>
        </div>
        <div className={styles.intro2}>
          <div className={styles.text}>
            I'm passionate Data scientist, Frontend web developer having an experience of web
            applications with Nodejs, React.js, Next.js and Building predictive 
            modelling methods.
          </div>
        </div>
        <div className={styles.button}>
          <a href={resume}>Resume</a>
        </div>
      </div>
      <Lottie options={defaultOptions} />
    </div>
  );
}

export default Home;
