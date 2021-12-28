import React from "react";
export interface State {
  isOpen: boolean;
}
const intialState: State = {
  isOpen: false,
} as State;

type Action = {
  type: "TOGGLE_DROPDOWN";
};

const UIContext = React.createContext<State | any>(intialState);

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "TOGGLE_DROPDOWN":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}

export const UIProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, intialState);
  const toggleMenu = React.useCallback(() => {
    dispatch({ type: "TOGGLE_DROPDOWN" });
  }, [dispatch]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = React.useMemo(() => ({ ...state, toggleMenu }), [state]);
  return <UIContext.Provider value={value} {...props} />;
};

export default UIContext;
