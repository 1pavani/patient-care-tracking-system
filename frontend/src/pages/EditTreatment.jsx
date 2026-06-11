import {
    useEffect,
    useState
} from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    getTreatmentById,
    updateTreatment
} from "../services/treatmentService";

function EditTreatment() {

    const { id } =
    useParams();

    const navigate =
    useNavigate();

    const [formData,
    setFormData] =
    useState({

        diagnosis:"",
        treatmentPlan:"",
        medications:"",
        doctorNotes:"",
        status:""

    });

    useEffect(() => {

        fetchTreatment();

    }, []);

    const fetchTreatment =
    async () => {

        const data =
        await getTreatmentById(id);

        setFormData({

            diagnosis:
            data.diagnosis,

            treatmentPlan:
            data.treatmentPlan,

            medications:
            data.medications,

            doctorNotes:
            data.doctorNotes,

            status:
            data.status

        });

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

        await updateTreatment(
            id,
            formData
        );

        alert(
            "Treatment Updated"
        );

        navigate(
            "/treatments"
        );

    };

    return (

        <div>

            <h1>
                Edit Treatment
            </h1>

            <form
            onSubmit={
            handleSubmit
            }
            >

                <input
                name="diagnosis"
                value={
                formData.diagnosis
                }
                onChange={
                handleChange
                }
                />

                <br /><br />

                <input
                name="treatmentPlan"
                value={
                formData.treatmentPlan
                }
                onChange={
                handleChange
                }
                />

                <br /><br />

                <input
                name="medications"
                value={
                formData.medications
                }
                onChange={
                handleChange
                }
                />

                <br /><br />

                <textarea
                name="doctorNotes"
                value={
                formData.doctorNotes
                }
                onChange={
                handleChange
                }
                />

                <br /><br />

                <select
                name="status"
                value={
                formData.status
                }
                onChange={
                handleChange
                }
                >

                    <option>
                    Ongoing
                    </option>

                    <option>
                    Completed
                    </option>

                </select>

                <br /><br />

                <button>
                    Update
                </button>

            </form>

        </div>

    );

}

export default EditTreatment;