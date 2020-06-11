import React, { Component } from 'react';
import classes from './CreditCardBuilder.css';
import Card from '../Card/Card';
import Form from '../Form/Form';

class CreditCardBuilder extends Component {
    state = {
        cardNumber: ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
        name: "FULL NAME",
        month: "MM",
        year: "YY",
        cvv: "",
        flip: false


    }

    cardNumberHandler = (event) => {
        const val = event.target.value;
        if (val.length > 0) {
            const number = val.split("");
            const arrLength = number.length;
            for (let i = 0; i < 16 - arrLength; i++) {
                number.push('#');
            };
            this.setState({
                cardNumber: number,
            });
        }
        else this.setState({ cardNumber: ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'] });
    }

    nameHandler = (event) => {
        const val = event.target.value;
        (val.length > 0) ? this.setState({ name: val.toUpperCase() }) : this.setState({ name: "FULL NAME" })
    }

    monthHandler = (event) => {
        const val = event.target.value;
        this.setState({ month: val })
    }
    yearHandler = (event) => {
        const val = event.target.value;
        this.setState({ year: val })
    }
    
    cvvHandler = (event) => {
        const val = event.target.value;
        this.setState({ cvv: val })
    }

    flipCardHandler = (event) => {
        // this.setState({cvv: !prevstate})
    }
    

    render() {
        return (
            <>
                <div className={classes.Card}>                    
                    <Card
                        number={this.state.cardNumber}
                        name={this.state.name}
                        month={this.state.month}
                        year={this.state.year}
                        cvv={this.state.cvv} />

                    <Form
                        changeNumber={this.cardNumberHandler}
                        changeName={this.nameHandler}
                        changeMonth={this.monthHandler}
                        changeYear={this.yearHandler}
                        changeCVV={this.cvvHandler}
                         />

                </div>

            </>
        );
    }

}

export default CreditCardBuilder;