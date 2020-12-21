import React from "react";
import {useRef} from "react";
import PopupWithForm from "./PopupWithForm";




export default function EditAvatarPopup (props){
  const AvatarRef = useRef('');

  function handleSubmit(e) {
    e.preventDefault()
    props.onUpdateAvatar({
      avatar: AvatarRef.current.value})
    
  }


  





return(
<PopupWithForm


          title="Обновить аватар"
          name="edit-avatar"
          isOpen={props.isOpen}
          onClose={props.onClose}
          submitButtonText="Cохранить"
          onSubmit={handleSubmit}
        >
        
  
      <input
        className="pop-up__input pop-up__input_type_avatar-link"
        type="url"
        placeholder="Ссылка на аватар"
        required
        id="pop-up__input_type_avatar-link"
        name="avatar-link"
        ref={AvatarRef}
      />
      <span
        className="pop-up__error"
        id="pop-up__input_type_avatar-link-error"
      ></span>

 
 
        </PopupWithForm>)
        }