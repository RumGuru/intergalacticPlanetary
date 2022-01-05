import React, { Fragment } from "react";
import styles from "./PlanetPage.module.scss";
import PlanetFactBar from "../components/PlanetFactBar";
import { NavLink, Route, Switch } from "react-router-dom";
import PlanetOverview from "../components/PlanetOverview";
import PlanetStructure from "../components/PlanetStructure";
import PlanetSurface from "../components/PlanetSurface";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import Loader from "react-loader-spinner";

const PlanetPage = (props) => {
  const params = useParams();

  const currentPlanet = props.planets.find(
    (planet) => planet.name === params.planetName
  );

  let color = "";

  if (props.planets.length) {
    color = currentPlanet.planetColor;
  }

  const spinner = !props.planets.length;

  console.log(spinner);

  let planetData = <p>LOADING</p>;

  if (spinner) {
    planetData = (
      <div className="loadingSpinner">
        <Loader type="Circles" color="white" height={80} width={80}></Loader>
      </div>
    );
  } else {
    planetData = (
      <Fragment>
        <div className={styles.planetOverviewPage}>
          <nav className={styles.overview_nav}>
            <NavLink
              to={`/planets/${params.planetName}/overview`}
              activeClassName={styles.activeTab}
              activeStyle={{ borderBottom: `4px solid ${color}` }}
            >
              Overview
            </NavLink>
            <NavLink
              to={`/planets/${params.planetName}/structure`}
              activeClassName={styles.activeTab}
              activeStyle={{ borderBottom: `4px solid ${color}` }}
            >
              Structure
            </NavLink>
            <NavLink
              to={`/planets/${params.planetName}/surface`}
              activeClassName={styles.activeTab}
              activeStyle={{ borderBottom: `4px solid ${color}` }}
            >
              Surface
            </NavLink>
          </nav>

          <Switch>
            <Route path={`/planets/${params.planetName}/overview`}>
              <PlanetOverview
                color={currentPlanet.planetColor}
                planet={currentPlanet}
              />
            </Route>
            <Route path={`/planets/${params.planetName}/structure`}>
              <PlanetStructure
                color={currentPlanet.planetColor}
                planet={currentPlanet}
              />
            </Route>
            <Route path={`/planets/${params.planetName}/surface`}>
              <PlanetSurface
                color={currentPlanet.planetColor}
                planet={currentPlanet}
              />
            </Route>
          </Switch>
        </div>

        <div className={styles.planetStats}>
          <ul className={styles.planetStatsList}>
            <PlanetFactBar
              stat={"Rotation Time"}
              value={currentPlanet.rotation}
            />
            <PlanetFactBar
              stat={"Revolution Time"}
              value={currentPlanet.revolution}
            />
            <PlanetFactBar stat={"Radius"} value={currentPlanet.radius} />
            <PlanetFactBar
              stat={"Average Temp."}
              value={currentPlanet.temperature}
            />
          </ul>
        </div>
      </Fragment>
    );
  }

  return <Fragment>{planetData}</Fragment>;
};

export default PlanetPage;
