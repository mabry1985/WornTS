import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import { CollectionPreview } from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

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

export interface CollectionOverviewProps {
  collections?: CollectionType[];
}

const CollectionsOverview = ({ collections }: CollectionOverviewProps) => (
  <div className="collections-overview">
    {collections &&
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
