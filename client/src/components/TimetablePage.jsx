import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import TimetableDisplayStudent from './TimetableDisplayStudent';
import './TimetablePage.css';
import NavScrollExample from '../components/Navbar';

const TimetablePage = () => {
    const [timetable, setTimetable] = useState({});
    const [error, setError] = useState('');
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const classroomNumber = queryParams.get('classroomNumber');

    useEffect(() => {
        const fetchTimetable = async () => {
            try {
                const response = await axios.post('http://localhost:5000/generate-timetable-student', {
                    classroomNumber: classroomNumber
                });
                setTimetable(response.data);
            } catch (err) {
                console.error('Error fetching timetable', err);
                setError('There was an error fetching the timetable. Please try again.');
            }
        };

        if (classroomNumber) {
            fetchTimetable();
        }
    }, [classroomNumber]);

    return (
        <>
            <NavScrollExample />
            <div className="content-padding">
                <div className="timetable-page">
                    <h2>Timetable for Classroom {classroomNumber}</h2>
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                    {timetable.timeSlots && timetable.days && timetable.timetableMap && (
                        <TimetableDisplayStudent
                            timeSlots={timetable.timeSlots}
                            days={timetable.days}
                            timetableMap={timetable.timetableMap}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default TimetablePage;
