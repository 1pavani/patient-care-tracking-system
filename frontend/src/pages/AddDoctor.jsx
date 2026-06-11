import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
createDoctor
}
from "../services/doctorService";

function AddDoctor() {

const navigate =
useNavigate();

const [formData,
setFormData] =
useState({

name:"",
email:"",
password:"",
specialization:"",
experience:"",
phone:"",
address:""

});

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

await createDoctor(
formData
);

navigate(
"/doctors"
);

};

return(

<div>

<h1>
Add Doctor
</h1>

<form
onSubmit={
handleSubmit
}
>

<input
type="text"
name="name"
placeholder="Doctor Name"
onChange={handleChange}
/>

<br/><br/>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
/>

<br/><br/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
/>

<br/><br/>

<input
type="text"
name="specialization"
placeholder="Specialization"
onChange={handleChange}
/>

<br/><br/>

<input
type="number"
name="experience"
placeholder="Experience"
onChange={handleChange}
/>

<br/><br/>

<input
type="text"
name="phone"
placeholder="Phone"
onChange={handleChange}
/>

<br/><br/>

<textarea
name="address"
placeholder="Address"
onChange={handleChange}
/>

<br/><br/>

<button>
Add Doctor
</button>

</form>

</div>

);

}

export default AddDoctor;