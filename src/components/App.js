import React from 'react';
import { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleConfirmationClick() {
    setIsConfirmationPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        {/* ----------------------------------------------------- */}
        <PopupWithForm
          title="Редактировать профиль"
          name="edit"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__form-field">
            <input
              type="text"
              name="input-name"
              className="popup__input popup__input_type_name"
              minLength={2}
              maxLength={40}
              required=""
              placeholder="Ввведите имя"
            />
            <span className="popup__form-field-error" />
          </label>
          <label className="popup__form-field">
            <input
              type="text"
              name="input-job"
              className="popup__input popup__input_type_job"
              minLength={2}
              maxLength={200}
              required=""
              placeholder="Ввведите биографию"
            />
            <span className="popup__form-field-error" />
          </label>
        </PopupWithForm>
        {/* -------------------------------------------------------- */}
        <PopupWithForm
          title="Новое место"
          name="add"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__form-field">
            <input
              type="text"
              name="input-title"
              className="popup__input popup__input_type_title"
              placeholder="Название"
              minLength={2}
              maxLength={30}
              required=""
            />
            <span className="popup__form-field-error" />
          </label>
          <label className="popup__form-field">
            <input
              type="url"
              name="input-link"
              className="popup__input popup__input_type_link"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span className="popup__form-field-error" />
          </label>
        </PopupWithForm>
        {/* ---------------------------------------------------------- */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
        {/* --------------------------------------------------------------- */}
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__form-field">
            <input
              type="url"
              name="input-avatar"
              className="popup__input popup__input_type_link"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span className="popup__form-field-error" />
          </label>
        </PopupWithForm>
        {/* ----------------------------------------------------- */}
        <PopupWithForm
          title="Вы уверены?"
          name="confirmation"
          isOpen={isConfirmationPopupOpen}
          onClose={closeAllPopups}
        ></PopupWithForm>
        {/* <div className="popup popup_type_confirmation">
          <div className="popup__container">
            <button className="popup__button-close" type="button" />
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__button-save" type="button">
              Да
            </button>
          </div>
        </div> */}
        {/* -------------------------------------------------------- */}
      </div>
    </div>
  );
}

export default App;
