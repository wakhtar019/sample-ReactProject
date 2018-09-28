import React, { Component } from 'react';
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import classes from './CheckOut.css';

class CheckOut extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }
    render() {
        return (
            <div className={classes.CheckOut}>
                <CheckOutSummary ingredients={this.state.ingredients} />
            </div>
        );
    }
}
export default CheckOut;