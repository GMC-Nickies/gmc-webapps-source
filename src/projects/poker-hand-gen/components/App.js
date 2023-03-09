import React, { Component } from "react";
import { connect } from "react-redux";
import { startGame, cancelGame, newHand } from "../actions/settings";
import { fetchNewDeck, fetchDrawCard } from "../actions/deck";
import fetchStates from "../reducers/fetchStates";
import Instructions from "./Instructions";
import DrawCard from "./DrawCard";
import Card from "./Card";
import Table from "./Table";
import Guess from "./Guess";
import GameState from "./GameState";

class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
    this.props.newHand();
    this.props.fetchDrawCard('123');
  };

  render() {
    console.log("this", this);

    if (this.props.fetchState === fetchStates.error) {
      return (
        <div>
          <p>Please try reloading the app. An error occurred.</p>
          <p>{this.props.message}</p>
        </div>
      );
    }

    return (
      <div>
        <h2>♡ ♤ Poker Hand Generator ♢ ♧</h2>
        {this.props.gameStarted ? (
          <div>
            <h3>The hand is on!</h3>
            <button onClick={this.props.cancelGame}>New Hand</button>
            <br />
            <br />
            <DrawCard />
            <hr />
            <Card />
            <Table />
            <hr />
            
            <br />
          </div>
        ) : (
          <div>
            <h3>Click the button below to draw a new hand</h3>
            <br />
            <button onClick={this.startGame}>Start Game</button>
            <hr />
            <Instructions />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);

  const {
    settings: { gameStarted },
    deck: { fetchState, message, deck_id },
  } = state;

  return { gameStarted, fetchState, message, deck_id };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(startGame()),
    cancelGame: () => dispatch(cancelGame()),
    fetchNewDeck: () => dispatch(fetchNewDeck()),
    newHand: () => dispatch(newHand),
    fetchDrawCard: () => dispatch(fetchDrawCard('new')),
  };
};

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(App);
