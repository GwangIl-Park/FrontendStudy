import { useState, useEffect } from 'react';
function App() {
  const [loading, setLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoinList(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? '' : coinList.length}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coinList.map((item) => (
          <li key={item.id}>
            {item.name} ({item.symbol}) ${item.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
