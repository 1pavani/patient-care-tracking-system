import axios from "axios";

const API =
"http://localhost:5000/api/followups";

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

export const getFollowUps =
async()=>{

    const response =
    await axios.get(
        API,
        getToken()
    );

    return response.data;

};

export const getFollowUpById =
async(id)=>{

    const response =
    await axios.get(
        `${API}/${id}`,
        getToken()
    );

    return response.data;

};

export const createFollowUp =
async(data)=>{

    const response =
    await axios.post(
        API,
        data,
        getToken()
    );

    return response.data;

};

export const updateFollowUp =
async(id,data)=>{

    const response =
    await axios.put(
        `${API}/${id}`,
        data,
        getToken()
    );

    return response.data;

};

export const completeFollowUp =
async(id)=>{

    const response =
    await axios.put(
        `${API}/complete/${id}`,
        {},
        getToken()
    );

    return response.data;

};

export const deleteFollowUp =
async(id)=>{

    const response =
    await axios.delete(
        `${API}/${id}`,
        getToken()
    );

    return response.data;

};