import React from "react";
export interface State {
  isOpen: boolean;
  isFilterOpen: boolean;
}
const intialState: State = {
  isOpen: false,
  isFilterOpen: false,
} as State;

type Action =
  | {
      type: "TOGGLE_DROPDOWN";
    }
  | {
      type: "TOGGLE_FILTER";
    }
  | {
      type: "CLOSE_FIlTER_MODAL";
    }
  | {
      type: "OPEN_FILTER_MODAL";
    };

const UIContext = React.createContext<State | any>(intialState);

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "TOGGLE_DROPDOWN":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case "TOGGLE_FILTER":
      return {
        ...state,
        isFilterOpen: !state.isFilterOpen,
      };
    case "CLOSE_FIlTER_MODAL":
      return {
        ...state,
        isFilterOpen: false,
      };
    case "OPEN_FILTER_MODAL":
      return {
        ...state,
        isFilterOpen: true,
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
  const toggleFilter = React.useCallback(() => {
    dispatch({ type: "TOGGLE_FILTER" });
  }, [dispatch]);
  const closeFilterModal = React.useCallback(() => {
    dispatch({ type: "CLOSE_FIlTER_MODAL" });
  }, [dispatch]);
  const openFilterModal = React.useCallback(() => {
    dispatch({ type: "OPEN_FILTER_MODAL" });
  }, [dispatch]);

  const value = React.useMemo(
    () => ({
      ...state,
      toggleMenu,
      toggleFilter,
      closeFilterModal,
      openFilterModal,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );
  return <UIContext.Provider value={value} {...props} />;
};

export default UIContext;
