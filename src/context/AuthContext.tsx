//Definir como luce, que informacion tendre aqui

import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export interface AuthState {
     isLoggedIn: boolean;
     username?: string;
     favoriteIcon?: string;
}

//Estado Inicial

export const authInitialState: AuthState = {
    isLoggedIn: false
}

// Lo usamos para decirle a React como luce y que expone el context
export interface AuthContextProps {
     authState: AuthState;
     signIn: () => void;
     logout: () => void;
     changeFavoriteIcon: (iconName: string) => void;
     changeUsername: (userName: string) => void;
}


//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//Componente proveedor del Estado

export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({type: 'signIn'})
    }

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({type: 'changeFavIcon', payload: iconName})
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }


    const changeUsername = ( userName: string) => {
        dispatch({type: 'changeUsername' , payload: userName})
    }

    return(
         <AuthContext.Provider value={{
             authState,
             signIn,
             changeFavoriteIcon,
             logout,
             changeUsername
         }}>
             { children}
         </AuthContext.Provider>
    )
}