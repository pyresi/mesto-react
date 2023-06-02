function Main() {
  return (
    <main className="content">
      {/* ---------------- */}
      {/* -----profile----- */}
      {/* ---------------- */}
      <section className="profile">
        <button
          className="profile__avatar"
          type="button"
          onClick={handleEditAvatarClick}
        />
        <div className="profile__info">
          <div className="profile__info-box">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={handleEditProfileClick}
            />
          </div>
          <h2 className="profile__bio">Исследователь океана</h2>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={handleAddPlaceClick}
        />
      </section>
      {/* ---------------- */}
      {/* -----elements----- */}
      {/* ---------------- */}
      <div className="elements"></div>
    </main>
  );
}

function handleEditAvatarClick() {
  document.querySelector('.popup_type_avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
  document.querySelector('.popup_type_edit').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup_type_add').classList.add('popup_opened');
}

export default Main;
