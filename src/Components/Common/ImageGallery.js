// ImageGallery.js
import React from 'react';
import './ImageGallery.css'; // Import the CSS file
import HmtKSImg from 'Components/SiteImg/catering/hmt-kingstreet.jpg';
import HmtPourImg from 'Components/SiteImg/catering/hmt-pour.jpg';
import MenuPortrait from 'Components/SiteImg/catering/menu-portrait.jpg';
import MenuWhileServingImg from 'Components/SiteImg/catering/menu-while-serving.jpg';
import PhoebeWeddingImg from 'Components/SiteImg/catering/phoebe-wedding.jpg';
const images = [
    { url: PhoebeWeddingImg, text: 'Our Tailor made menus can make your event extra special' },
    { url: HmtPourImg, text: 'Customized drinks, just like your favorite neighborhood boba shop!' },
    { url: HmtKSImg, text: 'We offer our all natural drinks prebottled for any event setup' },

    // { url: MenuPortrait, text: 'Image 3' },

  // Add more image URLs and text if needed
];

const ImageGallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.url} alt={`Image ${index + 1}`} />
          <div className="overlay">{image.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
