import {
useEffect,
useState
}
from "react";

import {
createAppointment
}
from "../services/appointmentService";

import {
getPatients
}
from "../services/patientService";

function AddAppointment() {

    const [patients,
    setPatients] =
    useState([]);

    const [formData,
    setFormData] =
    useState({

        patient:"",
        doctor:"",
        appointmentDate:"",
        reason:""

    });

    useEffect(()=>{

        fetchPatients();

    },[]);

    const fetchPatients =
    async()=>{

        const data =
        await getPatients();

        setPatients(data);

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

        await createAppointment(
            formData
        );

        alert(
            "Appointment Created"
        );

    };

    return (

        <div>

            <h1>
                Add Appointment
            </h1>

            <form
            onSubmit={
            handleSubmit
            }
            >

                <select
                name="patient"
                onChange={
                handleChange
                }
                >

                    <option>
                    Select Patient
                    </option>

                    {
                    patients.map(
                    patient=>(

                        <option
                        key={
                        patient._id
                        }
                        value={
                        patient._id
                        }
                        >

                        {
                        patient
                        .fullName
                        }

                        </option>

                    ))
                    }

                </select>

                <br/><br/>

                <input
                name="doctor"
                placeholder="Doctor"
                onChange={
                handleChange
                }
                />

                <br/><br/>

                <input
                type="date"
                name="appointmentDate"
                onChange={
                handleChange
                }
                />

                <br/><br/>

                <input
                name="reason"
                placeholder="Reason"
                onChange={
                handleChange
                }
                />

                <br/><br/>

                <button>
                Create
                </button>

            </form>

        </div>

    );

}

export default AddAppointment;