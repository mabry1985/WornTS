import * as React from "react";

import "./collection-preview.styles.scss";
import { CollectionItemType } from "../../pages/shop/shop.component";
import CollectionItem from "../collection-item/collection-item.component";

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
        .map((item) => {
          return <CollectionItem key={item.id} item={item} />
        }
        )}
    </div>
  </div>
);

export default CollectionPreview;
