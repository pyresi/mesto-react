import PopupWithForm from './PopupWithForm';
import { useState } from 'react';
import React from 'react';

function EditAvatarPopup(props) {
  const inputRef = React.useRef(); // записываем объект, возвращаемый хуком, в переменную
  const [avatar, setAvatar] = useState('');

  function handleLinkChange() {
    setAvatar(inputRef.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit(avatar);
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          type="url"
          name="input-avatar"
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку"
          required=""
          ref={inputRef}
          value={avatar}
          onChange={handleLinkChange}
        />
        <span className="popup__form-field-error" />
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
