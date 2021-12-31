import styles from './PlanetOverview.module.scss';

const PlanetOverview = (props) => {
    return (
        <nav className={styles.overview_nav}>
            <a>Overview</a>
            <a>Structure</a>
            <a>Surface</a>
        </nav>
    )
}

export default PlanetOverview;