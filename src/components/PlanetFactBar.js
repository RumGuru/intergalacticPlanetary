import styles from './PlanetFactBar.module.scss';

const PlanetFactBar = (props) => {
    return (
        <li className={styles.planetStatListItem}>
            <p>Rotation Time</p>
            <div>
            <h3>58.6 <br/> Days</h3>
            </div>
        </li>
    )
}

export default PlanetFactBar;