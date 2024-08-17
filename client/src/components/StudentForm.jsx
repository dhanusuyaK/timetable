import React, { useState } from 'react';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import NavScrollExample from '../components/Navbar'; // Adjust import path if needed
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './StudentForm.css'; // Adjust import path if needed

const StudentForm = () => {
    const [classroomNumber, setClassroomNumber] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        try {
            // Perform a test fetch to ensure classroomNumber exists
            await axios.post('http://localhost:5000/generate-timetable-student', {
                classroomNumber: classroomNumber
            });

            // Redirect to TimetablePage with classroomNumber as a query parameter
            navigate(`/timetable-page?classroomNumber=${classroomNumber}`);
            setSuccess('Timetable fetched successfully!');
        } catch (err) {
            console.error('Error fetching timetable', err);
            setError('There was an error fetching the timetable. Please try again.');
        }
    };

    return (
        <div>
            <NavScrollExample />
            <Container className="form-container pt-2">
                <h2>Student Information Form</h2>
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel controlId="floatingClassroomNumber" label="Classroom Number" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Classroom Number"
                            value={classroomNumber}
                            onChange={(e) => setClassroomNumber(e.target.value)}
                            required
                        />
                    </FloatingLabel>

                    <Button className='btn1' variant="primary" type="submit">
                        Fetch Timetable
                    </Button>
                </Form>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
                {success && <div className="alert alert-success mt-3">{success}</div>}
            </Container>
        </div>
    );
};

export default StudentForm;
