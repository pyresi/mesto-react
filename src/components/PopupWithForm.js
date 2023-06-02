function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button className="popup__button-close" type="button" />
        <h2 className="popup__title">{props.title}</h2>
        <form name={`popup-form-${props.name}`} className="popup__form">
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
