import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({createAppointment}) => {

  // Create Appointment State
  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: '',
  })

  const [error, setError] = useState(false)

  const handleChange = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    // Validate
    if( pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || owner.trim() === '' ) {
      setError(true)
      return;
    }
    setError(false)

    // ID
    appointment.id = uuidv4();

    // Create Appointment
    createAppointment(appointment);

    // Reset Form
    setAppointment({
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptoms: '',
    })

  }

  const { pet, owner, date, time, symptoms } = appointment;

  return (
    <>
      <h2>Create Appointment</h2>

      { error ? <p className='alerta-error'>All blanks are required</p> : null }

      <form
        onSubmit={handleSubmit}
      >
        <label>Pet Name</label>
        <input 
          type="text"
          placeholder='Pet Name'
          className='u-full-width'
          name='pet'
          onChange={handleChange}
          value={pet}
        />

        <label>Owner Name</label>
        <input 
          type="text"
          placeholder='Owner Name'
          className='u-full-width'
          name='owner'
          onChange={handleChange}
          value={owner}
        />

        <label>Date</label>
        <input 
          type="date"
          className='u-full-width'
          name='date'
          onChange={handleChange}
          value={date}
        />
        
        <label>Time</label>
        <input 
          type="time"
          className='u-full-width'
          name='time'
          onChange={handleChange}
          value={time}
        />

        <label>Symptoms</label>
        <textarea
          className='u-full-width'
          name='symptoms'
          onChange={handleChange}
          value={symptoms}
        ></textarea>

        <button
          type='submit'
          className='u-full-width button-primary'
          onChange={handleChange}
        >Add Appointment</button>

      </form>
    </>
  )
}

export default Form;