import React, { createContext, useReducer } from 'react';
import reducer from './flux';

export const StateContext = createContext({});
export const DispatchContext = createContext({});

const Provider = ({ children }: any) => {
    const initialState = { loading: false, lyrics: null, error: null };
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
};

export default {
    Provider,
    Consumer: StateContext.Consumer,
};
