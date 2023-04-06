import classNames from 'classnames';
import '../styles/todo.scss';
import { Todo } from '../types/Todo';

type Props = {
  todo: Todo,
  removeTodo: (value: number) => void,
  isLoading: boolean,
};

export const TodoItem: React.FC<Props> = ({ todo, removeTodo, isLoading }) => {
  return (
    <div className={classNames(
      'todo',
      { completed: todo.completed },
    )}
    >
      <label className="todo__status-label">
        <input
          type="checkbox"
          className="todo__status"
        />
      </label>
      <span className="todo__title">{todo.title}</span>
      <button
        type="button"
        className="todo__remove"
        onClick={() => removeTodo(todo.id)}
      >
        ×
      </button>
      <div
        className={classNames(
          'modal overlay',
          { 'is-active': isLoading },
        )}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};
