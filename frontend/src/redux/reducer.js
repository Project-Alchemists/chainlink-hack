const { types } = require("./actions");

const initialState = {
  playerContract: {},
  wagesContract: {},
};

const contractReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PLAYER_CONTRACT:
      return { ...state, playerContract: action.payload };

    case types.SET_WAGES_CONTRACT:
      return { ...state, wagesContract: action.payload };

    default:
      break;
  }
};

export default contractReducer;
