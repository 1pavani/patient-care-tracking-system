import {
useState,
useEffect
}
from "react";

import {
useParams,
useNavigate
}
from "react-router-dom";

import {
getAppointmentById,
updateAppointment
}
from "../services/appointmentService";

function EditAppointment() {

    const { id } =
    useParams();

    const navigate =
    useNavigate();

    const [formData,
    setFormData] =
    useState({

        doctor:"",
        appointmentDate:"",
        reason:""

    });

    useEffect(()=>{

        fetchAppointment();

    },[]);

    const fetchAppointment =
    async()=>{

        const data =
        await getAppointmentById(id);

        setFormData({

            doctor:
            data.doctor,

            appointmentDate:
            data.appointmentDate
            ?.split("T")[0],

            reason:
            data.reason

        });

    };

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

        await updateAppointment(
            id,
            formData
        );

        alert(
            "Appointment Updated"
        );

        navigate(
            "/appointments"
        );

    };

    return(

        <div>

            <h1>
                Edit Appointment
            </h1>

            <form
            onSubmit={
            handleSubmit
            }
            >

                <input
                name="doctor"
                value={
                formData.doctor
                }
                onChange={
                handleChange
                }
                />

                <br/><br/>

                <input
                type="date"
                name="appointmentDate"
                value={
                formData
                .appointmentDate
                }
                onChange={
                handleChange
                }
                />

                <br/><br/>

                <input
                name="reason"
                value={
                formData.reason
                }
                onChange={
                handleChange
                }
                />

                <br/><br/>

                <button>
                    Update
                </button>

            </form>

        </div>

    );

}

export default EditAppointment;