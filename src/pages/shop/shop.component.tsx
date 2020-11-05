import React, { Component } from 'react'
import SHOP_DATA from './shop.data';

export type CollectionItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export type Collection = {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItem[];
}

export interface ShopPageState {
  collections: Collection[];

}

export interface ShopPageProps {

}

export default class ShopPage extends Component<ShopPageProps, ShopPageState>{
  constructor(props: ShopPageProps){
    super(props)

    this.state = {
      collections: SHOP_DATA,
    }
  }
  render() {
    return (
      <div>
        Shop Page
      </div>
    )
  }
}
