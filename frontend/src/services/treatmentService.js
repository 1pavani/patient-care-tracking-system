import axios from "axios";

const API =
"http://localhost:5000/api/treatments";

const getToken = () => {

    return {
        headers:{
            Authorization:
            `Bearer ${
                localStorage.getItem(
                    "token"
                )
            }`
        }
    };

};

export const getTreatments =
async()=>{

    const response =
    await axios.get(
        API,
        getToken()
    );

    return response.data;

};

export const getTreatmentById =
async(id)=>{

    const response =
    await axios.get(
        `${API}/${id}`,
        getToken()
    );

    return response.data;

};

export const createTreatment =
async(data)=>{

    const response =
    await axios.post(
        API,
        data,
        getToken()
    );

    return response.data;

};

export const updateTreatment =
async(id,data)=>{

    const response =
    await axios.put(
        `${API}/${id}`,
        data,
        getToken()
    );

    return response.data;

};

export const completeTreatment =
async(id)=>{

    const response =
    await axios.put(
        `${API}/complete/${id}`,
        {},
        getToken()
    );

    return response.data;

};

export const deleteTreatment =
async(id)=>{

    const response =
    await axios.delete(
        `${API}/${id}`,
        getToken()
    );

    return response.data;

};