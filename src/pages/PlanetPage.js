import React, { Fragment } from "react";
import styles from "./PlanetPage.module.scss";
import PlanetFactBar from "../components/PlanetFactBar";
import { NavLink, Route, Switch } from "react-router-dom";
import PlanetOverview from "../components/PlanetOverview";
import PlanetStructure from "../components/PlanetStructure";
import PlanetSurface from "../components/PlanetSurface";
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
          <NavLink to={`/planets/${params.planetName}/structure`} activeClassName={styles.activeTab}>
            Structure
          </NavLink>
          <NavLink to={`/planets/${params.planetName}/surface`}>Surface</NavLink>
        </nav>

        <Switch>
        <Route path={`/planets/${params.planetName}/overview`}>
          <PlanetOverview planet={currentPlanet} />
        </Route>
          <Route path={`/planets/${params.planetName}/structure`}>
          <PlanetStructure planet={currentPlanet} />
        </Route>
        <Route path={`/planets/${params.planetName}/surface`}>
          <PlanetSurface planet={currentPlanet} />
        </Route>
        </Switch>
      </div>

      <div className={styles.planetStats}>
        <ul className={styles.planetStatsList}>
          <PlanetFactBar stat={'Rotation Time'} value={currentPlanet.rotation} />
          <PlanetFactBar stat={'Revolution Time'} value={currentPlanet.revolution} />
          <PlanetFactBar stat={'Radius'} value={currentPlanet.radius} />
          <PlanetFactBar stat={'Average Temp.'} value={currentPlanet.temperature} />
        </ul>
      </div>
    </Fragment>
  );
};

export default PlanetPage;
