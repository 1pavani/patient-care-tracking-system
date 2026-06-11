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
getFollowUpById
}
from "../services/followUpService";

function FollowUpDetails() {

    const { id } =
    useParams();

    const [followUp,
    setFollowUp] =
    useState(null);

    useEffect(()=>{

        fetchFollowUp();

    },[]);

    const fetchFollowUp =
    async()=>{

        const data =
        await getFollowUpById(id);

        setFollowUp(data);

    };

    if(!followUp){

        return <h2>Loading...</h2>;

    }

    return(

        <div>

            <h1>
                Follow Up Details
            </h1>

            <p>
                Patient :
                {
                followUp.patient
                ?.fullName
                }
            </p>

            <p>
                Doctor :
                {
                followUp.doctor
                }
            </p>

            <p>
                Date :
                {
                new Date(
                followUp.followUpDate
                ).toLocaleDateString()
                }
            </p>

            <p>
                Remarks :
                {
                followUp.remarks
                }
            </p>

            <p>
                Status :
                {
                followUp.status
                }
            </p>

        </div>

    );

}

export default FollowUpDetails;