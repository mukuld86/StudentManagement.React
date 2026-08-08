import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStudent, updateStudent} from "../services/studentService";

function EditStudent() {

    const { registrationNumber } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const loadStudent = async () => {
            try {
                const student = await getStudent(
                    Number(registrationNumber)
                );
                setName(student.name);
                setCourse(student.course);
                setAge(student.age);
                setEmail(student.email);
            } catch (error) {
                console.log(error);
            }
        };
        loadStudent();
    }, [registrationNumber]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const student = {
            registrationNumber: Number(registrationNumber),
            name: name,
            course: course,
            age: Number(age),
            email: email
        };
        try {
            await updateStudent(student);
            navigate("/students");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-4">Edit Student</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Registration Number</label>
                            <input type="number" className="form-control" value={registrationNumber} readOnly />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} onChange={(e) =>
                                    setName(e.target.value)
                                }
                                required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Course</label>
                            <input type="text" className="form-control" value={course} onChange={(e) =>
                                    setCourse(e.target.value)
                                }
                                required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Age</label>
                            <input type="number" className="form-control" value={age} onChange={(e) =>
                                    setAge(e.target.value)
                                }
                                required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Email</label>
                            <input type="email" className="form-control" value={email} onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required/>
                        </div>
                        <button type="submit" className="btn btn-primary" >Update Student</button>
                        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/students")} >Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditStudent;