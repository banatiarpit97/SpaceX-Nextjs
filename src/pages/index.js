import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getDefault, getMissions } from './../services/launches';
import MissionCard from './../components/MissionCard';
import Filter from './../components/Filter';
import { useState } from 'react';

export default function Home({
  missions
}) {
  const [missionsToDisplay, setMissionsToDisplay] = useState(missions);
  
  const onFilterChange = filter => {
    if(Object.keys(filter).length){
      console.log(filter)
      getMissions(filter).then(res => setMissionsToDisplay(res))    
    } else {
      setMissionsToDisplay(missions);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX Missions</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <header className={styles.header}>
        <h1>SpaceX Launch Programs</h1>
      </header>
      <Filter onFilterChange={onFilterChange} />
      <main className={styles.missions}>
        {
          missionsToDisplay.map(mission => (
            <MissionCard mission={mission} key={mission.flight_number} />
          ))
        }
      </main>
      <footer className={styles.footer}>
        <p>Developed by: Arpit Banati</p>
      </footer>
    </div>
  )
}

export async function getServerSideProps(){
  const missions = await getDefault();
  return {
    props: {
      missions
    }
  }
}
