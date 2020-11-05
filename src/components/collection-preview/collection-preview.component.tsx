import * as React from "react";

import "./collection-preview.styles.sass";
import { CollectionItem } from "../../pages/shop/shop.component";

export interface CollectionPreviewProps {
  title: string;
  items: CollectionItem[];
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
        .map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
