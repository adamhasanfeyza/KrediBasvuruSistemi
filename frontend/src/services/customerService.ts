import api from "./api";

export interface CustomerRequest {
    firstName: string;
    lastName: string;
    tckn: string;
    phoneNumber: string;
    email: string;
    password: string;
    title: string;
    salaryInfo: number;
    monthlyIncome: number;
    debt: number;
    assets: number;
}

export const saveCustomer = async (customer: CustomerRequest) => {
    const response = await api.post("/customer/save", customer);
    return response.data;
};