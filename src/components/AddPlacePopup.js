import PopupWithForm from './PopupWithForm';
import { useState } from 'react';
import React from 'react';

function AddPlacePopup(props) {
  const linkRef = React.useRef();
  const [link, setLink] = useState('');

  const nameRef = React.useRef();
  const [name, setName] = useState('');

  function handleLinkChange() {
    setLink(linkRef.current.value);
  }

  function handleNameChange() {
    setName(nameRef.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit(name, link);
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
          ref={nameRef}
          value={name}
          onChange={handleNameChange}
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
          ref={linkRef}
          value={link}
          onChange={handleLinkChange}
        />
        <span className="popup__form-field-error" />
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
