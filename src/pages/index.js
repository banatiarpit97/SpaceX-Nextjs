import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { getDefault, getMissions } from './../services/launches';
import MissionCard from './../components/MissionCard';
import Filter from './../components/Filter';
import Loader from './../components/Loader';


export default function Home({
  missions
}) {
  const router = useRouter();
  const [missionsToDisplay, setMissionsToDisplay] = useState(missions);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(Object.keys(router.query).length){
      setIsLoading(true);
      getMissions(router.query).then(res => {
        setIsLoading(false);
        setMissionsToDisplay(res);
      });    
    } else {
      setMissionsToDisplay(missions);
    }
  }, [router.query])

  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX Missions</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <header className={styles.header}>
        <h1>SpaceX Launch Programs</h1>
      </header>
      <Filter initialFilter={router.query} />
      <main className={styles.missions}>
        {isLoading && <Loader />}
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
