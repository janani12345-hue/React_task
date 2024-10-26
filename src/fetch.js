import React, { useEffect, useState } from 'react';

function RetrieveData() {
  const [data, setData] = useState(null);       // To store the fetched data
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state

  useEffect(() => {
    // Start loading when useEffect is called
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);  // Data has been fetched, stop loading
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);  // Stop loading on error
      });
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Fetched Data:</h2>
      {data ? (
        <ul style={{listStyle:"none"}}>
          <li><strong>ID:</strong> {data.id}</li>
          <li><strong>Title:</strong> {data.title}</li>
          <li><strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}</li>
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default RetrieveData;
