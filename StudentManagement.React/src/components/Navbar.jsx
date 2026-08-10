import { Link, useNavigate } from "react-router-dom";
import { getUserRole } from "../services/authService";

function Navbar() {
    const navigate = useNavigate();
    const role = getUserRole();
    const handleLogout = () => {
        sessionStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link
                    className="navbar-brand"
                    to="/students"
                >
                    Student Management
                </Link>
                <div className="d-flex align-items-center">
                    <span className="text-white me-3">
                        {role}
                    </span>
                    <Link
                        className="btn btn-outline-light me-2"
                        to="/students"
                    >
                        Students
                    </Link>
                    <button
                        className="btn btn-danger"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;