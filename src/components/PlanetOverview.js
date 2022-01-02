import { Fragment } from "react";


import mercury from "../starter-code/assets/planet-mercury.svg";
import source from "../starter-code/assets/icon-source.svg";

import styles from './PlanetOverview.module.scss';

const PlanetOverview = (props) => {
    return (
        <Fragment>
        <section className={styles.planetImageSection}>
        <img className={styles.planetImage} src={mercury}></img>
      </section>
      <section className={styles.planetTitleSection}>
        <h5 className={styles.planetTitle}>Mercury</h5>
      </section>
      <section className={styles.planetOverviewSection}>
        <p className={styles.planetOverview}>
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial planets
          in the Solar System, and is a rocky body like Earth
        </p>
      </section>
      <section className={styles.sourceSection}>
        <a href="https://en.wikipedia.org/wiki/Mercury_(planet)">
          Source: WikiPedia
        </a>
        <img className={styles.sourceIcon} src={source}></img>
      </section>
      </Fragment>
    )
} 

export default PlanetOverview;