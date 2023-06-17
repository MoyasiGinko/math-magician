import { useState, useEffect } from 'react';
import './calculator.css';

function Quotes() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const category = 'happiness';
      const apiKey = 'qrOVJthCWFhE/GwGi/MXpQ==SJkvxDMQ1yflwlHZ';
      const url = `https://api.api-ninjas.com/v1/quotes?/category=${category}`;

      try {
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Error loading quote...');
        }

        const jsonData = await response.json();
        setData(jsonData[0]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="prompt-quote">Loading...</p>;
  }

  if (error) {
    return <p className="promptquote">Error loading quote...</p>;
  }

  return (
    <div className="app-quote">
      <div className="quote-container">
        <h1 className="headline">Quote</h1>
        <p className="quote-data">{data.quote}</p>
        <p className="author">{data.author}</p>
      </div>
    </div>
  );
}

export default Quotes;
