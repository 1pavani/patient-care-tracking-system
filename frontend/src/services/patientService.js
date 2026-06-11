import axios from "axios";

const API_URL = "http://localhost:5000/api/patients";

const getToken = () => {
    return localStorage.getItem("token");
};

const config = () => {
    return {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    };
};

export const getPatients = async () => {

    const response = await axios.get(
        API_URL,
        config()
    );

    return response.data;
};

export const createPatient = async (patientData) => {

    const response = await axios.post(
        API_URL,
        patientData,
        config()
    );

    return response.data;
};

export const deletePatient = async (id) => {

    const response = await axios.delete(
        `${API_URL}/${id}`,
        config()
    );

    return response.data;
};

export const updatePatient = async (
    id,
    patientData
) => {

    const response = await axios.put(
        `${API_URL}/${id}`,
        patientData,
        config()
    );

    return response.data;
};
export const getPatientById = async (id) => {

    const response = await axios.get(
        `${API_URL}/${id}`,
        config()
    );

    return response.data;
};