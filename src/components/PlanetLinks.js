import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import styles from "./PlanetLinks.module.scss";

const PlanetLinks = (props) => {
  const [selectedTab , setSelectedTab] = useState('Overview');

  const overviewClickHandler = () => {
    setSelectedTab('Overview');
  }
  const internalClickHandler = () => {
    setSelectedTab('Internal');
  }
  const geologyClickHandler = () => {
    setSelectedTab('Geology');
  }

  const activeElement = selectedTab;
  return (
    <ul className={styles.planetLinks}>
      <li style={activeElement=== 'Overview' &&{backgroundColor: props.color}}>
        <p className={styles.navNumber}>01</p>
        <NavLink
          to={`/planets/${props.planetName}/overview`}
          activeClassName={styles.activeTab}
          activeStyle={{ borderBottom: `4px solid ${props.color}` }}
          onClick={overviewClickHandler}
        >
         Overview 
        </NavLink>
      </li>
      <li className={activeElement === 'Internal' && styles.active}>
      <p className={styles.navNumber}>02</p>
        <NavLink
          to={`/planets/${props.planetName}/structure`}
          activeClassName={styles.activeTab}
          activeStyle={{ borderBottom: `4px solid ${props.color}` }}
          onClick={internalClickHandler}
        >
          Internal Structure
        </NavLink>
      </li>
      <li className={activeElement === 'Geology' && styles.active}>
      <p className={styles.navNumber}>03</p>
        <NavLink
          to={`/planets/${props.planetName}/surface`}
          activeClassName={styles.activeTab}
          activeStyle={{ borderBottom: `4px solid ${props.color}` }}
          onClick={geologyClickHandler}
        >
          Surface Geology
        </NavLink>
      </li>
    </ul>
  );
};

export default PlanetLinks;
