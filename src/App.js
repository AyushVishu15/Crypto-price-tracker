import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePrice, selectAssets } from './redux/cryptoSlice';

const App = () => {
  const dispatch = useDispatch();
  const assets = useSelector(selectAssets);

  useEffect(() => {
    const interval = setInterval(() => {
      assets.forEach(asset => {
        const randomChange = Number((Math.random() * 2 - 1).toFixed(2));
        const currentPrice = Number(asset.price);
        const currentChange1h = Number(asset.change1h);
        const currentChange24h = Number(asset.change24h);
        const currentChange7d = Number(asset.change7d);
        const currentVolume24h = Number(asset.volume24h);

        if (
          isNaN(currentPrice) || isNaN(currentChange1h) ||
          isNaN(currentChange24h) || isNaN(currentChange7d) ||
          isNaN(currentVolume24h) || isNaN(randomChange)
        ) {
          console.error('Invalid number detected:', { currentPrice, currentChange1h, currentChange24h, currentChange7d, currentVolume24h, randomChange });
          return;
        }

        dispatch(updatePrice({
          id: asset.id,
          price: currentPrice + randomChange * 100,
          change1h: (currentChange1h + randomChange).toFixed(2),
          change24h: (currentChange24h + randomChange).toFixed(2),
          change7d: (currentChange7d + randomChange).toFixed(2),
          volume24h: currentVolume24h + Math.floor(Math.random() * 1000000)
        }));
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [dispatch, assets]);

  return (
    <div className="container">
      <h1 className="title">Crypto Price Tracker</h1>
      <div className="table-wrapper">
        <table className="crypto-table">
          <thead>
            <tr className="table-header">
              <th>#</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>1h %</th>
              <th>24h %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>Volume(24h)</th>
              <th>Circulating Supply</th>
              <th>Max Supply</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {assets.map(asset => (
              <tr key={asset.id} className="table-row">
                <td>{asset.id}</td>
                <td className="name-cell">
                  {asset.symbol === 'BTC' && <img src="/img/Bitcoin.svg.webp" alt="BTC logo" className="crypto-logo" onError={(e) => e.target.src = '/img/default.png'} />}
                  {asset.symbol === 'ETH' && <img src="/img/Eth-diamond-rainbow.png" alt="ETH logo" className="crypto-logo" onError={(e) => e.target.src = '/img/default.png'} />}
                  {asset.symbol === 'USDT' && <img src="/img/tether-usdt-logo.png" alt="USDT logo" className="crypto-logo" onError={(e) => e.target.src = '/img/default.png'} />}
                  {asset.symbol === 'XRP' && <img src="/img/images.png" alt="XRP logo" className="crypto-logo" onError={(e) => e.target.src = '/img/default.png'} />}
                  {asset.symbol === 'SOL' && <img src="/img/Solana_logo.png" alt="SOL logo" className="crypto-logo" onError={(e) => e.target.src = '/img/default.png'} />}
                  {!['BTC', 'ETH', 'USDT', 'XRP', 'SOL'].includes(asset.symbol) && <img src="/img/default.png" alt="Default logo" className="crypto-logo" />}
                  <span className="crypto-name">{asset.name}</span>
                </td>
                <td className="crypto-symbol">{asset.symbol}</td>
                <td>${Number(asset.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td className={Number(asset.change1h) >= 0 ? 'positive' : 'negative'}>
                  {Number(asset.change1h) >= 0 ? '▲' : '▼'} {Math.abs(asset.change1h)}%
                </td>
                <td className={Number(asset.change24h) >= 0 ? 'positive' : 'negative'}>
                  {Number(asset.change24h) >= 0 ? '▲' : '▼'} {Math.abs(asset.change24h)}%
                </td>
                <td className={Number(asset.change7d) >= 0 ? 'positive' : 'negative'}>
                  {Number(asset.change7d) >= 0 ? '▲' : '▼'} {Math.abs(asset.change7d)}%
                </td>
                <td>${Number(asset.marketCap).toLocaleString()}</td>
                <td>${Number(asset.volume24h).toLocaleString()}</td>
                <td>{Number(asset.supply).toLocaleString()} {asset.symbol}</td>
                <td>{asset.maxSupply ? Number(asset.maxSupply).toLocaleString() : 'N/A'}</td>
                <td>
                  <img src="/img/image6-2022071212110741.png" alt="7D Chart" className="chart-image" onError={(e) => e.target.src = '/img/default_7d.png'} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;