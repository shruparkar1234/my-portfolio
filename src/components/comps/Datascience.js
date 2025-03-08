import React from 'react';
import {
  SiPython,      // Python (core language for Data Science)
  SiPandas,      // Pandas (Data manipulation)
  SiNumpy,       // NumPy (Numerical computing)
  SiScikitlearn, // Scikit-learn (Machine Learning)
  SiTensorflow,  // TensorFlow (Deep Learning)
  SiPytorch,     // PyTorch (Deep Learning)
  SiJupyter,     // Jupyter Notebook (IDE for data science)
  // FaDatabase,    // Database (SQL, Big Data)
  // FaChartLine,   // Visualization & Analytics
} from 'react-icons/si';
import { FaCaretRight, FaDatabase, FaChartLine } from 'react-icons/fa';
import Lottie from 'react-lottie';
import stackslotties from '../lotties/datascienceLottie.json';
import { DataScienceContent } from '../contents';
import styles from '../../styles/techs.module.css';

function Datascience() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: stackslotties,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <div className={styles.techs}>
        <div className={styles.lottie}>
          <Lottie options={defaultOptions} />
        </div>
        <div className={styles.row}>
          <div className={styles.stacktitle}> Data Science</div>
          <div className={styles.stackicons}>
            <SiPython />
            <SiPandas />
            <SiNumpy />
            <SiScikitlearn />
            <SiTensorflow />
            <SiPytorch />
            <SiJupyter />
            <FaDatabase /> 
            <FaChartLine />
          </div>
          {DataScienceContent.map((content) => (
            <div className={styles.content}>
              <FaCaretRight /> {content.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Datascience;
