import { NavLink } from "react-router-dom";
import styles from "./PlanetNavList.module.scss";

const PLanetNavList = (props) => {
  return (
    <nav className={styles.planetNav}>
      {props.planets &&
        props.planets.map((planet) => {
          console.log(planet);
          return (
            <NavLink
              to={`/planets/${planet.name}`}
              className={styles.planetNavLink}
              activeClassName={styles.activeTab}
              activeStyle={{ borderTop: `4px solid ${planet.planetUiColor}` }}
            >
              {planet.name}
            </NavLink>
          );
        })}
    </nav>
  );
};

export default PLanetNavList;
