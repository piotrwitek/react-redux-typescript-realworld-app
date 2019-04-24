import React, { useCallback } from 'react';
import areEqual from 'fast-deep-equal';
import { useDispatch } from 'redux-react-hook';

import actions from '../store/root-action';

interface Props {}

const BackLink = React.memo<Props>(() => {
  const dispatch = useDispatch();
  const goBack = useCallback(
    (ev: any) => {
      ev.preventDefault();
      return dispatch(actions.router.goBack());
    },
    [dispatch]
  );

  return (
    <a
      href={'disabled'}
      onClick={goBack}
      style={{ color: 'darkred', float: 'right', cursor: 'pointer' }}
    >
      {'< Back'}
    </a>
  );
}, areEqual);

export default BackLink;
