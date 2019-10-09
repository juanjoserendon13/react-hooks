import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    // Initialize the fetch on every call.
    // In case there is already data in the state
    // Hold it until change when fetch is done
    setState(s => ({ data: s.data, loading: true }));
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.text();
      // Set the data fetched into the state
      setState({ data, loading: false });
    }
    fetchData();

  }, [url]);
  // Return the result of the fetch
  return state;
}

export default useFetch;