import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { todosModels, todosActions, todosSelectors } from '../';
const {
  TodosFilter: { All, Active, Completed },
} = todosModels;

interface Props {
  currentFilter: todosModels.TodosFilter;
  changeFilter: (id: string) => void;
}

const SEPARATOR = ' | ';
const FILTERS = [All, ' | ', Active, ' | ', Completed];

function TodoFilters({ currentFilter, changeFilter }: Props) {
  const Button = (idx: number, filter: string) => (
    <span
      key={idx}
      onClick={() => changeFilter(filter)}
      style={getStyle(filter === currentFilter)}
    >
      {filter.toString()}
    </span>
  );

  return (
    <div>
      {FILTERS.map(
        (filter, idx) =>
          filter === SEPARATOR ? SEPARATOR : Button(idx, filter)
      )}
    </div>
  );
}

const getStyle = (active: boolean): React.CSSProperties => ({
  cursor: 'pointer',
  ...(active
    ? { textDecoration: 'underline', fontWeight: 'bold' }
    : { opacity: 0.4 }),
});

const mapStateToProps = (state: RootState) => ({
  currentFilter: todosSelectors.getTodosFilter(state.todos),
});

export default connect(mapStateToProps, {
  changeFilter: todosActions.changeFilter,
})(TodoFilters);
