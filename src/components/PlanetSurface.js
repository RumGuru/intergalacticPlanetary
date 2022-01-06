import { Fragment } from "react";

import source from "../starter-code/assets/icon-source.svg";

import styles from './PlanetSurface.module.scss';



const PlanetSurface = (props) => {

  const planetImagePath = props.planet.images.planet.substring(1); 
  const geologyImagePath = props.planet.images.geology.substring(1); 

    return (
        <Fragment>
        <section className={styles.planetImageSection}>
        <div className={styles.planetImageContainer}>
        <img className={styles.planetImage} src={planetImagePath} alt="Planet"></img>
        <div className={styles.geologyIcon}>
        <img className={styles.geologyImage} src={geologyImagePath} alt="Planet"></img>
        </div>
        </div>
      </section>
      <section className={styles.planetTitleSection}>
        <h5 className={styles.planetTitle}>{props.planet.name}</h5>
      </section>
      <section className={styles.planetOverviewSection}>
        <p className={styles.planetOverview}>
          {props.planet.geology.content}
        </p>
      </section>
      <section className={styles.sourceSection}>
        <a href={props.planet.geology.source}>
          Source: WikiPedia
        </a>
        <img className={styles.sourceIcon} src={source} alt="Source Icon"></img>
      </section>
      </Fragment>
    )
} 

export default PlanetSurface;