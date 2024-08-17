import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import NavScrollExample from '../components/Navbar'; // Adjust the import path if necessary
import './ClassroomTimetable.css'; // Import the CSS file

const ClassroomTimetable = () => {
    const [classroomId, setClassroomId] = useState('');
    const [timetable, setTimetable] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const response = await axios.get(`http://localhost:5000/classroom-timetable/${classroomId}`);
            setTimetable(response.data);
        } catch (err) {
            console.error('Error fetching timetable', err);
            setError('There was an error fetching the timetable. Please try again.');
        }
    };

    return (
        <div>
            <NavScrollExample />
            <Container className="timetable-container pt-2">
                <h2>Classroom Timetable</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Classroom ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Classroom ID"
                            value={classroomId}
                            onChange={(e) => setClassroomId(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Fetch Timetable
                    </Button>
                </Form>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
                {timetable.length > 0 && (
                    <Table striped bordered hover className="mt-3 timetable-table">
                        <thead>
                            <tr>
                                <th>Teacher ID</th>
                                <th>Subject</th>
                                <th>Day</th>
                                <th>Time Slot</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timetable.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.teacher_id}</td>
                                    <td>{entry.subject_name}</td>
                                    <td>{entry.day}</td>
                                    <td>{entry.time_slot}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </Container>
        </div>
    );
};

export default ClassroomTimetable;
