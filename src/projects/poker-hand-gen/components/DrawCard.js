import React from "react";
import { connect } from "react-redux";
import { fetchDrawCard } from "../actions/deck";
import { preFlop, seeFlop, seeTurn, seeRiver } from "../actions/settings";

const DrawCard = (props) => {
  console.log("props here:");
  console.log(props);
  const {
    deck_id,
    //fetchDrawCard,
    tableStage,
    preFlop,
    seeFlop,
    seeTurn,
    seeRiver,
  } = props;
  console.log(tableStage);
  switch (tableStage) {
    case 0:
      return (
        <div>
          <button onClick={preFlop}>Draw your hand!</button>
        </div>
      );
    case 1:
      return (
        <div>
          <button onClick={seeFlop}>Show the flop!</button>
        </div>
      );
    case 2:
      return (
        <div>
          <button onClick={seeTurn}>Show the turn!</button>
        </div>
      );
    case 3:
      return (
        <div>
          <button onClick={seeRiver}>Show the river!</button>
        </div>
      );
    case 4:
      return <div></div>;
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    //fetchDrawCard: (deck_id) => () => dispatch(fetchDrawCard(deck_id)),
    preFlop: () => dispatch(preFlop),
    seeFlop: () => dispatch(seeFlop),
    seeTurn: () => dispatch(seeTurn),
    seeRiver: () => dispatch(seeRiver),
  };
};

const mapStateToProps = (state) => {
  return {
    deck_id: state.deck.deck_id,
    tableStage: state.settings.tableStage,
  };
};

export default connect(
  (state) => mapStateToProps,
  mapDispatchToProps
)(DrawCard);
