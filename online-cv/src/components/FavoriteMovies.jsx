import React from "react";

const FavoriteMovies = () => {
  const FavoriteMovies = ["Star wars", "Star wars", "Star wars"];
  return (
    <ul>
      {FavoriteMovies.map((favoriteMovie, index) => (
        <li key={index}>{favoriteMovie}</li>
      ))}
    </ul>
  );
};

export default FavoriteMovies;
