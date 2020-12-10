import React, { useState, useEffect } from "react";

import logo from "../logo.svg";
// import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [setIsEditAvatarPopupOpen, setAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const profileInputs = (
    <>
      <div className="pop-up__field pop-up__field_type_name">
        <input
          className="pop-up__input pop-up__input_type_name"
          placeholder=""
          required
          minLength="2"
          maxLength="40"
          id="pop-up__input_type_name"
          name="name"
        />
        <span
          className="pop-up__error"
          id="pop-up__input_type_name-error"
        ></span>
      </div>
      <div className="pop-up__field pop-up__field_type_description">
        <input
          className="pop-up__input pop-up__input_type_description"
          placeholder=""
          required
          minLength="2"
          maxLength="200"
          id="pop-up__input_type_description"
          name="description"
        />
        <span
          className="pop-up__error"
          id="pop-up__input_type_description-error"
        ></span>
      </div>
    </>
  );

  const avatarInputs = (
    <>
      <input
        className="pop-up__input pop-up__input_type_avatar-link"
        type="url"
        placeholder="Ссылка на аватар"
        required
        id="pop-up__input_type_avatar-link"
        name="avatar-link"
      />
      <span
        className="pop-up__error"
        id="pop-up__input_type_avatar-link-error"
      ></span>
    </>
  );
  const placeInputs = (
    <>
      <div className="pop-up__field pop-up__field_type_name">
        <input
          className="pop-up__input pop-up__input_type_name"
          placeholder="Название"
          required
          minLength="1"
          maxLength="30"
          id="pop-up__input_type_name"
          name="name"
        />
        <span
          className="pop-up__error"
          id="pop-up__input_type_name-error"
        ></span>
      </div>
      <div className="pop-up__field pop-up__field_type_link">
        <input
          className="pop-up__input pop-up__input_type_image-link"
          type="url"
          placeholder="Ссылка на картинку"
          required
          id="pop-up__input_type_image-link"
          name="link"
        />
        <span
          className="pop-up__error"
          id="pop-up__input_type_image-link-error"
        ></span>
      </div>
    </>
  );

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  return (
    <>
    
      <div className="page__container">
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        {/* попап редактирования профиля */}

        <PopupWithForm
          title="Редактировать профиль"
          name="profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          submitButtonText="Cохранить"
        >
          {profileInputs}
        </PopupWithForm>

        {/* попап редактирования аватара */}

        <PopupWithForm
          title="Обновить аватар"
          name="edit-avatar"
          isOpen={setIsEditAvatarPopupOpen}
          onClose={closeAllPopups}
          submitButtonText="Cохранить"
        >
          {avatarInputs}
        </PopupWithForm>

        {/* попап добавления новой карточки */}

        <PopupWithForm
          title="Новое место"
          name="place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          submitButtonText="Создать"
        >
          {placeInputs}
        </PopupWithForm>

        <Footer />
      </div>
      
    </>
  );
}

export default App;
