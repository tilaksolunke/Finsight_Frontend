import React from 'react';

function FinancialNews() {
  return (
    <section className="financial-news">
      <h3>Recent Financial News</h3>
      <ul className="news-list">
        {/* Render news items here */}
        <li>
          <a href="#">Tesla's Q2 Earnings Beat Expectations</a>
        </li>
        <li>
          <a href="#">Apple to Unveil New iPhone Model Next Week</a>
        </li>
      </ul>
    </section>
  );
}

export default FinancialNews;
