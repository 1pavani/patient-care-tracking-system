import {
useEffect,
useState
}
from "react";

import {
Link
}
from "react-router-dom";

import {

getTreatments,
completeTreatment,
deleteTreatment

}
from "../services/treatmentService";

function Treatments(){

    const [treatments,
    setTreatments] =
    useState([]);

    useEffect(()=>{

        fetchTreatments();

    },[]);

    const fetchTreatments =
    async()=>{

        const data =
        await getTreatments();

        setTreatments(data);

    };

    const handleComplete =
    async(id)=>{

        await completeTreatment(id);

        fetchTreatments();

    };

    const handleDelete =
    async(id)=>{

        await deleteTreatment(id);

        fetchTreatments();

    };

    return(

        <div>

            <h1>
                Treatments
            </h1>

            <table border="1">

                <thead>

                    <tr>

                        <th>
                            Patient
                        </th>

                        <th>
                            Diagnosis
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
                    treatment=>(

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
                            .status
                            }
                            </td>

                            <td>

                                <Link
                                to={`/treatment/${treatment._id}`}
                                >
                                <button>
                                View
                                </button>
                                </Link>

                                {" "}

                                <Link
                                to={`/edit-treatment/${treatment._id}`}
                                >
                                <button>
                                Edit
                                </button>
                                </Link>

                                {" "}

                                <button
                                onClick={()=>
                                handleComplete(
                                treatment._id
                                )
                                }
                                >
                                Complete
                                </button>

                                {" "}

                                <button
                                onClick={()=>
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