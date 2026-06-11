import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    getPatientById
}
from "../services/patientService";

function PatientDetails() {

    const { id } = useParams();

    const [patient, setPatient] =
    useState(null);

    useEffect(() => {

        fetchPatient();

    }, []);

    const fetchPatient =
    async () => {

        try {

            const data =
            await getPatientById(id);

            setPatient(data);

        }
        catch(error){

            console.log(error);

        }

    };

    if(!patient){

        return <h2>Loading...</h2>;

    }

    return (

        <div
            style={{
                padding:"20px"
            }}
        >

            <h1>
                Patient Details
            </h1>

            <hr />

            <h3>
                Patient ID :
                {patient.patientId}
            </h3>

            <h3>
                Full Name :
                {patient.fullName}
            </h3>

            <h3>
                Age :
                {patient.age}
            </h3>

            <h3>
                Gender :
                {patient.gender}
            </h3>

            <h3>
                Mobile :
                {patient.mobile}
            </h3>

            <h3>
                Email :
                {patient.email}
            </h3>

            <h3>
                Address :
                {patient.address}
            </h3>

            <h3>
                Blood Group :
                {patient.bloodGroup}
            </h3>

            <h3>
                Emergency Contact :
                {patient.emergencyContact}
            </h3>

        </div>

    );

}

export default PatientDetails;