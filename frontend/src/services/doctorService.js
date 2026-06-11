import axios from "axios";

const API =
"http://localhost:5000/api/doctors";

const getToken = () => {

    return JSON.parse(
        localStorage.getItem("user")
    )?.token || localStorage.getItem("token");

};

const getConfig = () => {

    return {

        headers: {

            Authorization:
            `Bearer ${localStorage.getItem("token")}`

        }

    };

};

// GET ALL

export const getDoctors =
async () => {

    const response =
    await axios.get(
        API,
        getConfig()
    );

    return response.data;

};

// GET ONE

export const getDoctorById =
async (id) => {

    const response =
    await axios.get(
        `${API}/${id}`,
        getConfig()
    );

    return response.data;

};

// CREATE

export const createDoctor =
async (doctorData) => {

    const response =
    await axios.post(
        API,
        doctorData,
        getConfig()
    );

    return response.data;

};

// UPDATE

export const updateDoctor =
async (id,data) => {

    const response =
    await axios.put(
        `${API}/${id}`,
        data,
        getConfig()
    );

    return response.data;

};

// DELETE

export const deleteDoctor =
async (id) => {

    const response =
    await axios.delete(
        `${API}/${id}`,
        getConfig()
    );

    return response.data;

};