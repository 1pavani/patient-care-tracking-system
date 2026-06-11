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
    getPatientById,
    updatePatient
}
from "../services/patientService";

function EditPatient() {

    const { id } = useParams();

    const navigate =
    useNavigate();

    const [formData,
    setFormData] = useState({

        patientId:"",
        fullName:"",
        age:"",
        gender:"",
        mobile:"",
        email:"",
        address:"",
        bloodGroup:"",
        emergencyContact:""

    });

    useEffect(() => {

        fetchPatient();

    }, []);

    const fetchPatient =
    async () => {

        const data =
        await getPatientById(id);

        setFormData(data);

    };

    const handleChange =
    (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
            e.target.value

        });

    };

    const handleSubmit =
    async (e) => {

        e.preventDefault();

        await updatePatient(
            id,
            formData
        );

        alert(
            "Patient Updated"
        );

        navigate("/patients");

    };

    return (

        <div>

            <h1>
                Edit Patient
            </h1>

            <form
                onSubmit={
                    handleSubmit
                }
            >

                <input
                    name="patientId"
                    value={
                        formData.patientId
                    }
                    onChange={
                        handleChange
                    }
                />

                <br /><br />

                <input
                    name="fullName"
                    value={
                        formData.fullName
                    }
                    onChange={
                        handleChange
                    }
                />

                <br /><br />

                <input
                    name="age"
                    value={
                        formData.age
                    }
                    onChange={
                        handleChange
                    }
                />

                <br /><br />

                <input
                    name="gender"
                    value={
                        formData.gender
                    }
                    onChange={
                        handleChange
                    }
                />

                <br /><br />

                <input
                    name="mobile"
                    value={
                        formData.mobile
                    }
                    onChange={
                        handleChange
                    }
                />

                <br /><br />

                <input
                    name="email"
                    value={
                        formData.email
                    }
                    onChange={
                        handleChange
                    }
                />

                <br /><br />

                <input
                    name="address"
                    value={
                        formData.address
                    }
                    onChange={
                        handleChange
                    }
                />

                <br /><br />

                <input
                    name="bloodGroup"
                    value={
                        formData.bloodGroup
                    }
                    onChange={
                        handleChange
                    }
                />

                <br /><br />

                <input
                    name="emergencyContact"
                    value={
                        formData.emergencyContact
                    }
                    onChange={
                        handleChange
                    }
                />

                <br /><br />

                <button>
                    Update Patient
                </button>

            </form>

        </div>

    );

}

export default EditPatient;