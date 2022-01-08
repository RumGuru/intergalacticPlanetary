import { NavLink } from 'react-router-dom';
import styles from './PlanetNavList.module.scss';

const PLanetNavList = (props) => {
    return (
        <nav className={styles.planetNav}>
            {props.planets && props.planets.map((planet)=>{
                return (
            <NavLink
              to={`/planets/${planet.name}/overview`}
              className={styles.planetNavLink}
              activeClassName={styles.activeTab}
              activeStyle={{ borderBottom: `4px solid ${planet.color}` }}
            >{planet.name}</NavLink>
                )
            })}
        </nav>
    )
}

export default PLanetNavList;