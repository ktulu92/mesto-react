import { render } from "@testing-library/react";
import React from "react";
import api from "../utils/api";
import Card from "../components/Card";
// import { initialCards } from "../utils/utils";

function Main(props) {
  const [userName, setUserName] = React.useState("Имя пользователя");
  const [userInfo, setUserInfo] = React.useState("Информация о пользователе");
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((data) => {
        setUserName(data.name);
        setUserInfo(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  ////////////////////////////////////////////////////////////////

  React.useEffect(() => {
    api.getInitialCards().then((cards) => {
      const initialCards = cards.map((card) => {
        return {
          id: card._id,
          url: card.link,
          name: card.name,
          likes: card.likes,
        };
      });
      setCards(initialCards);
      ////////////////////////////////////////////////////
    });
  }, []);

  return (
    
    <main className="content">
      <section className="profile">
        
        <div className="profile__container">
          <img className="profile__avatar" src={userAvatar} alt= {'userAvatar'} />
          <div className="profile__layout">
            <button
              className="profile__edit-avatar"
              onClick={props.onEditAvatar}
            ></button>
          </div>
        </div>

        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userInfo}</p>
          </div>
          <button
            className="profile__edit-button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <ul className="elements">
        {cards.map((card) => {
          return (<Card key={card.id} card={card} onClick={props.onCardClick} />);
        })}
      </ul>
    </main>
  );
}

export default Main;
