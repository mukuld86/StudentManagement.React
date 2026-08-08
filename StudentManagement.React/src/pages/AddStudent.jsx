import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../services/studentService";

function AddStudent() {

    const [registrationNumber, setRegistrationNumber] = useState("");
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

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
            await addStudent(student);
            navigate("/students");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-4">
                        Add Student
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">
                                Registration Number
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                value={registrationNumber}
                                onChange={(e) =>
                                    setRegistrationNumber(e.target.value)
                                }
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Name </label>
                            <input type="text" className="form-control" value={name} 
                                onChange={(e) =>
                                    setName(e.target.value)
                                } required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Course </label>
                            <input type="text" className="form-control" value={course} onChange={(e) =>
                                    setCourse(e.target.value)
                                } required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Age </label>
                            <input type="number" className="form-control" value={age} onChange={(e) =>
                                    setAge(e.target.value)
                                } required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label"> Email </label>
                            <input type="email" className="form-control" value={email} onChange={(e) =>
                                    setEmail(e.target.value)
                                } required />
                        </div>

                        <button type="submit" className="btn btn-primary"> Add Student </button>
                        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/students")} >Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddStudent;