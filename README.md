Crypto Price Tracker

A React-based application designed to track the prices of major cryptocurrencies such as Bitcoin, Ethereum, Tether, Ripple, and Solana. The app features simulated real-time price updates and a responsive table layout for both desktop and mobile users.

Project Overview

This project is a cryptocurrency price tracking application developed as part of an assignment to demonstrate proficiency in React, Redux, and front-end development. The app simulates real-time price updates for five popular cryptocurrencies by randomly adjusting prices every 1.5 seconds using dummy data. It includes a responsive table layout with cryptocurrency logos and placeholders for 7-day charts.

Features

Displays prices for five cryptocurrencies: Bitcoin (BTC), Ethereum (ETH), Tether (USDT), Ripple (XRP), and Solana (SOL).
Simulated real-time price updates every 1.5 seconds using random fluctuations.
Responsive table design that stacks vertically on mobile devices for better readability.
Includes cryptocurrency logos for visual appeal.
Tracks additional metrics such as 1h, 24h, and 7d price changes, market cap, 24h volume, circulating supply, and max supply.
Color-coded percentage changes (green for positive, red for negative) with up/down arrows.

Setup Instructions
Follow these steps to run the project locally:

Clone the Repository:
git clone https://github.com/AyushVishu15/Crypto-price-tracker.git

Navigate to the Project Directory:
cd Crypto-price-tracker

Install Dependencies:
npm install

Start the Development Server:
npm start

View the App:
Open your browser and go to http://localhost:3000.

Technologies Used

React: For building the user interface and managing component state.
Redux: For global state management of cryptocurrency data.
React-Redux: To connect Redux with React components.
@reduxjs/toolkit: For simplified Redux setup with slices and reducers.
CSS: For styling the table and ensuring responsiveness across devices.
Git: For version control and collaboration.
GitHub: For hosting the repository and project documentation.

Project Structure
src/App.js: Main component rendering the cryptocurrency table and handling price updates.
src/redux/cryptoSlice.js: Redux slice managing the state of cryptocurrency assets and price updates.
src/redux/store.js: Redux store configuration.
src/index.css: Global styles for the app, including responsive design.
public/img/: Directory containing cryptocurrency logos.

Challenges Faced

Simulating Real-Time Updates: Implementing a timer to simulate price updates every 1.5 seconds required careful handling to avoid memory leaks, which was addressed using useEffect cleanup.
Responsive Design: Ensuring the table layout was readable on mobile devices involved using CSS media queries to stack columns vertically.
Redux Integration: Initial errors with Redux selectors (e.g., selectAssets not exported) required debugging export statements and ensuring proper imports.
Git Conflicts: Uploading to GitHub was challenging due to conflicts with README.md, which were resolved by prioritizing the remote version and syncing histories.

Future Improvements
Integrate a real-time API (e.g., CoinGecko or Binance API) for live cryptocurrency data instead of simulated updates.
Add sorting and filtering options (e.g., by price, 24h change, or market cap).
Implement local storage to persist user preferences or data between sessions.
Add interactive 7-day price charts using a library like Chart.js.
Include unit tests with Jest to ensure code reliability.

Screenshots

![image](https://github.com/user-attachments/assets/f85b0d6d-eb91-4a5b-9e21-67833abb44fa)

Video
https://www.loom.com/share/2d5e8402998948e784d0ce5b6dc95e22?sid=2632883a-c314-4dcf-b554-3e51e509520b
