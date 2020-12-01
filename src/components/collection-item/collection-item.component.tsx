import * as React from "react";
import { connect } from "react-redux";

import CustomButton from "../../components/custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

export interface CollectionItemProps {
  item: any;
  addItem: (item: any) => any;
}

export const CollectionItem: React.FC<CollectionItemProps> = ({
  item,
  addItem,
}) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: any) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
