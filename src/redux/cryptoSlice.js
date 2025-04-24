import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 45000, change1h: 0.5, change24h: 1.2, change7d: -2.3, marketCap: 850000000000, volume24h: 30000000000, supply: 18750000, maxSupply: 21000000 },
    { id: 2, name: 'Ethereum', symbol: 'ETH', price: 3000, change1h: -0.3, change24h: 0.8, change7d: 3.1, marketCap: 350000000000, volume24h: 15000000000, supply: 116000000, maxSupply: null },
    { id: 3, name: 'Tether', symbol: 'USDT', price: 1, change1h: 0.0, change24h: 0.0, change7d: 0.0, marketCap: 60000000000, volume24h: 50000000000, supply: 60000000000, maxSupply: null },
    { id: 4, name: 'Ripple', symbol: 'XRP', price: 0.8, change1h: 0.2, change24h: -1.5, change7d: 4.2, marketCap: 35000000000, volume24h: 2000000000, supply: 46000000000, maxSupply: 100000000000 },
    { id: 5, name: 'Solana', symbol: 'SOL', price: 150, change1h: 1.0, change24h: 2.5, change7d: -1.8, marketCap: 40000000000, volume24h: 1000000000, supply: 300000000, maxSupply: null },
  ],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrice: (state, action) => {
      const { id, price, change1h, change24h, change7d, volume24h } = action.payload;
      const asset = state.assets.find(asset => asset.id === id);
      if (asset) {
        asset.price = price;
        asset.change1h = change1h;
        asset.change24h = change24h;
        asset.change7d = change7d;
        asset.volume24h = volume24h;
      }
    },
  },
});

export const { updatePrice } = cryptoSlice.actions;
export const selectAssets = (state) => state.crypto.assets;
export default cryptoSlice.reducer;