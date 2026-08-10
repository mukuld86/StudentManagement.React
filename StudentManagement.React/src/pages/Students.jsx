import { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from "../services/studentService";
import { useNavigate } from 'react-router-dom';
import { getUserRole } from "../services/authService";  

function Students() {
    // states
    const [role, setRole] = useState(null);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // useEffects
    useEffect(() => {
        const userRole = getUserRole();
        console.log("USER ROLE:", userRole);
        setRole(userRole);
    }, []);
    useEffect(() => {
        const loadStudents = async () => {
            try {
                setLoading(true);
                setError("");
                const data = await getStudents();
                setStudents(data);
            } catch (error) {
                console.log(error);
                setError("Failed to load students.");
            } finally {
                setLoading(false);
            }
        };
        loadStudents();
    }, []);


    // other functions
    const handleDelete = async (registrationNumber) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this student?");
        if (!confirmDelete)
            return;

        try {
            await deleteStudent(registrationNumber);
            setStudents(
                students.filter(student => student.registrationNumber !== registrationNumber)
            );
        } catch (error) {
            console.log(error);
            setError("Unable to delete student");
        }
    }

    return (
        <>
            <div className="container mt-4">

                <h2 className="mb-4">
                    Students
                </h2>

                {role === "Admin" && (
                    // addstudent button appears only when logged in as admin
                    <button
                        className="btn btn-primary mb-3"
                        onClick={() => navigate("/students/add")}
                    > Add Student</button>
                )}

                {error && (
                    // in case of error
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}
                
                {loading && ( // loading screen while content loads
                    <div className="alert alert-info">
                        Loading students...
                    </div>
                )}
                { !loading && !error &&
                (<table className="table table-bordered table-striped">

                    <thead>
                        <tr>
                            <th>Student Id</th>
                            <th>Registration Number</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Age</th>
                            <th>Email</th>
                            {
                            (role === "Admin" || role === "Teacher") && (
                                <th>Actions</th>
                            )
                            }
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
                                <td>
                                    {
                                        (role === "Admin" || role === "Teacher") && (
                                            <button className="btn btn-warning btn-sm" onClick={() => navigate(
                                                `/students/edit/${student.registrationNumber}`)}>Edit</button>
                                        )
                                    } 
                                    {role === "Admin" && (
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                handleDelete(student.registrationNumber)
                                            }
                                        >
                                            Delete
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>
                )}

            </div>
        </>
    )
}
export default Students;