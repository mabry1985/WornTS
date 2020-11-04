import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import "./menu-item.styles.scss";

export interface MenuItemProps extends RouteComponentProps {
  title: string;
  imageUrl: string;
  size?: string;
  history: any;
  linkUrl: string;
  match: any;
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
