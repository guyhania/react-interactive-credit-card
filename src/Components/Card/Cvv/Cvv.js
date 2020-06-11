import React from 'react';
import classes from './Cvv.module.css';

const Cvv = (props) => (
    <>
        <label className={classes.Scale} htmlFor="cvv">CVV</label>
        <div
            name="cvv"
            // onFocus={props.}
            className={`${classes.Scale} ${classes.WhiteStripe}`}>{props.cvv}
        </div>
    </>

);

export default Cvv;