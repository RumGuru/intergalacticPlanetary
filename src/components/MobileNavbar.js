import { NavLink } from "react-router-dom";
import styles from './MobileNavbar.module.scss';


const MobileNavbar = (props) => {
    return (
        <nav className={styles.overview_nav}>
            <NavLink
              to={`/planets/${props.planetName}/overview`}
              activeClassName={styles.activeTab}
              activeStyle={{ borderBottom: `4px solid ${props.color}` }}
            >
              Overview
            </NavLink>
            <NavLink
              to={`/planets/${props.planetName}/structure`}
              activeClassName={styles.activeTab}
              activeStyle={{ borderBottom: `4px solid ${props.color}` }}
            >
              Structure
            </NavLink>
            <NavLink
              to={`/planets/${props.planetName}/surface`}
              activeClassName={styles.activeTab}
              activeStyle={{ borderBottom: `4px solid ${props.color}` }}
            >
              Surface
            </NavLink>
          </nav>
    )
}

export default MobileNavbar;