import { create } from "domain";
import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import {selectCollections} from '../../redux/shop/shop.selectors';

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

export interface ShopPageProps{
  collections?: CollectionType[];
}

const ShopPage = ({ collections }: ShopPageProps) => {
    return (
      <div className="shop-page">
        {collections && collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})

export default connect(mapStateToProps)(ShopPage);
