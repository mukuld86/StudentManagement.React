import axios from 'axios';
import { useEffect, useState } from 'react';


function Students() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const getStudents = async () => {
            const token = localStorage.getItem("token");
            const response = await axios.get("https://localhost:7009/api/Student", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setStudents(response.data);
        }
        getStudents();
    }, []);
    return (
        <>
            <div className="container mt-4">

                <h2 className="mb-4">
                    Students
                </h2>

                <table className="table table-bordered table-striped">

                    <thead>
                        <tr>
                            <th>Student Id</th>
                            <th>Registration Number</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {students.map(student => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.registrationNumber}</td>
                                <td>{student.name}</td>
                                <td>{student.course}</td>
                                <td>{student.age}</td>
                                <td>{student.email}</td>
                                <td> <button>Edit </button> <button>Delete</button></td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>
        </>
    )
}
export default Students;