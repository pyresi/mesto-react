import { useState, useEffect } from 'react';
import { api } from '../utils/Api.js';
// import { initialCards } from '../utils/Utils.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(
          cardsData.map((data) => {
            return {
              likes: data.likes,
              cardId: data._id,
              name: data.name,
              link: data.link,
            };
          })
        );
      })
      .then(() => {
        console.log(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <main className="content">
      {/* ---------------- */}
      {/* -----profile----- */}
      {/* ---------------- */}
      <section className="profile">
        <button
          className="profile__avatar"
          type="button"
          onClick={props.onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        />
        <div className="profile__info">
          <div className="profile__info-box">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={props.onEditProfile}
            />
          </div>
          <h2 className="profile__bio">{userDescription}</h2>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={props.onAddPlace}
        />
      </section>
      {/* ---------------- */}
      {/* -----elements----- */}
      {/* ---------------- */}
      <div className="elements">
        {cards.map((card, i) => (
          <Card key={i} card={card} onCardClick={props.onCardClick} />
        ))}
      </div>
    </main>
  );
}

export default Main;
