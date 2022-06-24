import React from 'react';

interface IProps {
  title: string;
}
const Title: React.FC<IProps> = ({ title }) => (
  <h6 className="fs-18 fw-700 color-secondary">{title}</h6>
);

export default React.memo(Title);
