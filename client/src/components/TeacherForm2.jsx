import React, { useState } from 'react';
import { Container, FloatingLabel, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './TeacherForm2.css'; // Corrected path to your CSS file
import NavScrollExample from '../components/Navbar';

const TeacherForm2 = () => {
    const [facultyId, setFacultyId] = useState('');
    const [timetable, setTimetable] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleViewTimetable = async () => {
        setError('');
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/timetable/${facultyId}`);
            setTimetable(response.data);
        } catch (error) {
            console.error('Error fetching timetable', error);
            setError('There was an error fetching the timetable. Please try again.');
            setTimetable([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <NavScrollExample />
            <Container className="teacher-form2-container pt-3">
                <h2>View Timetable</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <FloatingLabel controlId="floatingFacultyId" label="Faculty ID" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Faculty ID"
                        value={facultyId}
                        onChange={(e) => setFacultyId(e.target.value)}
                        required
                    />
                </FloatingLabel>
                <Button variant="primary" onClick={handleViewTimetable} disabled={loading}>
                    View
                </Button>
                {loading && <p>Loading timetable...</p>}
                {timetable.length > 0 && (
                    <div className="timetable-display mt-4">
                        <h3>Timetable for Faculty ID: {facultyId}</h3>
                        <table className="timetable-table">
                            <thead>
                                <tr>
                                    <th>Day/Time</th>
                                    {['8:45 - 9:35 AM', '9:35 - 10:25 AM', '10:40 - 11:30 AM', '11:30 AM - 12:20 PM', '2:20 - 3:10 PM', '3:25 - 4:40 PM'].map((slot, index) => (
                                        <th key={index}>{slot}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, rowIndex) => (
                                    <tr key={day}>
                                        <td>{day}</td>
                                        {['8:45 - 9:35 AM', '9:35 - 10:25 AM', '10:40 - 11:30 AM', '11:30 AM - 12:20 PM', '2:20 - 3:10 PM', '3:25 - 4:40 PM'].map((slot, cellIndex) => {
                                            const entry = timetable.find(item => item.day === day && item.time_slot === slot);
                                            return (
                                                <td key={cellIndex} className={entry ? '' : 'empty-cell'}>
                                                    {entry ? `${entry.subject_name} (Room ${entry.classroom_id})` : '-'}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </Container>
        </>
    );
};

export default TeacherForm2;
