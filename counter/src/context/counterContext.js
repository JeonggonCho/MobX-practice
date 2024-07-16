import {createContext, useContext} from "react";

// Context 생성
export const CounterContext = createContext();

// Provider 생성
export const CounterProvider = CounterContext.Provider;

export const useCounterStore = () => useContext(CounterContext);