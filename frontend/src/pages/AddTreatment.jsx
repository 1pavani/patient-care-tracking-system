import {
useState
}
from "react";

import {
createTreatment
}
from "../services/treatmentService";

function AddTreatment(){

    const [formData,
    setFormData] =
    useState({

        patient:"",
        appointment:"",
        diagnosis:"",
        treatmentPlan:"",
        medications:"",
        doctorNotes:""

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

        await createTreatment(
            formData
        );

        alert(
            "Treatment Added"
        );

    };

    return(

        <div>

            <h1>
                Add Treatment
            </h1>

            <form
            onSubmit={
            handleSubmit
            }
            >

                <input
                name="patient"
                placeholder="Patient ID"
                onChange={
                handleChange
                }
                />

                <br/><br/>

                <input
                name="appointment"
                placeholder="Appointment ID"
                onChange={
                handleChange
                }
                />

                <br/><br/>

                <input
                name="diagnosis"
                placeholder="Diagnosis"
                onChange={
                handleChange
                }
                />

                <br/><br/>

                <input
                name="treatmentPlan"
                placeholder="Treatment Plan"
                onChange={
                handleChange
                }
                />

                <br/><br/>

                <input
                name="medications"
                placeholder="Medications"
                onChange={
                handleChange
                }
                />

                <br/><br/>

                <textarea
                name="doctorNotes"
                placeholder="Doctor Notes"
                onChange={
                handleChange
                }
                />

                <br/><br/>

                <button>
                    Add Treatment
                </button>

            </form>

        </div>

    );

}

export default AddTreatment;