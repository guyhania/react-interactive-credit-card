import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Cvv.module.css';

const maxInput = (event) => {
    console.log("is working");
    return event.target.value.length < 3 ? true : event.preventDefault();
  }

const CvvForm = (props) => (
    <Auxiliary>
            <label htmlFor="cvv" className={classes.Label}> CVV </label>
            <div>
                <input
                    className={classes.Date}
                    type="text"
                    name="cvv"
                    onChange={props.changeCVV}
                    onFocus={props.flipCard}
                    type="number"
                    onKeyPress={maxInput} />
            </div>
    </Auxiliary>
);

export default CvvForm;