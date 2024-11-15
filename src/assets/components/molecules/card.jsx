import axios from 'axios'; 
import React, { useState, useEffect } from 'react';

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
    <>
      {cards.map (card => (
          <div key={card.cmc}>
            <p>{card.name}</p>
            <p>Type: {card.type}</p>
            <p>text: {card.text}</p>
          </div>
      ))}
    </>
  )
};

  
export default ShowMagicInfo;