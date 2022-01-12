const types = {
  SET_PLAYER_CONTRACT: "SET_PLAYER_CONTRACT",
  SET_WAGES_CONTRACT: "SET_WAGES_CONTRACT",
};

const setPlayerContract = (contract) => ({
  type: types.SET_PLAYER_CONTRACT,
  payload: contract,
});

const setWagesContract = (contract) => ({
  type: types.SET_WAGES_CONTRACT,
  payload: contract,
});

export { setPlayerContract, setWagesContract, types };
