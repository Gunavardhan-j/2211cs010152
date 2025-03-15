import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [events, setEvents] = useState([]);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/events')
            .then(res => setEvents(res.data))
            .catch(err => console.log(err));
    }, []);

    const addEvent = () => {
        setError(''); // Reset error message
        axios.post('http://localhost:5000/events/add', { name, date, location })
            .then(res => {
                setEvents([...events, res.data]);
                setName('');
                setDate('');
                setLocation('');
            })
            .catch(err => {
                setError('Failed to add event. Please try again.'); // Set error message on failure
                console.log(err);
            });
    };

    const deleteEvent = (id) => {
        axios.delete(`http://localhost:5000/events/${id}`)
            .then(() => setEvents(events.filter(event => event._id !== id)))
            .catch(err => console.log(err));
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Event Management</h1>
            <input type="text" placeholder="Event Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            {error && <p style={{ color: 'red' }}>{error}</p>} // Display error message
            <button onClick={addEvent} disabled={!name || !date || !location}>Add Event</button> // Disable button if fields are empty
            <ul>
                {events.map(event => (
                    <li key={event._id}>
                        {event.name} - {event.date} - {event.location}
                        <button onClick={() => deleteEvent(event._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
