import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button.js";

class OrderSummary extends Component {
  // This could be a functional component, does not have to be a class
  componentWillUpdate() {
    console.log("[Order Summary] WillUpdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (ingKey) => {
        return (
          <li key={ingKey}>
            <span style={{ textTransform: "capitalize" }}>{ingKey}</span>:
            {this.props.ingredients[ingKey]}
          </li>
        );
      }
    );

    return (
      <Auxiliary>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingreedients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Auxiliary>
    );
  }
}

export default OrderSummary;
