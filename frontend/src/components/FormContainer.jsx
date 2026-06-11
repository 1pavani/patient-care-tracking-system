function FormContainer({
children,
title
}){

return(

<div
style={{
maxWidth:"700px",
margin:"30px auto",
background:"white",
padding:"30px",
borderRadius:"10px",
boxShadow:
"0 2px 10px rgba(0,0,0,0.1)"
}}
>

<h2>{title}</h2>

{children}

</div>

);

}

export default FormContainer;