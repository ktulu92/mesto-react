import React from "react";

function PopupWithForm(props) {
  const { title, name, isOpen, onClose, submitButtonText, children } = props;

  return (
    <section
      className={props.isOpen ? ` pop-up pop-up-${props.name} pop-up_opened`: `pop-up pop-up-${props.name}`}
    >
      <form
        className={`pop-up__container pop-up__form_type_${props.name}`}
        action=""
        method="post"
        name="enter"
        noValidate
      >
        <button
          className="pop-up__close-button pop-up__profile-close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className="pop-up__title">{props.title}</h2>

        {/* Это все будет пропс children */}
        {/* <div className="pop-up__field pop-up__field_type_name">
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
    */}

        {children}
        <button
          className="pop-up__submit-button pop-up__profile-submit-button"
          type="submit"
        >
          {props.submitButtonText}
        </button>
      </form>
      <div className="pop-up__overlay pop-up__overlay_type_profile"></div>
    </section>
  );
}

export default PopupWithForm;
