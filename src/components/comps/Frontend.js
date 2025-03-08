import React from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaNpm,
  FaCaretRight,
  FaFigma,        // Figma (UI/UX design tool)
  FaGitAlt,       // Git (Version control)
} from 'react-icons/fa';
import {
  SiTypescript,   // TypeScript (Typed JavaScript)
  SiNextdotjs,    // Next.js (React framework for SSR/SSG)
  SiTailwindcss,  // Tailwind CSS (Utility-first CSS framework)
  SiRedux,        // Redux (State management)
  
} from 'react-icons/si';

import Lottie from 'react-lottie';
import stackslotties from '../lotties/frontendLottie.json';
import { FrontendUIContent } from '../contents';
import styles from '../../styles/techs.module.css';

function Frontend() {
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
          <div className={styles.stacktitle}> Frontend Development</div>
          <div className={styles.stackicons}>
            <FaReact />
            <FaHtml5 />
            <FaCss3 />
            <FaJs />
            <FaNodeJs />
            <SiTypescript />
            <SiNextdotjs />
            <SiTailwindcss />
            <SiRedux />
            <FaFigma />
            <FaNpm />
            <FaGitAlt />
          </div>
          {FrontendUIContent.map((content) => (
            <div className={styles.content}>
              <FaCaretRight /> {content.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Frontend;
