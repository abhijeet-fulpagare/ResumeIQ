import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth.context.jsx";
import { getMe, login, logout, register } from "../services/auth.api.js";

const useAuth = () => {
    const { user, setUser, loading, setLoading } = useContext(AuthContext);

    const handleRegister = async ({ username, email, password }) => {
        try {
            setLoading(true);

            const data = await register({ username, email, password });
            setUser(data.user);

        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async ({ email, password }) => {
        try {
            setLoading(true);

            const data = await login({ email, password });
            setUser(data.user);

        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            setLoading(true);

            await logout();
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const getAndSetUser = async () => {
            try {
                setLoading(true);

                const data = await getMe();
                setUser(data.user);
            } catch (err) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        getAndSetUser();
    }, []);

    return {
        user,
        loading,
        handleRegister,
        handleLogin,
        handleLogout,
    };
};

export default useAuth;