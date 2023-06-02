import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        {/* ----------------------------------------------------- */}
        <PopupWithForm title={'Редактировать профиль'} name={'edit'}>
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
        <PopupWithForm title={'Новое место'} name={'add'}>
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
        <ImagePopup></ImagePopup>
        {/* --------------------------------------------------------------- */}
        <PopupWithForm title={'Обновить аватар'} name={'avatar'}>
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
        <div className="popup popup_type_confirmation">
          <div className="popup__container">
            <button className="popup__button-close" type="button" />
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__button-save" type="button">
              Да
            </button>
          </div>
        </div>
        {/* -------------------------------------------------------- */}
        <template id="element-template" />
      </div>
    </>
  );
}

export default App;
