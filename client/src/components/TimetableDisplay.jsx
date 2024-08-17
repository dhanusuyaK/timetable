// import React, { useEffect, useState } from 'react';
// import './TimetableDisplay.css'; // Import the updated CSS file

// const TimetableDisplay = ({ teacherId }) => {
//     const [timetable, setTimetable] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Define days of the week and time slots
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const timeSlots = [
//         '8:45 - 9:35 AM',
//         '9:35 - 10:25 AM',
//         '10:40 - 11:30 AM',
//         '11:30 AM - 12:20 PM',
//         '2:20 - 3:10 PM',
//         '3:25 - 4:40 PM'
//     ];

//     useEffect(() => {
//         const fetchTimetable = async () => {
//             setLoading(true);
//             try {
//                 const response = await fetch(`http://localhost:5000/timetable/${teacherId}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 console.log('Fetched timetable data:', data); // Log fetched data
//                 setTimetable(data);
//             } catch (error) {
//                 console.error('Error fetching timetable:', error);
//                 setError('Error fetching timetable data');
//                 setTimetable([]);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchTimetable();
//     }, [teacherId]);

//     if (loading) return <p>Loading timetable...</p>;
//     if (error) return <p>{error}</p>;

//     // Create a timetable matrix
//     const timetableMatrix = days.map(day => {
//         return timeSlots.map(slot => {
//             const entry = timetable.find(
//                 item => item.day === day && item.time_slot === slot
//             );
//             if (entry) {
//                 return entry.subject_name === "EMPTY" 
//                     ? "-" 
//                     : `${entry.subject_name} (Room ${entry.classroom_id})`;
//             }
//             return "-"; // Default case if no entry is found
//         });
//     });
    
//     return (
//         <div className="timetable-container">
//             <h2>Timetable for Teacher ID: {teacherId}</h2>
//             <table className="timetable-table">
//                 <thead>
//                     <tr>
//                         <th>Day/Time</th>
//                         {timeSlots.map((slot, index) => (
//                             <th key={index}>{slot}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {days.map((day, rowIndex) => (
//                         <tr key={day}>
//                             <td>{day}</td>
//                             {timetableMatrix[rowIndex].map((cell, cellIndex) => (
//                                 <td key={cellIndex} className={cell === '-' ? 'empty-cell' : ''}>
//                                     {cell}
//                                 </td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default TimetableDisplay;






















// import React, { useEffect, useState } from 'react';
// import './TimetableDisplay.css'; // Import the updated CSS file

// const TimetableDisplay = ({ teacherId }) => {
//     const [timetable, setTimetable] = useState([]);
//     const [facultyId, setFacultyId] = useState(''); // State for faculty ID
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Define days of the week and time slots
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const timeSlots = [
//         '8:45 - 9:35 AM',
//         '9:35 - 10:25 AM',
//         '10:40 - 11:30 AM',
//         '11:30 AM - 12:20 PM',
//         '2:20 - 3:10 PM',
//         '3:25 - 4:40 PM'
//     ];

//     useEffect(() => {
//         const fetchTimetable = async () => {
//             setLoading(true);
//             try {
//                 // Fetch timetable data
//                 const response = await fetch(`http://localhost:5000/timetable/${teacherId}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
                
//                 if (data.length > 0) {
//                     // Assuming faculty_id is the same for all entries
//                     setFacultyId(data[0].faculty_id);
//                 }

//                 setTimetable(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setError('Error fetching timetable data');
//                 setTimetable([]);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchTimetable();
//     }, [teacherId]);

//     if (loading) return <p>Loading timetable...</p>;
//     if (error) return <p>{error}</p>;

//     // Create a timetable matrix
//     const timetableMatrix = days.map(day => {
//         return timeSlots.map(slot => {
//             const entry = timetable.find(
//                 item => item.day === day && item.time_slot === slot
//             );
//             if (entry) {
//                 return entry.subject_name === "EMPTY" 
//                     ? "-" 
//                     : `${entry.subject_name} (Room ${entry.classroom_id})`;
//             }
//             return "-"; // Default case if no entry is found
//         });
//     });
    
//     return (
//         <div className="timetable-container">
//             <h2>Timetable for Faculty ID: {facultyId}</h2>
//             <table className="timetable-table">
//                 <thead>
//                     <tr>
//                         <th>Day/Time</th>
//                         {timeSlots.map((slot, index) => (
//                             <th key={index}>{slot}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {days.map((day, rowIndex) => (
//                         <tr key={day}>
//                             <td>{day}</td>
//                             {timetableMatrix[rowIndex].map((cell, cellIndex) => (
//                                 <td key={cellIndex} className={cell === '-' ? 'empty-cell' : ''}>
//                                     {cell}
//                                 </td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default TimetableDisplay;



















import React, { useEffect, useState } from 'react';
import './TimetableDisplay.css'; // Import the updated CSS file

const TimetableDisplay = ({ teacherId }) => {
    const [timetable, setTimetable] = useState([]);
    const [facultyId, setFacultyId] = useState(''); // State for faculty ID
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Define days of the week and time slots
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const timeSlots = [
        '8:45 - 9:35 AM',
        '9:35 - 10:25 AM',
        '10:40 - 11:30 AM',
        '11:30 AM - 12:20 PM',
        '2:20 - 3:10 PM',
        '3:25 - 4:40 PM'
    ];

    useEffect(() => {
        const fetchTimetable = async () => {
            setLoading(true);
            try {
                // Fetch timetable data
                const response = await fetch(`http://localhost:5000/timetable/${teacherId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                
                if (data.length > 0) {
                    // Assuming faculty_id is the same for all entries
                    setFacultyId(data[0].faculty_id);
                }

                setTimetable(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching timetable data');
                setTimetable([]);
            } finally {
                setLoading(false);
            }
        };

        fetchTimetable();
    }, [teacherId]);

    if (loading) return <p>Loading timetable...</p>;
    if (error) return <p>{error}</p>;

    // Create a timetable matrix
    const timetableMatrix = days.map(day => {
        return timeSlots.map(slot => {
            const entry = timetable.find(
                item => item.day === day && item.time_slot === slot
            );
            if (entry) {
                return entry.subject_name === "EMPTY" 
                    ? "-" 
                    : `${entry.subject_name} (Room ${entry.classroom_id})`;
            }
            return "-"; // Default case if no entry is found
        });
    });
    
    return (
        <div className="timetable-container">
            <h2>Timetable for Faculty ID: {teacherId}</h2>
            <table className="timetable-table">
                <thead>
                    <tr>
                        <th>Day/Time</th>
                        {timeSlots.map((slot, index) => (
                            <th key={index}>{slot}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {days.map((day, rowIndex) => (
                        <tr key={day}>
                            <td>{day}</td>
                            {timetableMatrix[rowIndex].map((cell, cellIndex) => (
                                <td key={cellIndex} className={cell === '-' ? 'empty-cell' : ''}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TimetableDisplay;



