import { useEffect, useState } from 'react';

/**
 * Handle HTTP request
 * @param {string} url 
 * @returns 
 */
export const useFetch = (url) => {


  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  /**
   * Send a http request and log the response
   */
  const getFetch = async () => {

    setState({
      ...state,
      isLoading: true
    });

    //Get the response form http request
    const resp = await fetch(url);
    //Convert the response to JSON
    const data = await resp.json();

    // console.log(data);

    setState({
      data,
      isLoading: false,
      hasError: null
    })
  }

  useEffect(() => {
    getFetch();
  }, [url]);


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}