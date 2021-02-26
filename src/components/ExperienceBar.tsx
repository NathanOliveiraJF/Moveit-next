import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {

  const { currentExperience, experinceToNextLevel } = useContext(ChallengesContext);
  
  const percenteToNextLevel = Math.round(currentExperience * 100) / experinceToNextLevel;

  return (
    <header className={styles.experienceBar} >
      <span>0 xp</span>
      <div>
        <div style={{width: `${percenteToNextLevel}%`}} />

        <span className={styles.currentExperience} style={{ left: `${percenteToNextLevel}%`}}>
          {currentExperience}xp
        </span>
      </div>
      <span>{experinceToNextLevel} xp</span>
    </header>
  );
}