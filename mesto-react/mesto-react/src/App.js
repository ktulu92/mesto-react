import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
// import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ImagePopup from "./components/ImagePopup";
import PopupWithForm from "./components/PopupWithForm";


function App() {
  const [isEditProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = useState(false);
  const [selectedCard,setSelectedCard]=useState(null)




const profileInputs = 
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
     >
     </span>
   </div>
   </>


const avatarInputs = 
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

const placeInputs = 

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



  function handleEditProfileClick() {
    setProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setAvatarPopupOpen(true);
  }

   function handleAddPlaceClick() {
    setPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setProfilePopupOpen(false);
    setPlacePopupOpen(false);
    setAvatarPopupOpen(false);
    setSelectedCard(null)
  }



  function handleCardClick(card) {
    setSelectedCard(card)

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

<ImagePopup card={selectedCard} onClose = {closeAllPopups} />

        {/* попап редактирования профиля */}

        <PopupWithForm
          title="Редактировать профиль"
          name="profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          submitButtonText="Cохранить"
          children={profileInputs}
        />
        {/* попап редактирования аватара */}

        <PopupWithForm
          title="Обновить аватар"
          name="edit-avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          submitButtonText="Cохранить"
          children={avatarInputs}
          
        />

        {/* попап добавления новой карточки */}

        <PopupWithForm
          title="Новое место"
          name="place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          submitButtonText="Создать"
          children={placeInputs}
        />

{/* /////////////////////////////////////////////////////////////////попап открытия галереи */}



        {/* <section className="pop-up pop-up-profile">
 <form
   className="pop-up__container pop-up__form_type_profile"
   action=""
   method="post"
   name="enter"
   novalidate
   
 >
   <button
     className="pop-up__close-button pop-up__profile-close-button"
     type="button"
   ></button>
   <h2 className="pop-up__title">Редактировать профиль</h2>
   <div className="pop-up__field pop-up__field_type_name">
     <input
       className="pop-up__input pop-up__input_type_name"
       placeholder=""
       required
       minlength="2"
       maxlength="40"
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
       minlength="2"
       maxlength="200"
       id="pop-up__input_type_description"
       name="description"
     />
     <span
       className="pop-up__error"
       id="pop-up__input_type_description-error"
     >
     </span>
   </div>

   <button
     className="pop-up__submit-button pop-up__profile-submit-button"
     name="Сохранить"
     type="submit"
   >
     Сохранить
   </button>
 </form>
 <div className="pop-up__overlay pop-up__overlay_type_profile"></div>
</section>


<section className= "pop-up pop-up-confirm" >
 <form className="pop-up__container pop-up__form_type_confirm">
 <button className="pop-up__close-button pop-up__confirm-close-button"
 type="button"
 ></button>
 <h2 className="pop-up__title">Вы уверены?</h2>

 <button className="pop-up__submit-button popup__confirm-button">Да</button>
 

 </form>
<div className="pop-up__overlay "></div>
</section>


<section className="pop-up pop-up-place">
 <form className="pop-up__container pop-up__form_type_place" novalidate>
   <button
     className="pop-up__close-button pop-up__place-close-button"
     type="button"
   ></button>
   <h2 className="pop-up__title">Новое место</h2>
   <div className="pop-up__field pop-up__field_type_name">
     <input
       className="pop-up__input pop-up__input_type_name"
       placeholder="Название"
       required
       minlength="1"
       maxlength="30"
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
   <button
     className="pop-up__submit-button pop-up__place-submit-button"
     name="Сохранить"
     type="submit"
   >
    Создать
   </button>
 </form>
 <div className="pop-up__overlay pop-up__overlay_type_place"></div>
</section> */}

     

        {/* <section className= "pop-up pop-up__edit-avatar">
 <form className="pop-up__container pop-up__form_type_edit-avatar" novalidate>
   <button className="pop-up__close-button pop-up__image-close-button"
 ></button>
 <h2 className="pop-up__title">Обновить аватар</h2>
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
<button className=" pop-up__submit-button popup__edit-avatar-button">Сохранить</button>

 </form>
 <div className="pop-up__overlay pop-up__overlay_type_avatar"></div>       

</section>   */}

        <Footer />
      </div>
    </>
  );
}

export default App;
