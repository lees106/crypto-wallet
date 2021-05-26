import * as tabActionTypes from "./tabActions";

const initialState = {
  isTradeModalVisible: false,
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case tabActionTypes.SET_TRADE_MODAL_VISIBILITY:
      console.log(
        "🚀 ~ file: TabReducer.js ~ line 9 ~ tabReducer ~ action.type",
        action
      );

      return {
        ...state,
        isTradeModalVisible: action.payload.isVisible,
      };

    default:
      return state;
  }
};

export default tabReducer;
