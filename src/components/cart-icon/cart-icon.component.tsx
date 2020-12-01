import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

export interface CartIconProps {
  toggleCartHidden: () => void;
  itemCount: number
}

const CartIcon = ({ toggleCartHidden, itemCount }: CartIconProps) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
