import { useEffect, useState } from "react";

import {
  getAppointments,
  cancelAppointment,
  completeAppointment
} from "../services/appointmentService";

import { Link } from "react-router-dom";

function Appointments() {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {

    try {

      const data = await getAppointments();

      setAppointments(data);

    } catch (error) {

      console.log(error);

    }

  };

  const handleCancel = async (id) => {

    try {

      await cancelAppointment(id);

      fetchAppointments();

    } catch (error) {

      console.log(error);

    }

  };

  const handleComplete = async (id) => {

    try {

      await completeAppointment(id);

      fetchAppointments();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div>

      <h1>Appointments</h1>

      <table border="1">

        <thead>

          <tr>

            <th>Patient</th>

            <th>Doctor</th>

            <th>Date</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {appointments.map((appointment) => (

            <tr key={appointment._id}>

              <td>
                {appointment.patient?.fullName}
              </td>

              <td>
                {appointment.doctor}
              </td>

              <td>
                {new Date(
                  appointment.appointmentDate
                ).toLocaleDateString()}
              </td>

              <td>
                {appointment.status}
              </td>

              <td>

                <Link
                  to={`/appointment/${appointment._id}`}
                >
                  <button>
                    View
                  </button>
                </Link>

                {" "}

                <Link
                  to={`/edit-appointment/${appointment._id}`}
                >
                  <button>
                    Edit
                  </button>
                </Link>

                {" "}

                <button
                  onClick={() =>
                    handleComplete(
                      appointment._id
                    )
                  }
                >
                  Complete
                </button>

                {" "}

                <button
                  onClick={() =>
                    handleCancel(
                      appointment._id
                    )
                  }
                >
                  Cancel
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Appointments;