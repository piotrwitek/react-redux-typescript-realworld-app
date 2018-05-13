import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { models, actions, selectors } from '../';
const { TodosFilter: { All, Active, Completed } } = models;

interface Props {
  currentFilter?: models.TodosFilter;
  changeFilter?: (id: models.TodosFilter) => void;
}

const SEPARATOR = ' | ';
const FILTERS = [All, ' | ', Active, ' | ', Completed];

function TodoFilters({ currentFilter, changeFilter }: Props) {
  return (
    <div>
      {FILTERS.map(
        (filter, idx) =>
          filter === SEPARATOR ? (
            SEPARATOR
          ) : (
            <span
              key={idx}
              onClick={() => changeFilter(filter)}
              style={getStyle(filter === currentFilter)}
            >
              {filter.toString()}
            </span>
          )
      )}
    </div>
  );
}

const getStyle = (active: boolean) => ({
  cursor: 'pointer',
  ...(active
    ? { textDecoration: 'underline', fontWeigth: 'bold' }
    : { opacity: 0.4 }),
});

const mapStateToProps = (state: RootState) => ({
  currentFilter: selectors.getTodosFilter(state.todos),
});

export default connect(mapStateToProps, {
  changeFilter: actions.changeFilter,
})(TodoFilters);
