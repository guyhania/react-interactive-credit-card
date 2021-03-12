import React from 'react';
import classes from './Form.module.css';


const monthsArr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const currentYear = new Date().getFullYear();

const Form = props => {
  const test =()=>{
    
  }
  const creditNumberHandler = (event) => {
    let input = event.target.value;
    event.target.value = (input.length > 3) ? input.replace(/\d{4}$/g, "$&" + " ") : input;
  }

  return (
    <form className={classes.Main} autoComplete="off">
      {/* <div className={classes.FormContainer}> */}
      {/* Credit number */}
      <div className={classes.InputsContainer}>
        <div className={classes.FieldContainer}>
          <label htmlFor="number" className={classes.Label} />
          Card Number
        <input
            autoFocus
            className={classes.Input}
            // type="number"
            name="number"
            onKeyPress={creditNumberHandler}
            onChange={props.changeNumber}
            maxLength={19} />
        </div>

        {/* Cardholder name */}
        <div className={classes.FieldContainer}>
          <label htmlFor="name" className={classes.Label} />
          Card Holder
        <input
            className={classes.Input}
            type="text"
            name="name"
            onChange={props.changeName}
            maxLength={19} />
        </div>

        {/*Expiration Date*/}
        <label htmlFor="date" className={classes.Label}>Expiration Date</label>
        <label htmlFor="cvv" className={[classes.Label, classes.CvvLabel].join(' ')}> CVV </label>
        <div className={classes.DateContainer} name="date">

          {/* Month */}
          <select className={classes.Date} defaultValue={"Month"} onChange={props.changeMonth}>
            <option disabled={true} >Month</option>
            {monthsArr.map(month => {
              return <option key={month} value={month}>{month}</option>
            })}
          </select>
          {/* Year */}
          <select className={classes.Date} defaultValue={"Year"} onChange={props.changeYear}>
            <option disabled={true} >Year</option>
            {monthsArr.map((month, index) => {
              return <option key={month} value={currentYear + index}>{currentYear + index}</option>
            })}
          </select>
          {/* CVV */}
          <input
            className={[classes.Date, classes.CvvBox].join(' ')}
            type="text"
            name="cvv"
            onChange={props.changeCVV}
            onFocus={props.cardFlip}
            onBlur={props.cardFlip}
            maxLength={3} />
        </div>
      </div>
    </form >)
};



export default Form;


