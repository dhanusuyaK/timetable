import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './TeacherButton.css'; // Custom CSS for TeacherButton
import NavScrollExample from '../components/Navbar';

const TeacherButton = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Functions to handle navigation
  const handleGenerateTimetable = () => navigate('/generate-timetable');
  const handleViewTimetable = () => navigate('/view-timetable');

  return (
    <>
      <NavScrollExample />
      <div className="teacher-button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={handleGenerateTimetable}
          className="teacher-button"
        >
          Generate Timetable
        </Button>
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleViewTimetable}
          className="teacher-button"
        >
          View Timetable
        </Button>
      </div>
    </>
  );
};

export default TeacherButton;
