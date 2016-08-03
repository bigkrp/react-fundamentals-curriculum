import React, {PropTypes} from 'react';

export const Detail = (props) =>
  <div className="detail-wrapper">
    <h1 className="detail__title">{props.city}</h1>
  </div>;

Detail.propTypes = {
  city: PropTypes.string.isRequired
};
