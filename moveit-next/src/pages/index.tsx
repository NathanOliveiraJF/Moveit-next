import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css';
import { CountDownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | moveit</title>
      </Head>
      
      <ExperienceBar/>

      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown/>
          </div>
          <div>
            <ChallengeBox/>
          </div>
        </section>
      </CountDownProvider>
    </div>    
  )
}
