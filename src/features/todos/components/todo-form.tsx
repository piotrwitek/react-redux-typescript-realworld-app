import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { actions } from '../';

type Props = {
  addTodo: (title: string) => any;
};
type State = {
  title: string;
};

class TodoForm extends React.Component<Props, State> {
  readonly state: Readonly<State> = { title: '' };

  handleTitleChange: React.ReactEventHandler<HTMLInputElement> = ev => {
    this.setState({ title: ev.currentTarget.value });
  };

  handleAdd = () => {
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;

    return (
      <form>
        <input
          type="text"
          placeholder="Enter new todo"
          value={title}
          onChange={this.handleTitleChange}
        />
        &nbsp;
        <button type="button" onClick={this.handleAdd} disabled={!title}>
          Add
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state: RootState) => ({});

export default connect(mapStateToProps, {
  addTodo: (title: string) => actions.add({ title }),
})(TodoForm);
