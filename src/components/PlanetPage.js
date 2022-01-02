import React, { Fragment } from "react";
import styles from "./PlanetPage.module.scss";
import PlanetFactBar from "./PlanetFactBar";
import { NavLink, Route } from "react-router-dom";
import PlanetOverview from "./PlanetOverview";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

const PlanetPage = (props) => {
  const match = useRouteMatch();

  return (
    <Fragment>
      <div className={styles.planetOverviewPage}>
        <nav className={styles.overview_nav}>
          <NavLink to={`${match.path}/overview`} activeClassName={styles.activeTab}>
            Overview
          </NavLink>
          <NavLink to="/structure" activeClassName={styles.activeTab}>
            Structure
          </NavLink>
          <NavLink to="/surface">Surface</NavLink>
        </nav>

        <Route path={`${match.path}/overview`}>
          <PlanetOverview />
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
