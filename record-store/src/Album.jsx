import React from "react";
import IonIcon from "@reacticons/ionicons";

function Album( { record, favourites, handleFavClick} ) {

    return(
              <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
                <img src= { record.artworkUrl} className="w-full h-64 object-cover" />
  
                <div className="p-2">
                  <h3 className="font-semibold">{  record.title} by { record.artist }</h3>
                  <p>${ record.price.toFixed(2) }</p>
                  <button className="text-red-500"onClick={ () => {
                        handleFavClick(record.id);
                    }} >
                    { favourites.includes(record.id) ? <IonIcon name="heart" /> : <IonIcon name="heart-outline" /> }
                  </button>
                  </div>
                </div>
    );

}

export default Album;