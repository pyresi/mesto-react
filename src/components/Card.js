import { useContext } from 'react';
import { userContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const { currentUser, setCurrentUser } = useContext(userContext);
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <article className="element">
      <img
        className="element__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleCardClick}
      />
      {props.card.owner._id === currentUser._id ? (
        <button
          className="element__trash"
          type="button"
          onClick={handleDeleteClick}
        />
      ) : null}
      <div className="element__description">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button
            className={`element__like && ${isLiked && 'element__like_active'}`}
            type="button"
            onClick={handleLikeClick}
          />
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
