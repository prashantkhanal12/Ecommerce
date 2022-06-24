import React from 'react';

interface IProps {
  title: string;
}
const Heading: React.FC<IProps> = ({ title }) => (
  <h6 className="fs-20 fw-700 color-secondary">{title}</h6>
);

export default React.memo(Heading);
