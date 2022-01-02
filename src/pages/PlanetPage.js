import React, { Fragment } from "react";
import styles from "./PlanetPage.module.scss";
import PlanetFactBar from "../components/PlanetFactBar";
import { NavLink, Route } from "react-router-dom";
import PlanetOverview from "../components/PlanetOverview";
import { useParams, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

const PlanetPage = (props) => {
  const match = useRouteMatch();
  const params = useParams();
  console.log(props.planets);
  const currentPlanet = props.planets.find((planet) => planet.name === params.planetName);

  console.log(match);
  return (
    <Fragment>
      <div className={styles.planetOverviewPage}>
        <nav className={styles.overview_nav}>
          <NavLink to={`/planets/${match.params['planetName']}/overview`} activeClassName={styles.activeTab}>
            Overview
          </NavLink>
          <NavLink to="/structure" activeClassName={styles.activeTab}>
            Structure
          </NavLink>
          <NavLink to="/surface">Surface</NavLink>
        </nav>

        <Route path={`/planets/${params.planetName}/overview`}>
          <PlanetOverview planet={currentPlanet} />
        </Route>
      </div>

      <div className={styles.planetStats}>
        <ul className={styles.planetStatsList}>
          <PlanetFactBar />
          <PlanetFactBar />
          <PlanetFactBar />
          <PlanetFactBar />
        </ul>
      </div>
    </Fragment>
  );
};

export default PlanetPage;
