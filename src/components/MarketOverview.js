import React from 'react';

function MarketOverview() {
  return (
    <section className="market-overview">
      <h3>Market Overview</h3>
      <div className="market-stats">
        <div className="stat-item">
          <h4>S&P 500</h4>
          <p>4,500.50 <span className="positive">+1.25%</span></p>
        </div>
        <div className="stat-item">
          <h4>NASDAQ</h4>
          <p>13,600.70 <span className="negative">-0.85%</span></p>
        </div>
        {/* Add more market stats here */}
      </div>
    </section>
  );
}

export default MarketOverview;
