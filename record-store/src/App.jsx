import React, { useState } from "react";
import Album from "./Album.jsx";

const DEFAULT_RECORDS = [
  {
      id: 1,
      title: "De La Soul is Dead",
      artist: "De La Soul",
      price: 19.99,
      artworkUrl: "https://upload.wikimedia.org/wikipedia/en/b/b3/De_La_Soul_Is_Dead.png?20230921165822"
  },
  {
      id: 2,
      title: "Illmatic",
      artist: "Nas",
      price: 22.99,
      artworkUrl: "https://upload.wikimedia.org/wikipedia/en/2/27/IllmaticNas.jpg"
  },
  {
      id: 3,
      title: "The Miseducation of Lauryn Hill",
      artist: "Lauryn Hill",
      price: 24.99,
      artworkUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/The_Miseducation_of_Lauryn_Hill.png/220px-The_Miseducation_of_Lauryn_Hill.png"
  }
];

function App() {

  const [records, setRecords] = useState(DEFAULT_RECORDS);

  const [faves, setFaves] = useState([]);

  const handleFavClick = (albumID) => {
    // If this is false, add the item to the favs
    //    If not, remove it
    if(faves.includes(albumID)) {
      // filter = will go thorugh the favs one by one, if the equation returns false it will keep it
      //   if it is true it will removve it
      const newFaves = faves.filter( (singleFav) => {
        return albumID !== singleFav;
      });
         
      setFaves(newFaves);

    } else {
      // ... = spread opperator, this will spread out the item 
      setFaves([...faves,albumID]);

    }
  }

  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-800 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white mb-8"> Great Hip-Hop Records </h1>

      <div className="grid grid-cols-3 gap-6">
        { records.map( (singleRecord) => {

          return (
            <Album key={singleRecord.id} record={singleRecord} favourites={faves} handleFavClick={handleFavClick} /> 
          );

        })}
      </div>
    </div>
  )
}

export default App
