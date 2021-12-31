import styles from './Header.module.scss';

const Header = (props) => {
return (
    <header className={styles.headerBar}>
        <h1 className={styles.title}>The Planets</h1>
        <div className={styles.sideToggleButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
        </div>
      </header>
)
}

export default Header;