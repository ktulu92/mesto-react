import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "../components/Card";
// import { initialCards } from "../utils/utils";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  // const [userAvatar, setUserAvatar] = React.useState();

  ////////////////////////////////////////////////////////////////

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt={"userAvatar"}
          />
          <div className="profile__layout">
            <button
              className="profile__edit-avatar"
              onClick={props.onEditAvatar}
            ></button>
          </div>
        </div>

        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__title">{currentUser.name}</h1>
            <p className="profile__subtitle">{currentUser.about}</p>
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
        {props.cards.map((card) => {
          console.log(card);

          return (
            <Card
              key={card._id}
              card={card}
              onClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Main;

// React.useEffect(() => {
//   api
//     .getProfileInfo()
//     .then((data) => {
//       setUserName(data.name);
//       setUserInfo(data.about);
//       setUserAvatar(data.avatar);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);
