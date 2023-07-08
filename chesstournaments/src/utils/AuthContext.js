import React, { useState, createContext, useEffect, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        return storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [user, isLoggedIn]);

    const value = {
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
    };

    if (isLoading) {
        return <div>Loading...</div>; // or a loading spinner
    }

    console.log(isLoggedIn);
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
