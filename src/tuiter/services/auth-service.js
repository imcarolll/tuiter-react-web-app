import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}`;

const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
    console.log("before login");
    const response = await api.post(`${USERS_URL}/login`, { username, password });
    console.log("after login");
    const user = response.data;
    return user;
    };

    export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
   };
   export const profile = async () => {
    console.log("beforce response");
    const response = await api.post(`${USERS_URL}/profile`);
    console.log("after response");
    return response;
   };
   
   export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
   };

   export const register = async ({ username, password }) => { 
    const response = await api.post(`${USERS_URL}/register`, { 
        username: username, 
        password: password 
    })
    return response.data;
   }
