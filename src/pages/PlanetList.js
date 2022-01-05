import PlanetListItem from "../components/PlanetListItem"

import styles from './PlanetList.module.scss';

const PlanetList = (props) => {
    const planetListItem = props.planets.map((planet) => {
        return (<PlanetListItem onClick={props.closeDropdown && props.closeDropdown} key={planet.name} name={planet.name} color={planet.planetColor} />);
    })

    return (
        <ul className={styles.planetList}>
            {planetListItem}
        </ul>
    )
}

export default PlanetList;