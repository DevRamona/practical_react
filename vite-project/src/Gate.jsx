import React, { useState, useEffect } from 'react';


function useFetchData(){
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // console.log("Before use effet", URL)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const result = await response.json()
        console.log("The result", result)
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error); 
        setLoading(false);
      }
    }

    fetchData();
  }, [])

  return {data, error, loading}
}

export default useFetchData;