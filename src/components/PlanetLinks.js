
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./PlanetLinks.module.scss";

const PlanetLinks = (props) => {
  const location = useLocation();


  return (
    <ul className={styles.planetLinks}>
      <li style={location.pathname === '/planets/Earth/overview' ? {backgroundColor: props.color} : {backgroundColor: ""} }>
        <p className={styles.navNumber}>01</p>
        <NavLink
          to={`/planets/${props.planetName}/overview`}
          activeClassName={styles.activeTab}
          activeStyle={{ borderBottom: `4px solid ${props.color}` }}
        >
         Overview 
        </NavLink>
      </li>
      <li style={location.pathname === '/planets/Earth/structure' ? {backgroundColor: props.color} : {backgroundColor: ""} }>
      <p className={styles.navNumber}>02</p>
        <NavLink
          to={`/planets/${props.planetName}/structure`}
          activeClassName={styles.activeTab}
          activeStyle={{ borderBottom: `4px solid ${props.color}` }}
        >
          Internal Structure
        </NavLink>
      </li>
      <li style={location.pathname === '/planets/Earth/surface' ? {backgroundColor: props.color} : {backgroundColor: ""} }>
      <p className={styles.navNumber}>03</p>
        <NavLink
          to={`/planets/${props.planetName}/surface`}
          activeClassName={styles.activeTab}
          activeStyle={{ borderBottom: `4px solid ${props.color}` }}
        >
          Surface Geology
        </NavLink>
      </li>
    </ul>
  );
};

export default PlanetLinks;
