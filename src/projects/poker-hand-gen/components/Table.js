import React from "react";
import { connect } from "react-redux";
import { Hand } from "pokersolver";

const Table = (props) => {
  const { cards, tableStage } = props;
  if (!cards[2]) return null;
  if (!cards[3]) return null;
  if (!cards[4]) return null;
  if (!cards[5]) return null;
  if (!cards[6]) return null;

  console.log(cards);

  const { value, suit, image } = cards[2];
  const value2 = cards[3].value;
  const suit2 = cards[3].suit;
  const image2 = cards[3].image;

  const value3 = cards[4].value;
  const suit3 = cards[4].suit;
  const image3 = cards[4].image;

  const value4 = cards[5].value;
  const suit4 = cards[5].suit;
  const image4 = cards[5].image;

  const value5 = cards[6].value;
  const suit5 = cards[6].suit;
  const image5 = cards[6].image;

  let cardCodes = cards.map((obj) => obj.code);

  console.log(cardCodes);

  function tenSolver(str1) {
    return str1.replace('0', 'T');
  }

  cardCodes = cardCodes.map(tenSolver);
  console.log(cardCodes);
  let playerHand = Hand.solve(cardCodes);
  console.log(playerHand);

  switch (tableStage) {
    case 0:
      console.log("case 0!");
      return null;
    case 1:
      playerHand = Hand.solve(cardCodes.slice(0, 2));
      return (
        <div>
          <h4>`{playerHand.name}`</h4>
        </div>
      );
    case 2:
      playerHand = Hand.solve(cardCodes.slice(0, 5));
      return (
        <div>
          <h4>`{playerHand.name}`</h4>
          <h3> The table: </h3>
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
          <div style={{ display: "inline-block", margin: 10 }}>
            <h3>
              {value3} of {suit3}
            </h3>
            <img src={image3} alt="card-image" />
          </div>
        </div>
      );
    case 3:
      playerHand = Hand.solve(cardCodes.slice(0, 6));
      return (
        <div>
          <h4>`{playerHand.name}`</h4>
          <h3> The table: </h3>
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
          <div style={{ display: "inline-block", margin: 10 }}>
            <h3>
              {value3} of {suit3}
            </h3>
            <img src={image3} alt="card-image" />
          </div>
          <div style={{ display: "inline-block", margin: 10 }}>
            <h3>
              {value4} of {suit4}
            </h3>
            <img src={image4} alt="card-image" />
          </div>
        </div>
      );
    case 4:
      playerHand = Hand.solve(cardCodes.slice(0, 7));
      return (
        <div>
          <h4>`{playerHand.name}`</h4>
          <h3> The table: </h3>
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
          <div style={{ display: "inline-block", margin: 10 }}>
            <h3>
              {value3} of {suit3}
            </h3>
            <img src={image3} alt="card-image" />
          </div>
          <div style={{ display: "inline-block", margin: 10 }}>
            <h3>
              {value4} of {suit4}
            </h3>
            <img src={image4} alt="card-image" />
          </div>
          <div style={{ display: "inline-block", margin: 10 }}>
            <h3>
              {value5} of {suit5}
            </h3>
            <img src={image5} alt="card-image" />
          </div>
        </div>
      );
  }
};

const mapStateToProps = (state) => {
  return {
    cards: state.deck.cards,
    tableStage: state.settings.tableStage,
  };
};

export default connect(mapStateToProps)(Table);
