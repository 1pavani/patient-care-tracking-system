import { useState } from "react";
import { createPatient } from "../services/patientService";

function AddPatient() {

    const [formData, setFormData] = useState({
        patientId: "",
        fullName: "",
        age: "",
        gender: "",
        mobile: "",
        email: "",
        address: "",
        bloodGroup: "",
        emergencyContact: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createPatient(formData);

            alert("Patient Added");

            window.location.reload();

        } catch (error) {

            alert("Error");

        }

    };

    return (

        <div>

            <h2>Add Patient</h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="patientId"
                    placeholder="Patient ID"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="fullName"
                    placeholder="Full Name"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="age"
                    placeholder="Age"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="gender"
                    placeholder="Gender"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="mobile"
                    placeholder="Mobile"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="bloodGroup"
                    placeholder="Blood Group"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    name="emergencyContact"
                    placeholder="Emergency Contact"
                    onChange={handleChange}
                />

                <br /><br />

                <button>
                    Add Patient
                </button>

            </form>

        </div>

    );

}

export default AddPatient;