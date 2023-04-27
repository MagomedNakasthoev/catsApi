  import React from "react";

  export const Favorites = ({favoriteData, removeFromFavorite}) => {

    console.log(favoriteData)

    return (
      <section className="favorite-container">
        <h1 className="favorite-image-title">Favorites</h1>
        <div className="favorite-image-grid">
          {favoriteData?.slice(0, 4).map((cat) => (
            <div className="image-button-pair">
              <img key = {cat} className="grid-image" src={cat} alt = 'jj'/>
              <a class="button" href="#" onClick = {() => removeFromFavorite(cat)}>Delete</a>
              
            </div>
          ))}

        </div>
      </section>
    );
  };

  export default Favorites;
