import React from 'react';
import { CSSObject } from '@emotion/core';

import FlexBox from './FlexBox';

type Props = React.ComponentProps<typeof FlexBox> & {
  direction?: CSSObject['flexDirection'];
};

export default (props: Props) => <FlexBox direction="row" {...props} />;
