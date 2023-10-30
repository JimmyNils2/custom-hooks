import { useReducer, useEffect } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

/**
 * Get todos in local storage
 * @returns  todos or empty array
 */
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

  /**
   * Array with object structure of a todo
   */
  const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: 'title',
    //   done: false
    // }
  ];


  const [ todos, dispatchTodo ] = useReducer(todoReducer, initialState, init);

  /**
   * Set effect to save todos into the local storage when the todos changes
   */
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  /**
   * Invoke the dispatch with the case Add todo
   * @param {Object} newTodo
   */
  const handleNewTodo = (newTodo) => {
    const action = {
      type: 'Add todo',
      payload: newTodo
    }
    dispatchTodo(action);
  }

  /**
   * Invoke the dispatch with the case Toggle todo
   * @param {String} id 
   */
  const handleToggleTodo = (id) => {
    const action = {
      type: 'Toggle todo',
      payload: id
    }
    dispatchTodo(action);
  }

  /**
   * Invoke the dispatch with the case Remove todo
   * @param {String} id 
   */
  const handleRemoveTodo = (id) => {
    dispatchTodo({
      type: 'Remove todo',
      payload: id
    })
  }

  const allTodosCounter = () => {
    return todos.length
  }

  const pendingTodosCounter = () => {
    return todos.filter( todo => !todo.done).length
  }

  return {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    allTodosCounter,
    pendingTodosCounter
  }
}
