import React from "react";

function Card(props) {
  function handleClick(){
    props.onClick(props.card)

  }
  



    return (
        
      <div className="template-element">
        <li className="element">
          <button className="element__delete-button"></button>
          <img className="element__image" src={props.card.url} alt={props.card.name} onClick={handleClick}/>
          <div className="element__info">
            <h2 className="element__title">{props.card.name}</h2>
            <div className="element__like-container">
              <button className="element__like-button"></button>
              <p className="element__like-count">{props.card.likes.length}</p>
            </div>
          </div>
        </li>
      </div>
      
    );
  
}

export default Card;
