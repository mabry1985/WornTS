import React from "react";
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { RouteComponentProps } from 'react-router';
interface MatchParams {
  name: string;
}

interface ShopPageProps extends RouteComponentProps<MatchParams> {
}

const ShopPage = ({ match } : ShopPageProps) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
  );
};

export default ShopPage;
