function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_photo ${props.card ? 'popup_opened' : ''}`}
    >
      <div className="popup__container popup__container_type_photo">
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        />
        <img
          className="popup__photo"
          src={props.card ? props.card.link : ''}
          alt={props.card ? props.card.name : ''}
        />
        <h2 className="popup__photo-subtitle">
          {props.card ? props.card.name : ''}
        </h2>
      </div>
    </div>
  );
}

export default ImagePopup;
