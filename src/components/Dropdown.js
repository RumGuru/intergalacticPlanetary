import { Fragment } from "react";
import PlanetList from "../pages/PlanetList";
import styles from "./Dropdown.module.scss";

const Dropdown = (props) => {
    let attachedClasses = [styles.dropdown , styles.close];
    if (props.open){
        attachedClasses = [styles.dropdown , styles.open];
    }

    return (
        <Fragment>
        <div className={styles.backDrop} onClick={props.closeDropdown}></div>
        <div className={attachedClasses.join('')}>
            <PlanetList planets={props.planets} closeDropdown={props.closeDropdown}/>
        </div>
        </Fragment>
    )
}

export default Dropdown;