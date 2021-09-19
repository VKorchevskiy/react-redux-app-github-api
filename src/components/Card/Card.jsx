import React from "react";
import './Card.css';

const Card = (props) => {
  return <div>
      <button onClick={() => props.history.goBack()} className="button_back">Back</button>
      Card
    </div>;
};

export default Card;
