import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoanding] = useState(true);

    useEffect(() => {
        const unsubscibe = auth.onAuthStateChanged((user) => {
            console.log({ user });
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({
                    displayName,
                    email,
                    uid,
                    photoURL,
                });
                setIsLoanding(false);
                navigate('/');
                return;
            }
            setIsLoanding(false);
            navigate('/login');
        });

        // clean function
        return () => {
            unsubscibe();
        };
    }, [navigate]);

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Spin /> : children}
        </AuthContext.Provider>
    );
}
