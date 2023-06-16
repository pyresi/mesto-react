function PopupWithForm(props) {
  function handleBackgroundClick(e) {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  }

  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}
      onClick={handleBackgroundClick}
    >
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        <form
          name={`popup-form-${props.name}`}
          className="popup__form"
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button className="popup__button-save" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
