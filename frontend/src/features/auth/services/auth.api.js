import axios from "axios";

const uri = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: `${uri}/api/auth`,
    withCredentials: true,
});

export const register = async ({ username, email, password }) => {
    try {
        const response = await api.post("/register", {
            username,
            email,
            password,
        });

        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const login = async ({ email, password }) => {
    try {
        const response = await api.post("/login", {
            email,
            password,
        });

        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const logout = async () => {
    try {
        const response = await api.get("/logout");

        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const getMe = async () => {
    try {
        const response = await api.get("/get-me");

        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};