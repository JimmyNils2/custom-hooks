import { useState } from 'react';

export const useCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((current) => current + 1);
  }
  //Increase in two
  // const increment = (value = 1) => {
  //     setCounter(counter + value);
  // }

  const reduction = () => {
    //Check counter is greater than 0
    if (counter == 0) return;

    setCounter( (current) => current - 1);
  }

  const reset = () => {
    setCounter(initialValue);
  }

  return {
    counter,
    increment,
    reduction,
    reset
  }
}
