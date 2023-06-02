function ImagePopup() {
  return (
    <div className="popup popup_type_photo">
      <div className="popup__container popup__container_type_photo">
        <button className="popup__button-close" type="button" />
        <img
          className="popup__photo"
          src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
          alt="Байкал"
        />
        <h2 className="popup__photo-subtitle">Байкал</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
