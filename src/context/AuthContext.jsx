import { createContext, useContext, useState } from "react";
import { supabase } from '../supabase/supabase.config';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    async function signInWithGoogle() {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google'
            });
            if(error) throw new Error("Se produjo un error.")
            return data;
        }catch(error){
            console.log(error);
        }
    }

    async function signOut(){
        const { error } = await supabase.auth.signOut()
        if(error) throw new Error("Se produjo un error.");
    }
    return (
        //Se asigna las herramientas al provedor de AuthContext a las funciones que lo consuman
        <AuthContext.Provider value={{signInWithGoogle, signOut, user}}>
            {children} 
        </AuthContext.Provider>
    )
};

export default UserAuth= () => {
    return useContext (AuthContext);
}