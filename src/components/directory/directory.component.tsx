import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

export type Section = {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
};

export interface DirectoryProps {}

export interface DirectoryProps {
  sections?: Section[];
}

const Directory = ({ sections }: DirectoryProps) => {
  return (
    <div className="directory-menu">
      {sections && sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
