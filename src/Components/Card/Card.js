import React from 'react';
import classes from './Card.module.css';
import Digits from './Digits/Digits';
import Name from './Name/Name';
import Date from './Date/Date';
import Cvv from './Cvv/Cvv';
const card = (props) => {
    return (
        <>
            <div className={classes.WrapCard}>
                <div className={classes.Card}>
                    <div className={classes.FrontCard}>
                        <Digits digits={props.number} clicked={props.digitsClicked} />
                        <div className={classes.Details}>
                            <Name className={classes.CardHolder} name={props.name} />
                            <Date month={props.month} year={props.year} />
                        </div>
                    </div>
                    <div className={classes.BackCard}>
                        <div className={classes.BlackStripe}></div>
                        <Cvv cvv={props.cvv}></Cvv>
                    </div>
                </div>
            </div>


        </>

    );
}

export default card;