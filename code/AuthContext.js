// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        const users = [
            fetch('http://192.168.1.155:3000/users')
        ];

        const foundUser = users.find(u => u.username === username && u.password === password);
        if (foundUser) {
            setUser(foundUser);
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
