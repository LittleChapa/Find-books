import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={1}
    width={184}
    height={280}
    viewBox="0 0 184 280"
    backgroundColor="#e8e8e8"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="184" height="280" />
  </ContentLoader>
);

export default Skeleton;
