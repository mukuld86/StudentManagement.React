import { useState } from "react";
import axios from "axios";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://localhost:7009/api/auth/login", {
                username: username,
                password: password
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h2 className="text-center mb-4"> Student Management System </h2>
                    <h6>React for frontend and Web API with C# for backedn</h6>
                    <form onSubmit={handleSubmit }>
                        <div className="mb-3">
                            <label className="form-label"> Username </label>
                            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Password </label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-primary w-100"> Login </button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;