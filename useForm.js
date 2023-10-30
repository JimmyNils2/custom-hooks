import { useState } from 'react';

/**
 * 
 * @param {object} initialForm, Object with the form fields 
  * @returns {object, function} formState object with the form fields as properties and function onInputChange to update the states 
 */
export const useForm = (initialForm = {}) => {

  //Field state of the form
  const [formState, setFormState] = useState(initialForm);

  /**
   * Function to update the state, stored the field values into 
   * @param {e.target} target of event, unstructured property and set the new state
   */
  const onInputChange = ({target}) => {

    const {name, value} = target;
    
    setFormState({
      ...formState,
      [name]: value
    });
  }
  /**
   * Reset the form field to the initial state
   */
  const onResetForm = () => {
    setFormState(initialForm)
  }
  
  return {
    ...formState,
    onInputChange,
    onResetForm
  }
}
