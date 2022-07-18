import LabourImages from '../../assets/rahul-kashyap--Qci0bUpqCk-unsplash.jpg'
import classes from './Images.module.css'

const Images=props =>{
    return (
        <div className={classes['main-image']} >
            <img  src={LabourImages} alt="A table full of delicious Food"/>
        </div>
    )
}

export default Images
