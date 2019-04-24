import styled from '@emotion/styled/macro';
import { CSSObject } from '@emotion/core';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  /* @description will add spacing between children, work dependinng on row/column layout */
  itemsSpacing?: number;
  direction?: CSSObject['flexDirection'];
  wrap?: CSSObject['flexWrap'];
  justify?: CSSObject['justifyContent'];
  align?: CSSObject['alignItems'];
  grow?: CSSObject['flexGrow'];
  shrink?: CSSObject['flexShrink'];
};

const FlexBox = styled('div')<Props>(
  ({
    itemsSpacing,
    direction: flexDirection,
    justify: justifyContent,
    wrap: flexWrap,
    align: alignItems,
    grow: flexGrow,
    shrink: flexShrink,
  }) => ({
    display: 'flex',
    ...(itemsSpacing != null && {
      '> * + *': {
        [flexDirection === 'row' ? 'marginLeft' : 'marginTop']: itemsSpacing,
      },
    }),
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    flexGrow,
    flexShrink,
  })
);

export default FlexBox as React.FC<Props>;
