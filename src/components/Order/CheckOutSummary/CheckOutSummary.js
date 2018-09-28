import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckOutSummary.css';

const checkOutSummary = (props) => {
    return (
        <div className={classes.CheckOutSummary}>
            <h1>We hope it testes well!!</h1>
            <div style={{ width: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger"
                clicked>CANCELL</Button>
            <Button btnType="Success"
                clicked>CONTINUE</Button>
        </div>
    );
}

export default checkOutSummary;