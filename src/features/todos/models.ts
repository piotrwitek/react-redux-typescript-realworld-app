export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export enum TodosFilter {
  All = 'all',
  Completed = 'completed',
  Active = 'active',
}
