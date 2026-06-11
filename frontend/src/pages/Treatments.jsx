import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
    getTreatments,
    completeTreatment,
    deleteTreatment
} from "../services/treatmentService";

function Treatments() {

    const [treatments, setTreatments] =
    useState([]);

    useEffect(() => {

        fetchTreatments();

    }, []);

    const fetchTreatments =
    async () => {

        try {

            const data =
            await getTreatments();

            setTreatments(data);

        }
        catch (error) {

            console.log(error);

        }

    };

    const handleComplete =
    async (id) => {

        try {

            await completeTreatment(id);

            alert(
                "Treatment Completed"
            );

            fetchTreatments();

        }
        catch (error) {

            console.log(error);

        }

    };

    const handleDelete =
    async (id) => {

        const confirmDelete =
        window.confirm(
            "Delete Treatment?"
        );

        if (!confirmDelete) {

            return;

        }

        try {

            await deleteTreatment(id);

            alert(
                "Treatment Deleted"
            );

            fetchTreatments();

        }
        catch (error) {

            console.log(error);

        }

    };

    return (

        <div
        style={{
            padding:"20px"
        }}
        >

            <h1>
                Treatments
            </h1>

            <br />

            <Link
            to="/add-treatment"
            >
                <button>
                    Add Treatment
                </button>
            </Link>

            <br />
            <br />

            <table
            border="1"
            cellPadding="10"
            >

                <thead>

                    <tr>

                        <th>
                            Patient
                        </th>

                        <th>
                            Diagnosis
                        </th>

                        <th>
                            Treatment Plan
                        </th>

                        <th>
                            Medication
                        </th>

                        <th>
                            Status
                        </th>

                        <th>
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {
                    treatments.map(
                    (treatment) => (

                        <tr
                        key={
                        treatment._id
                        }
                        >

                            <td>
                                {
                                treatment
                                .patient
                                ?.fullName
                                }
                            </td>

                            <td>
                                {
                                treatment
                                .diagnosis
                                }
                            </td>

                            <td>
                                {
                                treatment
                                .treatmentPlan
                                }
                            </td>

                            <td>
                                {
                                treatment
                                .medications
                                }
                            </td>

                            <td>
                                {
                                treatment
                                .status
                                }
                            </td>

                            <td>

                                <Link
                                to={
                                `/treatment/${treatment._id}`
                                }
                                >
                                    <button>
                                        View
                                    </button>
                                </Link>

                                {" "}

                                <Link
                                to={
                                `/edit-treatment/${treatment._id}`
                                }
                                >
                                    <button>
                                        Edit
                                    </button>
                                </Link>

                                {" "}

                                <button
                                onClick={() =>
                                handleComplete(
                                treatment._id
                                )
                                }
                                >
                                    Complete
                                </button>

                                {" "}

                                <button
                                onClick={() =>
                                handleDelete(
                                treatment._id
                                )
                                }
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default Treatments;