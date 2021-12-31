import styles from './PlanetListItem.module.scss';

const PlanetListItem = (props) => {
    return (
        <li>
            <div className={styles.listItem}>
                <div>
                    <div className={styles.planetIcon}/>
                    <h5 className={styles.nameText}>{props.name}</h5>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg>
                </div>

            </div>
        </li>
    )
}

export default PlanetListItem;