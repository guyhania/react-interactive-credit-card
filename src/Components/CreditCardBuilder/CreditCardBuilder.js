import React, { Component } from 'react';
// import classes from './CreditCardBuilder.css';
import Card from '../Card/Card';
import Form from '../Form/Form';

const defaultCard = ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'];

class CreditCardBuilder extends Component {
    state = {
        cardNumber: defaultCard,
        name: "FULL NAME",
        month: "MM",
        year: "YY",
        cvv: "",
        flip: false,
        

    }

    cardNumberHandler = (event) => {
        let val = event.target.value;
        if (val.length > 0) {
            val = val.replace(/\s/g, "")
            const number = val.split("");
            const arrLength = number.length;
            for (let i = 0; i < 16 - arrLength; i++) {
                number.push('#');
            };
            this.setState({
                cardNumber: number,
            });
        }
        else this.setState({ cardNumber: defaultCard });
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
        this.setState({ flip: !this.state.flip })
    }

    render() {
        return (
            <>
                <div>
                    <Card
                        number={this.state.cardNumber}
                        name={this.state.name}
                        month={this.state.month}
                        year={this.state.year}
                        cvv={this.state.cvv}
                        flip={this.state.flip} />

                    <Form
                        changeNumber={this.cardNumberHandler}
                        changeName={this.nameHandler}
                        changeMonth={this.monthHandler}
                        changeYear={this.yearHandler}
                        changeCVV={this.cvvHandler}
                        cardFlip={this.flipCardHandler}
                    />
                </div>
            </>
        );
    }

}

export default CreditCardBuilder;