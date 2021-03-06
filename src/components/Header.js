import { NavLink } from 'react-router-dom';
import { useLocation} from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Header.module.scss';
import PLanetNavList from './PlanetNavList';

const Header = (props) => {
  const location = useLocation();
  let lowOpacity = '';
  if (location.pathname === '/'){
    lowOpacity = styles.lowOpacity
  } else {
    lowOpacity = '';
  };

  let className = `${styles.sideToggleButton} ${lowOpacity}`;


return (
    <header className={styles.headerBar}>
      <NavLink to={'/'} className={styles.title} >The Planets</NavLink>
      <PLanetNavList planets={props.planets}/>
        <div className={className} onClick={props.openDropdown}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
        </div>
      </header>
)
}

export default Header;