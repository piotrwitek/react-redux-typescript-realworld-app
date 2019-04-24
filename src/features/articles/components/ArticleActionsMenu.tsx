import React from 'react';
import { connect } from 'react-redux';

import { RootState } from 'MyTypes';
import { getPath } from '../../../router-paths';

const mapStateToProps = (state: RootState) => ({});
const dispatchProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

type State = {};

class ArticleActionsMenu extends React.Component<Props, State> {
  render() {
    return (
      <section>
        <a href={getPath('addArticle')}>Create article</a>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  dispatchProps
)(ArticleActionsMenu);
