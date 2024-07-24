import { createStore } from "redux";
import leaderboardReducer from "./reducers";

const store = createStore(leaderboardReducer);

export default store;
