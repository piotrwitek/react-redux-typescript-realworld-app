import { RootState } from 'MyTypes';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPath } from '../../../router-paths';

const mapStateToProps = (state: RootState) => ({});
const dispatchProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

type State = {};

class ArticleActionsMenu extends React.Component<Props, State> {
  render() {
    return (
      <section>
        <Link to={getPath('addArticle')}>Create article</Link>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  dispatchProps
)(ArticleActionsMenu);
