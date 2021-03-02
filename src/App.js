import { useState } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  const [appointments, setAppointments] = useState([]);

  const createAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ])
  }

  const deleteAppointment = id => {
    const newAppointments = appointments.filter( appointment => appointment.id !== id )
    setAppointments(newAppointments);
  }

  return (
    <>
      <h1>Patients Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              createAppointment={createAppointment}
            />
          </div>
          <div className="one-half column">
            { appointments.length <= 0 ? <h2>There's no Appointments</h2> : <h2>Manage your Appointments</h2>}
            { appointments.map( appointment => (
              <Appointment 
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            )) }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


