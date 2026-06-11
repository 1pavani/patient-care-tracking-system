import axios from "axios";

const API_URL =
"http://localhost:5000/api/appointments";

const getToken = () => {
    return localStorage.getItem("token");
};

const config = () => {
    return {
        headers:{
            Authorization:
            `Bearer ${getToken()}`
        }
    };
};

export const getAppointments =
async () => {

    const response =
    await axios.get(
        API_URL,
        config()
    );

    return response.data;

};

export const createAppointment =
async(data)=>{

    const response =
    await axios.post(
        API_URL,
        data,
        config()
    );

    return response.data;

};

export const getAppointmentById =
async(id)=>{

    const response =
    await axios.get(
        `${API_URL}/${id}`,
        config()
    );

    return response.data;

};

export const updateAppointment =
async(id,data)=>{

    const response =
    await axios.put(
        `${API_URL}/${id}`,
        data,
        config()
    );

    return response.data;

};

export const cancelAppointment =
async(id)=>{

    const response =
    await axios.put(
        `${API_URL}/cancel/${id}`,
        {},
        config()
    );

    return response.data;

};
export const completeAppointment =
async(id)=>{

    const response =
    await axios.put(
        `${API_URL}/complete/${id}`,
        {},
        config()
    );

    return response.data;

};
