import { NavLink } from "react-router-dom";
import styles from "./PlanetLinks.module.scss";

const PlanetLinks = (props) => {
  return (
    <ul className={styles.planetLinks}>
      <li>
        <NavLink
          to={`/planets/${props.planetName}/overview`}
          activeClassName={styles.activeTab}
          activeStyle={{ backgroundColor:`${props.color}`}}
        >
          Overview
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/planets/${props.planetName}/structure`}
          activeClassName={styles.activeTab}
          activeStyle={{ borderBottom: `4px solid ${props.color}` }}
        >
          Structure
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/planets/${props.planetName}/surface`}
          activeClassName={styles.activeTab}
          activeStyle={{ borderBottom: `4px solid ${props.color}` }}
        >
          Surface
        </NavLink>
      </li>
    </ul>
  );
};

export default PlanetLinks;
