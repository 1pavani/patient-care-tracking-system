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
getDoctorById
}
from "../services/doctorService";

function DoctorDetails() {

const { id } =
useParams();

const [doctor,
setDoctor] =
useState(null);

useEffect(()=>{

fetchDoctor();

},[]);

const fetchDoctor =
async()=>{

const data =
await getDoctorById(id);

setDoctor(data);

};

if(!doctor){

return <h2>Loading...</h2>;

}

return(

<div>

<h1>
Doctor Details
</h1>

<p>
<b>Name:</b>
{doctor.name}
</p>

<p>
<b>Email:</b>
{doctor.email}
</p>

<p>
<b>Specialization:</b>
{doctor.specialization}
</p>

<p>
<b>Experience:</b>
{doctor.experience}
Years
</p>

<p>
<b>Phone:</b>
{doctor.phone}
</p>

<p>
<b>Address:</b>
{doctor.address}
</p>

</div>

);

}

export default DoctorDetails;