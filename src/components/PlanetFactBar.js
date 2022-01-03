import styles from './PlanetFactBar.module.scss';

const PlanetFactBar = (props) => {
    const valueArray = props.value.split(" ");
    return (
        <li className={styles.planetStatListItem}>
            <p>{props.stat}</p>
            <div className={styles.planetValues}>
            <h3 className={styles.factHeader}>{valueArray[0]}</h3>
            <h3 className={styles.factHeader}>{valueArray[1]}</h3>
            </div>
        </li>
    )
}

export default PlanetFactBar;