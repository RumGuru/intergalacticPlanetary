import { NavLink } from 'react-router-dom';
import styles from './PlanetListItem.module.scss';

const PlanetListItem = (props) => {

    return (
        <li onClick={props.onClick}>
            <div className={styles.listItem}>
                <div className={styles.planetName} >
                    <div className={styles.planetIcon} style={{backgroundColor:props.color}}/>
                    <NavLink className={styles.nameText} to={`/planets/${props.name}/overview`}>{props.name}</NavLink>
                    
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg>
                </div>

            </div>
        </li>
    )
}

export default PlanetListItem;

/*<h5 className={styles.nameText}>{props.name}</h5>*/
