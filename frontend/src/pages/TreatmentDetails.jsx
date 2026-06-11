import {
    useEffect,
    useState
} from "react";

import {
    useParams
} from "react-router-dom";

import {
    getTreatmentById
} from "../services/treatmentService";

function TreatmentDetails() {

    const { id } = useParams();

    const [treatment,
    setTreatment] =
    useState(null);

    useEffect(() => {

        fetchTreatment();

    }, []);

    const fetchTreatment =
    async () => {

        const data =
        await getTreatmentById(id);

        setTreatment(data);

    };

    if (!treatment) {

        return <h2>Loading...</h2>;

    }

    return (

        <div>

            <h1>
                Treatment Details
            </h1>

            <hr />

            <h3>
                Patient :
                {" "}
                {treatment.patient?.fullName}
            </h3>

            <h3>
                Diagnosis :
                {" "}
                {treatment.diagnosis}
            </h3>

            <h3>
                Treatment Plan :
                {" "}
                {treatment.treatmentPlan}
            </h3>

            <h3>
                Medications :
                {" "}
                {treatment.medications}
            </h3>

            <h3>
                Doctor Notes :
                {" "}
                {treatment.doctorNotes}
            </h3>

            <h3>
                Status :
                {" "}
                {treatment.status}
            </h3>

        </div>

    );

}

export default TreatmentDetails;