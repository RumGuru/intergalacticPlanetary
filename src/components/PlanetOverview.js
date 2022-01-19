import { Fragment } from "react";

import source from "../starter-code/assets/icon-source.svg";
import PlanetLinks from "./PlanetLinks";

import styles from './PlanetOverview.module.scss';



const PlanetOverview = (props) => {

  const imagePath = props.planet.images.planet.substring(1);  


    return (
        <Fragment>
        <section className={styles.planetImageSection}>
          <div className={styles.planetImageContainer}>
        <img className={styles.planetImage} src={imagePath} alt="Planet"></img>
        </div>
      </section>
      <div className={styles.planetInterface}>
        <div className={styles.planetData}>
      <section className={styles.planetTitleSection}>
        <h5 className={styles.planetTitle}>{props.planet.name}</h5>
      </section>
      <section className={styles.planetOverviewSection}>
        <p className={styles.planetOverview}>
          {props.planet.overview.content}
        </p>
      </section>
      <section className={styles.sourceSection}>
        <a href={props.planet.overview.source}>
          Source: WikiPedia
        </a>
        <img className={styles.sourceIcon} src={source} alt="Source Icon"></img>
      </section>
      </div>
      <div className={styles.planetLinks}>
      <PlanetLinks color={props.planet.planetUiColor} planetName={props.planet.name}/>
      </div>
      </div>
      </Fragment>
    )
} 

export default PlanetOverview;