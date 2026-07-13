import api from "./api";

export interface UserRequest {
    firstName: string;
    lastName: string;
    tckn: string;
    phoneNumber: string;
    email: string;
    password: string;
}

export const saveUser = async (user: UserRequest) => {
    const response = await api.post("/user/save", user);
    return response.data;
};