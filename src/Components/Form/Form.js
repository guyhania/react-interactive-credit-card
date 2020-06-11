import React from 'react';
import classes from './Form.module.css';

const monthsArr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const currentYear = new Date().getFullYear();

const maxInput = (event) => {
  return event.target.value.length < 16 ? true : event.preventDefault();
}

const Form = props => {
  return (
    <form className={classes.Main}>
      
      {/* Credit number */}
      <div>
        <label htmlFor="number" className={classes.Label} />
          Card Number
        <input
          autoFocus
          className={classes.Input}
          type="number"
          name="number"
          onKeyPress={maxInput}
          onChange={props.changeNumber} />
      </div>
      
      {/* Cardholder name */}
      <div>
        <label htmlFor="name" className={classes.Label} />
          Card Holder
        <input
          className={classes.Input}
          type="text"
          name="name"
          onChange={props.changeName} />
      </div>

      {/*Expiration Date*/}
      <label htmlFor="date" className={classes.Label}>Expiration Date</label>
      <label htmlFor="cvv" className={[classes.Label ,classes.CvvLabel].join(' ')}> CVV </label>
      <div className={classes.DateContainer} name="date">
        
        {/* Month */}
        <select className={classes.Date} onChange={props.changeMonth}>
          <option disabled={true} defaultValue={true}>Month</option>
          {monthsArr.map(month => {
            return <option value={month}>{month}</option>
          })}
        </select>
        {/* Year */}
        <select className={classes.Date} onChange={props.changeYear}>
          <option disabled={true} defaultValue={true}>Year</option>
          {monthsArr.map((year, index) => {
            return <option value={currentYear + index}>{currentYear + index}</option>
          })}
        </select>
        {/* CVV */}
        <input
          className={classes.Date}
          type="text"
          name="cvv"
          onChange={props.changeCVV}
          onFocus={props.cardFlip} />
      </div>
    </form >)
};

export default Form;


