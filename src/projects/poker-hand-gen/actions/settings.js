import {
  SET_GAME_STARTED,
  SET_INSTRUCTIONS_EXPANDED,
  TABLE_STAGE,
} from "./types";

export const startGame = () => {
  return {
    type: SET_GAME_STARTED,
    gameStarted: true,
  };
};

export const cancelGame = () => {
  return {
    type: SET_GAME_STARTED,
    gameStarted: false,
  };
};

export const expandInstructions = () => {
  return {
    type: SET_INSTRUCTIONS_EXPANDED,
    instructionsExpanded: true,
  };
};

export const collapseInstructions = () => {
  return {
    type: SET_INSTRUCTIONS_EXPANDED,
    instructionsExpanded: false,
  };
};

export const newHand = dispatch => {
  dispatch({
    type: TABLE_STAGE,
    tableStage: 1,
  });
};

export const preFlop = dispatch => {
  dispatch({
    type: TABLE_STAGE,
    tableStage: 1,
  });
};

export const seeFlop = dispatch => {
  dispatch({
    type: TABLE_STAGE,
    tableStage: 2,
  });
};

export const seeTurn = dispatch => {
  dispatch({
    type: TABLE_STAGE,
    tableStage: 3,
  });
};

export const seeRiver = dispatch => {
  dispatch({
    type: TABLE_STAGE,
    tableStage: 4,
  });
};
