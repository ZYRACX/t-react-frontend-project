import axios from "axios"
import { supabase } from "./supabase";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL | "http://localhost:3000",
});

api.interceptors.request.use(async (config) => {
    const {session} = supabase.auth.getSession();
    if(session?.access_token) {
        config.headers.Authorization = `Bearer ${session.access_token}`;
    }

    return config
})

export default api