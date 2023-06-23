const Appointment = ({ appointment, deleteAppointment }) => (
  <div className="cita">
    <p>
      Banco: <span>{appointment.pet}</span>
    </p>
    <p>
      DNI Receptor: <span>{appointment.owner}</span>
    </p>
    <p>
      Fecha de emición: <span>{appointment.date}</span>
    </p>
    <p>
      Hora: <span>{appointment.time}</span>
    </p>
    <p>
      DNI Emisor: <span>{appointment.symptoms}</span>
    </p>

    <button
      className="button eliminar u-full-width"
      onClick={() => deleteAppointment(appointment.id)}
    >
      Borrar &times;
    </button>
  </div>
);

export default Appointment;
