import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      fetch(url, {
        signal: abortController.signal,
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((res) => {
          if (!res.ok) throw Error('Could not fetch the data');
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError('');
          setIsPending(false);
        })
        .catch((err) => {
          if (err.name === 'AbortError') console.log('fetch aborted');
          else {
            setIsPending(false);
            setData(null);
            setError(err.message);
          }
        });
    }, 1000);
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, isPending, error };
}
