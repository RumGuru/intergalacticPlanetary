import React, { Fragment } from "react";
import styles from "./PlanetPage.module.scss";
import PlanetFactBar from "../components/PlanetFactBar";
import { Route, Switch, Redirect } from "react-router-dom";
import PlanetOverview from "../components/PlanetOverview";
import PlanetStructure from "../components/PlanetStructure";
import PlanetSurface from "../components/PlanetSurface";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import Loader from "react-loader-spinner";
import MobileNavbar from "../components/MobileNavbar";
import PlanetLinks from "../components/PlanetLinks";

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
          <MobileNavbar color={color} planetName={params.planetName} />

          <Switch>
            <Route exact path={`/planets/${params.planetName}`}>
              {<Redirect to={`/planets/${params.planetName}/overview`} />}
            </Route>

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
