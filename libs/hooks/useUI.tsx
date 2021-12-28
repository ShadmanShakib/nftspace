import { UIContext } from "libs/context";
import React from "react";
const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};
export default useUI;
