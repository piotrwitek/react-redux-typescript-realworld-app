import React from 'react';
import areEqual from 'fast-deep-equal';

import { Link } from 'react-router-dom';

interface Props {}

const BackLink = React.memo<Props>(() => {
  return (
    <Link to="/" className="link">
      {'< Back'}
    </Link>
  );
}, areEqual);

export default BackLink;
