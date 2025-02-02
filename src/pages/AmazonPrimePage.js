import React from 'react';
import './AmazonPrimePage.css';

const AmazonPrimePage = () => {
  return (
    <div className="amazonPrimePage">
      <div className="banner">
        <img
          className="banner-img"
          src="https://wallpaperaccess.com/full/7824760.jpg"
          alt="Amazon Prime"
        />
      </div>
      <div className="movie-list">
        
        <div className="movie-item">
          <img
            className="movie-img"
            src="https://th.bing.com/th/id/R.fdcfdf6f698d0bda3c6a932f0e0b78f8?rik=wRLL8zM6Sts7jg&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f37%2f0%2fGb6ZxX.jpg&ehk=kN%2fbCooIJHoQGwM0rnIwrcRVMI8dIJTshqSjbuBP6LY%3d&risl=&pid=ImgRaw&r=0"
            alt="movie"
          />
        </div>
        <div className="movie-item">
          <img
            className="movie-img"
            src="https://th.bing.com/th/id/OIP.KNXuZ7CI-z-jWBSXewq20wHaGL?rs=1&pid=ImgDetMain"
            alt="movie"
          />
        </div>
        <div className="movie-item">
          <img
            className="movie-img"
            src="https://hips.hearstapps.com/hmg-prod/images/best-new-horror-movies-2023-teen-wolf-the-movie-1670006031.jpg"
            alt="movie"
          />
        </div>
        <div className="movie-item">
          <img
            className="movie-img"
            src="https://static.toiimg.com/photo/msid-79531202/79531202.jpg?460012"
            alt="movie"
          />
        </div>
      </div>
    </div>
  );
};

export default AmazonPrimePage;