import React from 'react';
import styles from './../styles/MissionCard.module.css';

const MissionCard = ({
    mission: {links, mission_id, mission_name, flight_number, launch_year, launch_success, launch_landing}
}) => (
    <section className={styles.container}>
        <img
            src={links.mission_patch}
            alt={mission_name}
            className={styles.image}
        />
        <h3 className={styles.name}>{mission_name} #{flight_number}</h3>
        {
            !!mission_id?.length && (
                <>
                    <h4 className={styles.type}>Mission Ids:</h4>
                    <ul className={styles.id_list}>
                        {mission_id.map(id => (
                            <li key={id} className={styles.detail}>{id}</li>
                        ))}
                    </ul>
                </>
            )
        }
        <div className={styles.flex}>
            <h4 className={styles.type}>Launch Year:</h4>
            <p className={styles.detail}>{launch_year}</p>
        </div>
        <div className={styles.flex}>
            <h4 className={styles.type}>Successful Launch:</h4>
            <p className={styles.detail}>{String(launch_success)}</p>
        </div>
        <div className={styles.flex}>
            <h4 className={styles.type}>Successful Landing:</h4>
            <p className={styles.detail}>{String(!!launch_landing)}</p>
        </div>
    </section>
);

export default MissionCard;