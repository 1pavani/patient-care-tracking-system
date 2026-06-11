import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
createFollowUp
}
from "../services/followUpService";

function AddFollowUp() {

    const navigate =
    useNavigate();

    const [formData,
    setFormData] =
    useState({

        patient:"",
        appointment:"",
        doctor:"",
        followUpDate:"",
        remarks:""

    });

    const handleChange =
    (e)=>{

        setFormData({

            ...formData,
            [e.target.name]:
            e.target.value

        });

    };

    const handleSubmit =
    async(e)=>{

        e.preventDefault();

        await createFollowUp(
            formData
        );

        navigate(
            "/followups"
        );

    };

    return(

        <div>

            <h1>
                Add Follow Up
            </h1>

            <form
            onSubmit={
            handleSubmit
            }
            >

                <input
                type="text"
                name="patient"
                placeholder="Patient ID"
                onChange={
                handleChange
                }
                />

                <br /><br />

                <input
                type="text"
                name="appointment"
                placeholder="Appointment ID"
                onChange={
                handleChange
                }
                />

                <br /><br />

                <input
                type="text"
                name="doctor"
                placeholder="Doctor"
                onChange={
                handleChange
                }
                />

                <br /><br />

                <input
                type="date"
                name="followUpDate"
                onChange={
                handleChange
                }
                />

                <br /><br />

                <textarea
                name="remarks"
                placeholder="Remarks"
                onChange={
                handleChange
                }
                />

                <br /><br />

                <button>
                    Add Follow Up
                </button>

            </form>

        </div>

    );

}

export default AddFollowUp;