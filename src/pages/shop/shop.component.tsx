import React, { Component } from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

export type CollectionItemType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type CollectionType = {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItemType[];
};

export interface ShopPageState {
  collections: CollectionType[];
}

export interface ShopPageProps {}

export class ShopPage extends Component<ShopPageProps, ShopPageState> {
  constructor(props: ShopPageProps) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
