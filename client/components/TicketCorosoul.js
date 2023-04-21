import React from 'react';
import { Carousel } from 'react-snap-carousel';
// import 'react-snap-carousel/lib/styles.css';

export default function TicketCorosoul({ images }) {
  const renderCustomItem = ({ item, index }) => (
    <div key={index} style={{ margin: '10px', width: '250px' }}>
      <img
        src={item.image}
        alt={`Image ${index}`}
        style={{ width: '100%', borderRadius: '10px', height: '60px' }}
      />
      <p style={{ textAlign: 'center', margin: '0', fontWeight: 'bold' }}>
        {item.name}
      </p>
    </div>
  );

  return (
    <Carousel
      items={images}
      renderItem={renderCustomItem}
      showArrows={true}
      showThumbs={false}
      slidesToShow={4}
      containerWidth="100%"
      itemWidth={250}
    />
  );
}
