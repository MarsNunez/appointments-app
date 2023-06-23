import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ createAppointment }) => {
  // Create Appointment State
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      owner.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    // ID
    appointment.id = uuidv4();

    // Create Appointment
    createAppointment(appointment);

    // Reset Form
    setAppointment({
      pet: "",
      owner: "",
      date: "",
      time: "",
      symptoms: "",
    });
  };

  const { pet, owner, date, time, symptoms } = appointment;

  return (
    <>
      <h2>Crear cheque</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son requeridos</p>
      ) : null}

      <form onSubmit={handleSubmit}>
        <label>Banco</label>
        <input
          type="text"
          placeholder="Banco"
          className="u-full-width"
          name="pet"
          onChange={handleChange}
          value={pet}
        />

        <label>DNI Receptor</label>
        <input
          type="text"
          placeholder="DNI Receptor"
          className="u-full-width"
          name="owner"
          onChange={handleChange}
          value={owner}
        />

        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          name="date"
          onChange={handleChange}
          value={date}
        />

        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          name="time"
          onChange={handleChange}
          value={time}
        />

        <label>DNI Emisor</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={handleChange}
          value={symptoms}
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
          onChange={handleChange}
        >
          Añadir Cheque
        </button>
      </form>
    </>
  );
};

export default Form;
