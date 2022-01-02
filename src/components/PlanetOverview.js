import { Fragment } from "react";


import Mercury from "../starter-code/assets/planet-mercury.svg";
import Venus from "../starter-code/assets/planet-venus.svg";
import Uranus from "../starter-code/assets/planet-uranus.svg";
import Saturn from "../starter-code/assets/planet-saturn.svg";
import Neptune from "../starter-code/assets/planet-neptune.svg";
import Mars from "../starter-code/assets/planet-mars.svg";
import Jupiter from "../starter-code/assets/planet-jupiter.svg";
import Earth from "../starter-code/assets/planet-earth.svg";

import source from "../starter-code/assets/icon-source.svg";

import styles from './PlanetOverview.module.scss';

const PlanetOverview = (props) => {

  let planetImage;

  if (props.name === 'Mercury'){
    planetImage = Mercury;
  } else if (props.name === 'Venus'){
    planetImage = Venus;
  };
  

    return (
        <Fragment>
        <section className={styles.planetImageSection}>
        <img className={styles.planetImage} src={planetImage}></img>
      </section>
      <section className={styles.planetTitleSection}>
        <h5 className={styles.planetTitle}>Mercury</h5>
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
        <img className={styles.sourceIcon} src={source}></img>
      </section>
      </Fragment>
    )
} 

export default PlanetOverview;