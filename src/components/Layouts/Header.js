import { Fragment } from "react";
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {

return <Fragment>
    
    <header className={classes.header}>
        <h1>Food Meals</h1>
        <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
    
        <img src={mealsImage} alt='Meals Image full delicuss food' />
    </div>

</Fragment>

} 

export default Header;