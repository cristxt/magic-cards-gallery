import axios from 'axios'; 
import React, { useState, useEffect } from 'react';
import "./Card.css";
const ShowMagicInfo = () => {
  const [cards, setcards] = useState ([]);
  useEffect (() => { 
      getAllcards()
  },[])
  
  async function getAllcards () {
      const response = await axios.get ('https://api.magicthegathering.io/v1/cards')
      console.log (response.data.cards);
      setcards (response.data.cards);
  }  
  console.log(cards)
  return (
    <div className="magic-card-container">
      
      {cards.map (card => (
          <div key={card.cmc}>
          <div className="magic-card">
            <div className="image">
              <img src={card.imageUrl}/>
              </div>
            <p className="name">{card.name}</p>
            <p className="type"> {card.type}</p>
            <p className="text"> {card.text}</p>
          </div>
          </div>
        
      ))}
      
    </div>
  )
};

  
export default ShowMagicInfo;