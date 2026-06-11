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
getDoctors,
deleteDoctor
}
from "../services/doctorService";

function Doctors() {

const [doctors,setDoctors] =
useState([]);

useEffect(()=>{

fetchDoctors();

},[]);

const fetchDoctors =
async()=>{

const data =
await getDoctors();

setDoctors(data);

};

const handleDelete =
async(id)=>{

if(
window.confirm(
"Delete Doctor?"
)
){

await deleteDoctor(id);

fetchDoctors();

}

};

return(

<div>

<h1>
Doctors
</h1>

<Link
to="/add-doctor"
>
<button>
Add Doctor
</button>
</Link>

<br/><br/>

<table border="1">

<thead>

<tr>

<th>Name</th>
<th>Specialization</th>
<th>Experience</th>
<th>Phone</th>
<th>Actions</th>

</tr>

</thead>

<tbody>

{
doctors.map(
doctor=>(

<tr
key={doctor._id}
>

<td>
{doctor.name}
</td>

<td>
{doctor.specialization}
</td>

<td>
{doctor.experience}
</td>

<td>
{doctor.phone}
</td>

<td>

<Link
to={`/doctor/${doctor._id}`}
>
<button>
View
</button>
</Link>

{" "}

<Link
to={`/edit-doctor/${doctor._id}`}
>
<button>
Edit
</button>
</Link>

{" "}

<button
onClick={()=>
handleDelete(
doctor._id
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

export default Doctors;