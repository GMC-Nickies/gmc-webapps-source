import React from "react";
import { connect } from "react-redux";

const Card = (props) => {
  const { cards, tableStage } = props;
  if (!cards[0]) return null;
  if (!cards[1]) return null;

  console.log(cards);

  const { value, suit, image } = cards[0];
  const value2 = cards[1].value;
  const suit2 = cards[1].suit;
  const image2 = cards[1].image;

  if (tableStage > 0) {
    return (
      <div>
        <h3> Your hand: </h3>
        <div style={{ display: "inline-block", margin: 10 }}>
          <h3>
            {value} of {suit}
          </h3>
          <img src={image} alt="card-image" />
        </div>
        <div style={{ display: "inline-block", margin: 10 }}>
          <h3>
            {value2} of {suit2}
          </h3>
          <img src={image2} alt="card-image" />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    cards: state.deck.cards,
    tableStage: state.settings.tableStage,
  };
};

export default connect(mapStateToProps)(Card);
