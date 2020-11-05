import React, { Component } from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

export type CollectionItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type Collection = {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItem[];
};

export interface ShopPageState {
  collections: Collection[];
}

export interface ShopPageProps {}

export default class ShopPage extends Component<ShopPageProps, ShopPageState> {
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
