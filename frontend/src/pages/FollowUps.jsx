import {
useEffect,
useState
}
from "react";

import {
getFollowUps,
completeFollowUp,
deleteFollowUp
}
from "../services/followUpService";

import { Link }
from "react-router-dom";

function FollowUps() {

    const [followUps,
    setFollowUps] =
    useState([]);

    useEffect(()=>{

        fetchFollowUps();

    },[]);

    const fetchFollowUps =
    async()=>{

        const data =
        await getFollowUps();

        setFollowUps(data);

    };

    const handleComplete =
    async(id)=>{

        await completeFollowUp(id);

        fetchFollowUps();

    };

    const handleDelete =
    async(id)=>{

        await deleteFollowUp(id);

        fetchFollowUps();

    };

    return(

        <div>

            <h1>
                Follow Ups
            </h1>

            <Link
            to="/add-followup"
            >
                <button>
                    Add Follow Up
                </button>
            </Link>

            <br />
            <br />

            <table border="1">

                <thead>

                    <tr>

                        <th>
                            Patient
                        </th>

                        <th>
                            Doctor
                        </th>

                        <th>
                            Date
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
                    followUps.map(
                    followUp=>(

                        <tr
                        key={
                        followUp._id
                        }
                        >

                            <td>
                            {
                            followUp.patient
                            ?.fullName
                            }
                            </td>

                            <td>
                            {
                            followUp.doctor
                            }
                            </td>

                            <td>
                            {
                            new Date(
                            followUp
                            .followUpDate
                            )
                            .toLocaleDateString()
                            }
                            </td>

                            <td>
                            {
                            followUp.status
                            }
                            </td>

                            <td>

                                <Link
                                to={`/followup/${followUp._id}`}
                                >
                                    <button>
                                        View
                                    </button>
                                </Link>

                                <Link
                                to={`/edit-followup/${followUp._id}`}
                                >
                                    <button>
                                        Edit
                                    </button>
                                </Link>

                                <button
                                onClick={()=>
                                handleComplete(
                                followUp._id
                                )
                                }
                                >
                                Complete
                                </button>

                                <button
                                onClick={()=>
                                handleDelete(
                                followUp._id
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

export default FollowUps;