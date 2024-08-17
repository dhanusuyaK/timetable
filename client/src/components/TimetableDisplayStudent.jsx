// import React from 'react';
// import './TimetableDisplayStudent.css'; // Ensure this CSS file contains the necessary styles

// const TimetableDisplayStudent = ({ timetable }) => {
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const timeSlots = [
//         '8:45 - 9:35 AM',
//         '9:35 - 10:25 AM',
//         '10:40 - 11:30 AM',
//         '11:30 AM - 12:20 PM',
//         '2:20 - 3:10 PM',
//         '3:25 - 4:40 PM'
//     ];

//     // Create a structure for timetable data
//     const timetableMap = {};

//     // Initialize timetableMap with empty values
//     timeSlots.forEach(slot => {
//         timetableMap[slot] = {};
//         days.forEach(day => {
//             timetableMap[slot][day] = { subject: 'EMPTY', faculty_name: '' };
//         });
//     });

//     // Populate timetableMap with actual data
//     timetable.forEach(entry => {
//         timetableMap[entry.time_slot][entry.day] = {
//             subject: entry.subject_name,
//             faculty_name: entry.faculty_name
//         };
//     });

//     return (
//         <div className="timetable-container">
//             <h3>Timetable</h3>
//             <table className="timetable-table">
//                 <thead>
//                     <tr>
//                         <th>Time Slot</th>
//                         {days.map(day => (
//                             <th key={day}>{day}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {timeSlots.map(slot => (
//                         <tr key={slot}>
//                             <td>{slot}</td>
//                             {days.map(day => {
//                                 const { subject, faculty_name } = timetableMap[slot][day];
//                                 return (
//                                     <td key={day}>
//                                         {subject}<br />
//                                         {faculty_name}
//                                     </td>
//                                 );
//                             })}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default TimetableDisplayStudent;









import React from 'react';
import './TimetableDisplayStudent.css'; // Ensure this CSS file contains the necessary styles

const TimetableDisplayStudent = ({ timeSlots, days, timetableMap }) => {
    return (
        <div className="timetable-container mt-4">
            <h3>Timetable</h3>
            <table className="timetable-table">
                <thead>
                    <tr>
                        <th>Time Slot</th>
                        {days.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map(slot => (
                        <tr key={slot}>
                            <td>{slot}</td>
                            {days.map(day => {
                                const { subject, faculty_name } = timetableMap[slot][day];
                                return (
                                    <td key={day}>
                                        {subject}<br />
                                        {faculty_name}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TimetableDisplayStudent;
