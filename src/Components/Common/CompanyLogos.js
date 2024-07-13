// CompanyLogos.js
import React from 'react';
import './CompanyLogos.css'; // Import the CSS file
import EtsyLogo from 'Components/SiteImg/catering/etsy-logo.png';
import KingstreetLogo from 'Components/SiteImg/catering/kingstreet-logo.jpg';
// Import more company logos as needed

const companies = [
  { url: EtsyLogo, name: 'Etsy Inc' },
  { url: KingstreetLogo, name: 'King Street Capital' },
  // Add more company objects as needed
];

const CompanyLogos = () => {
  return (
    <div className="company-gallery">
      {companies.map((company, index) => (
        <div key={index} className="company-item">
          <img src={company.url} alt={company.name} />
        </div>
      ))}
    </div>
  );
};

export default CompanyLogos;
