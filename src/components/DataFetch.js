import React, { useEffect, useState } from 'react';
import { useTheme } from '../theme/default_theme';

const DataFetch = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);
  const { screen_colors } = useTheme();

  useEffect(() => {
    // let isMounted = true;

    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/');

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();

        // if (isMounted) {
          setData(payload?.message || 'No message received');
          setError(null);
        // }
      } catch (err) {
        // if (isMounted) {
          setError(err.message || 'Something went wrong');
        // }
      }
    }

    fetchData();

    // return () => {
    //   isMounted = false;
    // };
  }, []);

  return (
    <div style={{backgroundColor: screen_colors}}>
      <h1>{error ? `Error: ${error}` : data}</h1>
    </div>
  );
};

export default DataFetch;