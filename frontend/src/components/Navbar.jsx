function Navbar() {

    const user =
    JSON.parse(
        localStorage.getItem("user")
    );

    return (

        <div
style={{
display:"flex",
justifyContent:
"space-between",
background:"#fff",
padding:"15px"
}}
>

<h2>
Patient Care System
</h2>

<div>

Welcome,
{user?.name}

(
{user?.role}
)

</div>

</div>

    );

}

export default Navbar;