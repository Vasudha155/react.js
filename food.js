import React, { useState } from 'react';
import Product from './Product';

const Food = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const YOUR_APP_ID = "0c1164df";
  const YOUR_APP_KEY = "f5465358efc8dae178af989ab1a1a00e";

  const submitHandler = (e) => {
    e.preventDefault();
    setError(null);

    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
      .then(response => response.json())
      .then(data => {
        if (data.hits) {
          setData(data.hits);
        } else {
          setData([]);
        }
      })
      .catch(error => {
        setError(error.message);
        setData([]);
      });
  };

  return (
    <div>
      <center>
        <h4>Food Items</h4>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /><br />
          <input type="submit" value="Search" />
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {data.length > 0 ? <Product data={data} /> : <p>No results found</p>}
      </center>
    </div>
  );
};

export default Food;
