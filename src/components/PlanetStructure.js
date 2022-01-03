import { Fragment } from "react";

import source from "../starter-code/assets/icon-source.svg";

import styles from './PlanetOverview.module.scss';



const PlanetStructure = (props) => {

  const imagePath = props.planet.images.internal.substring(1);  

    return (
        <Fragment>
        <section className={styles.planetImageSection}>
        <img className={styles.planetImage} src={imagePath} alt="Planet"></img>
      </section>
      <section className={styles.planetTitleSection}>
        <h5 className={styles.planetTitle}>{props.planet.name}</h5>
      </section>
      <section className={styles.planetOverviewSection}>
        <p className={styles.planetOverview}>
          {props.planet.structure.content}
        </p>
      </section>
      <section className={styles.sourceSection}>
        <a href={props.planet.structure.source}>
          Source: WikiPedia
        </a>
        <img className={styles.sourceIcon} src={source} alt="Source Icon"></img>
      </section>
      </Fragment>
    )
} 

export default PlanetStructure;