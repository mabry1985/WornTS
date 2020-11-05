import * as React from "react";

import "./collection-preview.styles.scss";
import { CollectionItemType } from "../../pages/shop/shop.component";
import CollectionItem from "../../components/collection-item/collection-item.component";

export interface CollectionPreviewProps {
  title: string;
  items: CollectionItemType[];
}

export const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  items,
}) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, i) => i < 4)
        .map(({id, ...otherItemProps}) => {
          return <CollectionItem key={id} {...otherItemProps} />
        }
        )}
    </div>
  </div>
);

export default CollectionPreview;
