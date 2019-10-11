import { useEffect, useState, useRef } from 'react';

const useFetch = url => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      // Called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    // Initialize the fetch on every call.
    // In case there is already data in the state
    // Hold it until change when fetch is done
    setState(s => ({ data: s.data, loading: true }));
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.text();
      setTimeout(() => {
        // Set the data fetched into the state
        // Avoid update if its unmounted
        if (isCurrent.current) {
          setState({ data, loading: false });
        }
      }, 100);
    };
    fetchData();
  }, [url, setState]);
  // Return the result of the fetch
  return state;
};

export default useFetch;
