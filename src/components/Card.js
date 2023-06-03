export default function Card(props) {
  return (
    <article className="element">
      <img
        className="element__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={() => {
          props.onCardClick(props.card);
        }}
      />
      <button className="element__trash" type="button" />
      <div className="element__description">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button" />
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

// export default Card;
