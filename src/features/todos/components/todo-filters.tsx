import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { todosModels, todosActions, todosSelectors } from '../';
const {
  TodosFilter: { All, Active, Completed },
} = todosModels;

interface PropsFromState {
  currentFilter: todosModels.TodosFilter;
}

interface PropsFromDispatch {
  changeFilter: (id: string) => void;
}

type Props = PropsFromState & PropsFromDispatch;

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

const mapStateToProps = (state: RootState): PropsFromState => ({
  currentFilter: todosSelectors.getTodosFilter(state.todos),
});

const mapDispatchToProps: PropsFromDispatch = {
  changeFilter: todosActions.changeFilter as (id: string) => void,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilters);
