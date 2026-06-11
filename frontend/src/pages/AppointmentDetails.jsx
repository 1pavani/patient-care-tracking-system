import {
    useEffect,
    useState
}
from "react";

import {
    useParams
}
from "react-router-dom";

import {
    getAppointmentById
}
from "../services/appointmentService";

function AppointmentDetails() {

    const { id } =
    useParams();

    const [appointment,
    setAppointment] =
    useState(null);

    useEffect(()=>{

        fetchAppointment();

    },[]);

    const fetchAppointment =
    async()=>{

        const data =
        await getAppointmentById(id);

        setAppointment(data);

    };

    if(!appointment){

        return <h2>Loading...</h2>;

    }

    return(

        <div>

            <h1>
                Appointment Details
            </h1>

            <h3>
                Patient :
                {
                appointment
                .patient
                ?.fullName
                }
            </h3>

            <h3>
                Doctor :
                {
                appointment
                .doctor
                }
            </h3>

            <h3>
                Date :
                {
                new Date(
                appointment
                .appointmentDate
                ).toLocaleDateString()
                }
            </h3>

            <h3>
                Reason :
                {
                appointment
                .reason
                }
            </h3>

            <h3>
                Status :
                {
                appointment
                .status
                }
            </h3>

        </div>

    );

}

export default AppointmentDetails;