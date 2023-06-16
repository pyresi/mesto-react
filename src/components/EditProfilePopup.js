import PopupWithForm from './PopupWithForm';
import { useState } from 'react';
import React from 'react';
import { userContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // Подписка на контекст
  const context = React.useContext(userContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    if (context.currentUser.name) {
      setName(context.currentUser.name);
    }

    if (context.currentUser.about) {
      setDescription(context.currentUser.about);
    }
  }, [context]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser(name, description);
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={handleNameChange}
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
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__form-field-error" />
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
