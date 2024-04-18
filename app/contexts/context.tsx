// context/ProfileContext.tsx

import React, { ReactNode, createContext, useContext, useReducer } from "react";

// Define types for state and actions
type State = {
  nav: boolean;
  loading: boolean;
};

type Action =
  | { type: "FETCH_REQUEST" }
  | { type: "FETCH_SUCCESS"; payload?: any }
  | { type: "FETCH_ERROR"; payload?: string }
  | { type: "OPEN_NAV"; payload?: string }
  | { type: "CLOSE_NAV"; payload?: string };

// Define initial state
const initialState: State = {
  nav: false,
  loading: false,
};

// Define reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false };
    case "FETCH_ERROR":
      return { ...state, loading: false };
    case "OPEN_NAV":
      return { ...state, nav: true };
    case "CLOSE_NAV":
      return { ...state, nav: false };
    default:
      return state;
  }
};

// Create context
const ProfileContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

// Custom hook to use context
export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within an ApiProvider");
  }
  return context;
};

// Provider component
export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ProfileContext.Provider value={{ state, dispatch }}>{children}</ProfileContext.Provider>;
};
