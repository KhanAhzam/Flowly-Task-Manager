import { createContext, useState } from "react";

import users from "../data/users";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signinFn = (email, password) => {
        
        const foundUser = users.find(
            user => user.email === email && user.password === password
        );

        if (!foundUser) {
            return null;
        }

        setUser(foundUser);

        return foundUser;
    };

    const signoutFn = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signinFn, signoutFn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;