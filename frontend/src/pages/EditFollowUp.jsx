import {
useEffect,
useState
}
from "react";

import {
useParams,
useNavigate
}
from "react-router-dom";

import {

getFollowUpById,
updateFollowUp

}
from "../services/followUpService";

function EditFollowUp() {

    const { id } =
    useParams();

    const navigate =
    useNavigate();

    const [formData,
    setFormData] =
    useState({

        doctor:"",
        followUpDate:"",
        remarks:"",
        status:""

    });

    useEffect(()=>{

        loadFollowUp();

    },[]);

    const loadFollowUp =
    async()=>{

        const data =
        await getFollowUpById(id);

        setFormData({

            doctor:
            data.doctor,

            followUpDate:
            data.followUpDate
            ?.substring(0,10),

            remarks:
            data.remarks,

            status:
            data.status

        });

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

        await updateFollowUp(
            id,
            formData
        );

        navigate(
            "/followups"
        );

    };

    return(

        <div>

            <h1>
                Edit Follow Up
            </h1>

            <form
            onSubmit={
            handleSubmit
            }
            >

                <input
                type="text"
                name="doctor"
                value={
                formData.doctor
                }
                onChange={
                handleChange
                }
                />

                <br /><br />

                <input
                type="date"
                name="followUpDate"
                value={
                formData.followUpDate
                }
                onChange={
                handleChange
                }
                />

                <br /><br />

                <textarea
                name="remarks"
                value={
                formData.remarks
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
                        Pending
                    </option>

                    <option>
                        Completed
                    </option>

                    <option>
                        Missed
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

export default EditFollowUp;