import {
  SET_GAME_STARTED,
  SET_INSTRUCTIONS_EXPANDED,
  TABLE_STAGE
} from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false,
  tableStage: 0
};

const settingsReducer = (state = DEFAULT_SETTINGS, action) => {
  console.log('state', state, 'action', action);

  switch(action.type) {
    case SET_GAME_STARTED:
      return {
        ...state,
        gameStarted: action.gameStarted
      };
    case SET_INSTRUCTIONS_EXPANDED:
      return {
        ...state,
        instructionsExpanded: action.instructionsExpanded
      };
    case TABLE_STAGE:
      return {
        ...state,
        tableStage: action.tableStage
      };
    default:
      return state;
  }
};

export default settingsReducer;
