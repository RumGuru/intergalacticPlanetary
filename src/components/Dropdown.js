const Dropdown = (props) => {
    let attachedClasses = [classes.dropdown , classes.close];
    if (props.open){
        attachedClasses = [classes.dropdown , classes.open];
    }

    return (
        <div className={attachedClasses.join('')}>
            
        </div>
    )
}