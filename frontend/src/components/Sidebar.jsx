import { Link } from "react-router-dom";

function Sidebar() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const role = user?.role;

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    window.location.href = "/";

  };

  return (

    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px"
      }}
    >

      <h2>
        Patient Care
      </h2>

      <hr />

      <p>
        Logged in as:
        <br />
        <b>
          {role?.toUpperCase()}
        </b>
      </p>

      <br />

      <Link
        to="/dashboard"
        style={{ color:"white" }}
      >
        Dashboard
      </Link>

      <br />
      <br />

      {/* DOCTOR MANAGEMENT - ADMIN ONLY */}

      {role === "admin" && (
        <>
          <Link
            to="/doctors"
            style={{ color:"white" }}
          >
            Doctors
          </Link>

          <br />
          <br />

          <Link
            to="/add-doctor"
            style={{ color:"white" }}
          >
            Add Doctor
          </Link>

          <br />
          <br />
        </>
      )}

      {/* PATIENTS */}

      {(role === "admin" ||
        role === "receptionist") && (
        <>
          <Link
            to="/patients"
            style={{ color:"white" }}
          >
            Patients
          </Link>

          <br />
          <br />

          <Link
            to="/add-patient"
            style={{ color:"white" }}
          >
            Add Patient
          </Link>

          <br />
          <br />
        </>
      )}

      {/* APPOINTMENTS */}

      {(role === "admin" ||
        role === "doctor" ||
        role === "receptionist") && (
        <>
          <Link
            to="/appointments"
            style={{ color:"white" }}
          >
            Appointments
          </Link>

          <br />
          <br />

          {(role === "admin" ||
            role === "receptionist") && (
            <>
              <Link
                to="/add-appointment"
                style={{ color:"white" }}
              >
                Add Appointment
              </Link>

              <br />
              <br />
            </>
          )}
        </>
      )}

      {/* TREATMENTS */}

      {(role === "admin" ||
        role === "doctor") && (
        <>
          <Link
            to="/treatments"
            style={{ color:"white" }}
          >
            Treatments
          </Link>

          <br />
          <br />

          <Link
            to="/add-treatment"
            style={{ color:"white" }}
          >
            Add Treatment
          </Link>

          <br />
          <br />
        </>
      )}

      {/* FOLLOW UPS */}

      {(role === "admin" ||
        role === "doctor") && (
        <>
          <Link
            to="/followups"
            style={{ color:"white" }}
          >
            Follow Ups
          </Link>

          <br />
          <br />

          <Link
            to="/add-followup"
            style={{ color:"white" }}
          >
            Add Follow Up
          </Link>

          <br />
          <br />
        </>
      )}

      <button
        onClick={handleLogout}
        style={{
          marginTop:"20px",
          padding:"10px",
          width:"100%",
          cursor:"pointer"
        }}
      >
        Logout
      </button>

    </div>

  );

}

export default Sidebar;