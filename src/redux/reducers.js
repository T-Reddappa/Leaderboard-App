import dummyScores from "../dummyScores";

const initialState = {
  scores: dummyScores,
};

const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SCORE":
      const newScores = [...state.scores, action.payload];
      return { ...state, scores: newScores };
    default:
      return state;
  }
};

export default leaderboardReducer;
