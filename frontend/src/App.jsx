import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import Patients from "./pages/Patients";
import AddPatient from "./pages/AddPatient";
import PatientDetails from "./pages/PatientDetails";
import EditPatient from "./pages/EditPatient";

import Appointments from "./pages/Appointments";
import AddAppointment from "./pages/AddAppointment";
import AppointmentDetails from "./pages/AppointmentDetails";
import EditAppointment from "./pages/EditAppointment";

import Treatments from "./pages/Treatments";
import AddTreatment from "./pages/AddTreatment";
import TreatmentDetails from "./pages/TreatmentDetails";
import EditTreatment from "./pages/EditTreatment";

import FollowUps from "./pages/FollowUps";
import AddFollowUp from "./pages/AddFollowUp";
import FollowUpDetails from "./pages/FollowUpDetails";
import EditFollowUp from "./pages/EditFollowUp";

import ProtectedRoute from "./components/ProtectedRoute";
import Doctors from "./pages/Doctors";
import AddDoctor from "./pages/AddDoctor";
import DoctorDetails from "./pages/DoctorDetails";
import EditDoctor from "./pages/EditDoctor";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Login */}

        <Route
          path="/"
          element={<Login />}
        />

        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Patients */}

        <Route
          path="/patients"
          element={
            <ProtectedRoute>
              <Patients />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-patient"
          element={
            <ProtectedRoute>
              <AddPatient />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient/:id"
          element={
            <ProtectedRoute>
              <PatientDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-patient/:id"
          element={
            <ProtectedRoute>
              <EditPatient />
            </ProtectedRoute>
          }
        />

        {/* Appointments */}

        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-appointment"
          element={
            <ProtectedRoute>
              <AddAppointment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/appointment/:id"
          element={
            <ProtectedRoute>
              <AppointmentDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-appointment/:id"
          element={
            <ProtectedRoute>
              <EditAppointment />
            </ProtectedRoute>
          }
        />

        {/* Treatments */}

        <Route
          path="/treatments"
          element={
            <ProtectedRoute>
              <Treatments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-treatment"
          element={
            <ProtectedRoute>
              <AddTreatment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/treatment/:id"
          element={
            <ProtectedRoute>
              <TreatmentDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-treatment/:id"
          element={
            <ProtectedRoute>
              <EditTreatment />
            </ProtectedRoute>
          }
        />

        {/* Follow Ups */}

        <Route
          path="/followups"
          element={
            <ProtectedRoute>
              <FollowUps />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-followup"
          element={
            <ProtectedRoute>
              <AddFollowUp />
            </ProtectedRoute>
          }
        />

        <Route
          path="/followup/:id"
          element={
            <ProtectedRoute>
              <FollowUpDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-followup/:id"
          element={
            <ProtectedRoute>
              <EditFollowUp />
            </ProtectedRoute>
          }
        />
        <Route
path="/doctors"
element={
<ProtectedRoute>
<Doctors />
</ProtectedRoute>
}
/>

<Route
path="/add-doctor"
element={
<ProtectedRoute>
<AddDoctor />
</ProtectedRoute>
}
/>

<Route
path="/doctor/:id"
element={
<ProtectedRoute>
<DoctorDetails />
</ProtectedRoute>
}
/>

<Route
path="/edit-doctor/:id"
element={
<ProtectedRoute>
<EditDoctor />
</ProtectedRoute>
}
/>

      </Routes>

    </BrowserRouter>

  );

}

export default App;