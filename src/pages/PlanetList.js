import PlanetListItem from "../components/PlanetListItem"

import styles from './PlanetList.module.scss';

const PlanetList = (props) => {
    const planetListItem = props.planets.map((planet) => {
        return (<PlanetListItem key={planet.name} name={planet.name}  />);
    })

    return (
        <ul>
            {planetListItem}
        </ul>
    )
}

export default PlanetList;