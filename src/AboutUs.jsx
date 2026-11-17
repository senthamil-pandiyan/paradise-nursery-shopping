import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">Welcome to Paradise Nursery, where nature comes to life!</p>
      <p className="about-us-content">
          Paradise Nursery is an online store where customers can browse and purchase a variety of indoor and outdoor plants.
          The application provides an easy shopping experience, allowing users to explore plants, add items to their cart, and manage their purchases.
      </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
          We are passionate about bringing nature closer to you by offering healthy, beautiful, and carefully selected plants.
          Every plant in our nursery is chosen with quality and care in mind. Whether you're an experienced plant lover or beginning your gardening journey,
          we're here to help you choose the perfect plants to brighten your home, garden, or office.
      </p>
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

      <p className="about-us-content">
          Join us in creating a greener, healthier world. Discover Paradise Nursery today and bring the beauty and freshness of nature right to your doorstep.
      </p>
    </div>
  );
}

export default AboutUs;
