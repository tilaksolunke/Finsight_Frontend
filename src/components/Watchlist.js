import React from 'react';

function Watchlist() {
  return (
    <section className="watchlist">
      <h3>Your Watchlist</h3>
      <div className="stock-list">
        {/* Render stock items here */}
        <div className="stock-item">
          <h4>TSLA</h4>
          <p>$720.50 <span className="positive">+2.14%</span></p>
        </div>
        <div className="stock-item">
          <h4>GOOGL</h4>
          <p>$2,835.70 <span className="negative">-1.52%</span></p>
        </div>
      </div>
    </section>
  );
}

export default Watchlist;
