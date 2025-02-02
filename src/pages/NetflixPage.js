import React from 'react';
import './NetflixPage.css';

const NetflixPage = () => {
  return (
    <div className="netflixPage">
      <div className="banner">
        <img
          className="banner-img"
          src="https://tse4.mm.bing.net/th?id=OIP.h-rYIW6O6hy_pM7khZl6ugHaEK&pid=Api&P=0&h=180"
          alt="Netflix"
        />
      </div>
      <div className="movie-list">
        
        <div className="movie-item">
          <img
            className="movie-img"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/61da8438155793.57575971afe13.jpg"
            alt="movie"
          />
        </div>
        <div className="movie-item">
          <img
            className="movie-img"
            src="https://i2.wp.com/www.newsbugz.com/wp-content/uploads/2021/05/jr-ntr-RRR-movie-scaled.jpg?resize=1075%2C1536&ssl=1"
            alt="movie"
          />
        </div>
        <div className="movie-item">
          <img
            className="movie-img"
            src="https://assets.gadgets360cdn.com/pricee/assets/product/202301/Animal_1673270841.jpg"
            alt="movie"
          />
        </div>
        <div className="movie-item">
          <img
            className="movie-img"
            src="https://assets.website-files.com/5bf1c2ccde18dd05bd430ccc/5bf1c32c017c21412909f273_598191033fd40e0001129b77_horror-blog-conjuring.jpeg"
            alt="movie"
          />
        </div>
      </div>
    </div>
  );
};

export default NetflixPage;