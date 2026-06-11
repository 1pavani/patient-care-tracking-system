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

getDoctorById,
updateDoctor

}
from "../services/doctorService";

function EditDoctor() {

const { id } =
useParams();

const navigate =
useNavigate();

const [formData,
setFormData] =
useState({

name:"",
specialization:"",
experience:"",
phone:"",
email:"",
address:""

});

useEffect(()=>{

fetchDoctor();

},[]);

const fetchDoctor =
async()=>{

const data =
await getDoctorById(id);

setFormData(data);

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

await updateDoctor(
id,
formData
);

navigate(
"/doctors"
);

};

return(

<div>

<h1>
Edit Doctor
</h1>

<form
onSubmit={
handleSubmit
}
>

<input
name="name"
value={formData.name}
onChange={handleChange}
/>

<br/><br/>

<input
name="specialization"
value={formData.specialization}
onChange={handleChange}
/>

<br/><br/>

<input
name="experience"
value={formData.experience}
onChange={handleChange}
/>

<br/><br/>

<input
name="phone"
value={formData.phone}
onChange={handleChange}
/>

<br/><br/>

<input
name="email"
value={formData.email}
onChange={handleChange}
/>

<br/><br/>

<textarea
name="address"
value={formData.address}
onChange={handleChange}
/>

<br/><br/>

<button>
Update Doctor
</button>

</form>

</div>

);

}

export default EditDoctor;